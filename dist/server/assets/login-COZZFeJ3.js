import { r as reactExports, W as jsxRuntimeExports } from "./server-PohmNuOq.js";
import { u as useAuth, d as useNavigate, ag as Route, t as toast, n as navigateAfterAuth, L as Link, B as Button } from "./router-B5Ai9hSw.js";
import { u as useForm, a, o as object, b as boolean, s as string } from "./schemas-C7UDE9u5.js";
import { E as EyeOff, a as Eye } from "./eye-DSasELsZ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const schema = object({
  email: string().trim().email("Enter a valid email").max(255),
  password: string().min(6, "At least 6 characters").max(100),
  rememberMe: boolean().optional()
});
function LoginPage() {
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const {
    redirect
  } = Route.useSearch();
  const [show, setShow] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: a(schema),
    defaultValues: {
      rememberMe: false
    }
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await login(data.email, data.password, data.rememberMe === true);
      toast.success("Welcome back");
      navigateAfterAuth(navigate, redirect);
    } catch (e) {
      toast.error(e.message || "Sign in failed");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-4 md:px-6 py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl uppercase", children: "Sign in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Welcome back. Let's go." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", autoComplete: "email", ...register("email"), className: "input" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", error: errors.password?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: show ? "text" : "password", autoComplete: "current-password", ...register("password"), className: "input pr-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", "aria-label": "Toggle password", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-foreground", ...register("rememberMe", {
            valueAsBoolean: true
          }) }),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-muted-foreground hover:underline", children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full h-12 volt-primary-btn font-display uppercase tracking-widest", children: isSubmitting ? "Signing in…" : "Sign in" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-8", children: [
      "New here?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", search: redirect ? {
        redirect
      } : void 0, className: "text-foreground font-medium hover:underline", children: "Create account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.input{height:48px;width:100%;border-radius:8px;border:1px solid var(--color-border);background:transparent;padding:0 14px;font-size:14px;outline:none;transition:border-color .2s}.input:focus{border-color:var(--color-foreground)}` })
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest mb-2", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-destructive mt-1.5", children: error })
  ] });
}
export {
  LoginPage as component
};
