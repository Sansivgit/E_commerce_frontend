import { r as reactExports, W as jsxRuntimeExports } from "./server-FI23jbqg.js";
import { ai as Route, u as useAuth, d as useNavigate, aj as requestResetPassword, t as toast, n as navigateAfterAuth, B as Button, L as Link } from "./router-B4WIY8un.js";
import { u as useForm, a, o as object, s as string } from "./schemas-DCXw7d5m.js";
import { E as EyeOff, a as Eye } from "./eye-BWfPihfC.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const schema = object({
  password: string().min(8, "At least 8 characters").max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Include uppercase, lowercase, and a number"),
  confirmPassword: string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
function ResetPasswordPage() {
  const {
    token
  } = Route.useParams();
  const {
    redirect
  } = Route.useSearch();
  const {
    loginWithToken
  } = useAuth();
  const navigate = useNavigate();
  const [showPw, setShowPw] = reactExports.useState(false);
  const [showPw2, setShowPw2] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: a(schema)
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await requestResetPassword(token, data.password);
      toast.success("Password updated");
      if (res.token) {
        await loginWithToken(res.token);
        navigateAfterAuth(navigate, redirect);
      } else {
        navigate({
          to: "/login"
        });
      }
    } catch (e) {
      toast.error(e.message || "Could not reset password");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-4 md:px-6 py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl uppercase", children: "New password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Choose a strong password for your account." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest mb-2", children: "New password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw ? "text" : "password", autoComplete: "new-password", ...register("password"), className: "input pr-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", "aria-label": "Toggle password visibility", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
        ] }),
        errors.password?.message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-destructive mt-1.5", children: errors.password.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest mb-2", children: "Confirm password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw2 ? "text" : "password", autoComplete: "new-password", ...register("confirmPassword"), className: "input pr-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw2((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", "aria-label": "Toggle confirm password visibility", children: showPw2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
        ] }),
        errors.confirmPassword?.message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-destructive mt-1.5", children: errors.confirmPassword.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full h-12 volt-primary-btn font-display uppercase tracking-widest", children: isSubmitting ? "Saving…" : "Update password" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-foreground font-medium hover:underline", children: "Back to sign in" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.input{height:48px;width:100%;border-radius:8px;border:1px solid var(--color-border);background:transparent;padding:0 14px;font-size:14px;outline:none;transition:border-color .2s}.input:focus{border-color:var(--color-foreground)}` })
  ] });
}
export {
  ResetPasswordPage as component
};
