import { W as jsxRuntimeExports } from "./server-FI23jbqg.js";
import { d as useNavigate, ah as requestForgotPassword, t as toast, B as Button, L as Link } from "./router-B4WIY8un.js";
import { u as useForm, a, o as object, s as string } from "./schemas-DCXw7d5m.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const schema = object({
  email: string().trim().email("Enter a valid email").max(255)
});
function ForgotPasswordPage() {
  const navigate = useNavigate();
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
      const res = await requestForgotPassword(data.email);
      toast.success(res.message || "Reset link sent to your email.");
      navigate({
        to: "/login"
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      toast.error(msg);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-4 md:px-6 py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl uppercase", children: "Forgot password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Enter your email — we’ll send a reset link if this account exists." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest mb-2", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", autoComplete: "email", ...register("email"), className: "input" }),
        errors.email?.message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-destructive mt-1.5", children: errors.email.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full h-12 volt-primary-btn font-display uppercase tracking-widest", children: isSubmitting ? "Checking…" : "Verify email" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-foreground font-medium hover:underline", children: "Back to sign in" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.input{height:48px;width:100%;border-radius:8px;border:1px solid var(--color-border);background:transparent;padding:0 14px;font-size:14px;outline:none;transition:border-color .2s}.input:focus{border-color:var(--color-foreground)}` })
  ] });
}
export {
  ForgotPasswordPage as component
};
