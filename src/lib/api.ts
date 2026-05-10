/** Express API base from `VITE_API_URL` (no trailing slash). Empty = same-origin `/api` (use with Vite dev proxy). */
export function getApiBaseUrl(): string {
  const raw = import.meta.env.VITE_API_URL;
  if (typeof raw === "string" && raw.trim()) {
    return raw.trim().replace(/\/$/, "");
  }
  return "";
}

/** Full URL for API paths: absolute when `VITE_API_URL` is set, otherwise root-relative (proxied in dev). */
export function resolveApiUrl(path: string): string {
  const base = getApiBaseUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  if (base) return `${base}${p}`;
  // SSR: Node `fetch` needs an absolute URL; call Express directly (same as Vite proxy target in dev).
  if (typeof window === "undefined") {
    const internal =
      typeof process !== "undefined" &&
      typeof process.env.API_INTERNAL_URL === "string" &&
      process.env.API_INTERNAL_URL.trim()
        ? process.env.API_INTERNAL_URL.trim().replace(/\/$/, "")
        : "http://127.0.0.1:5000";
    return `${internal}${p}`;
  }
  return p;
}

export type AuthApiResponse = {
  _id: string;
  name: string;
  email: string;
  role?: string;
  token: string;
};

export type ProfileApiResponse = {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  createdAt?: string;
};

function parseApiError(data: { message?: string; errors?: Array<{ msg?: string }> }): string {
  if (Array.isArray(data.errors) && data.errors[0]?.msg) {
    return String(data.errors[0].msg);
  }
  if (typeof data.message === "string" && data.message) {
    return data.message;
  }
  return "Something went wrong";
}

/** POST JSON to the API; throws Error with a user-facing message on failure. */
export async function postAuthJson<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const url = resolveApiUrl(path);
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error(
      "Cannot reach the API. Start the backend on port 5000, or set VITE_API_URL if the server is elsewhere.",
    );
  }
  const data = (await res.json().catch(() => ({}))) as T & {
    message?: string;
    errors?: Array<{ msg?: string }>;
  };
  if (!res.ok) {
    throw new Error(parseApiError(data));
  }
  return data as T;
}

/** Newsletter signup (public). */
export async function subscribeNewsletter(email: string): Promise<{ message: string }> {
  return postAuthJson<{ message: string }>("/api/subscribers", {
    email: email.trim().toLowerCase(),
  });
}

/** GET JSON with Bearer token. */
export async function getAuthJson<T>(path: string, token: string): Promise<T> {
  const url = resolveApiUrl(path);
  let res: Response;
  try {
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch {
    throw new Error(
      "Cannot reach the API. Start the backend on port 5000, or set VITE_API_URL if the server is elsewhere.",
    );
  }
  const data = (await res.json().catch(() => ({}))) as T & {
    message?: string;
    errors?: Array<{ msg?: string }>;
  };
  if (!res.ok) {
    throw new Error(parseApiError(data));
  }
  return data as T;
}

/** POST/PATCH/DELETE JSON with Bearer token. */
export async function requestAuthJson<T>(
  path: string,
  token: string,
  options: { method?: string; body?: Record<string, unknown> },
): Promise<T> {
  const url = resolveApiUrl(path);
  const method = options.method ?? "POST";
  const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
  if (options.body) headers["Content-Type"] = "application/json";
  let res: Response;
  try {
    res = await fetch(url, {
      method,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
  } catch {
    throw new Error(
      "Cannot reach the API. Start the backend on port 5000, or set VITE_API_URL if the server is elsewhere.",
    );
  }
  const data = (await res.json().catch(() => ({}))) as T & {
    message?: string;
    errors?: Array<{ msg?: string }>;
  };
  if (!res.ok) {
    throw new Error(parseApiError(data));
  }
  return data as T;
}

/** GET current user from DB (requires valid JWT from login/register). */
export async function getAuthProfile(token: string): Promise<ProfileApiResponse> {
  const url = resolveApiUrl("/api/auth/profile");
  let res: Response;
  try {
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch {
    throw new Error(
      "Cannot reach the API. Start the backend on port 5000, or set VITE_API_URL if the server is elsewhere.",
    );
  }
  const data = (await res.json().catch(() => ({}))) as ProfileApiResponse & {
    message?: string;
    errors?: Array<{ msg?: string }>;
  };
  if (!res.ok) {
    throw new Error(parseApiError(data));
  }
  return data as ProfileApiResponse;
}

export async function updateProfile(
  token: string,
  body: { name?: string; phone?: string },
): Promise<ProfileApiResponse> {
  return requestAuthJson<ProfileApiResponse>("/api/auth/profile", token, {
    method: "PATCH",
    body: body as Record<string, unknown>,
  });
}

export async function changePassword(
  token: string,
  body: { currentPassword: string; newPassword: string },
): Promise<{ message: string }> {
  return requestAuthJson("/api/auth/change-password", token, {
    method: "POST",
    body: body as Record<string, unknown>,
  });
}

export async function requestForgotPassword(email: string): Promise<{ message: string }> {
  return postAuthJson("/api/auth/forgot-password", {
    email: email.trim().toLowerCase(),
  });
}

export type ResetPasswordResponse = { message: string; token: string };

export async function requestResetPassword(
  resetToken: string,
  password: string,
): Promise<ResetPasswordResponse> {
  return postAuthJson<ResetPasswordResponse>(
    `/api/auth/reset-password/${encodeURIComponent(resetToken)}`,
    { password },
  );
}
