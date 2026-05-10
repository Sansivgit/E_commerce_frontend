import { r as reactExports, W as jsxRuntimeExports } from "./server-FI23jbqg.js";
import { u as useAuth, d as useNavigate, R as Route, t as toast, n as navigateAfterAuth, B as Button, L as Link } from "./router-B4WIY8un.js";
import { u as useForm, a, o as object, s as string } from "./schemas-DCXw7d5m.js";
import { E as EyeOff, a as Eye } from "./eye-BWfPihfC.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const schema = object({
  name: string().trim().min(2, "Enter your name").max(60),
  email: string().trim().email("Enter a valid email").max(255),
  password: string().min(8, "At least 8 characters").max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Include uppercase, lowercase, and a number")
});
function RegisterPage() {
  const {
    register: signup
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
    resolver: a(schema)
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await signup(data.name, data.email, data.password);
      toast.success("Welcome to VOLT");
      navigateAfterAuth(navigate, redirect);
    } catch (e) {
      toast.error(e.message || "Could not create account");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md px-4 md:px-6 py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl uppercase", children: "Create account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Early drops. Member-only colors. Always free shipping." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { autoComplete: "name", ...register("name"), className: "input" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", autoComplete: "email", ...register("email"), className: "input" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Password", error: errors.password?.message, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: show ? "text" : "password", autoComplete: "new-password", ...register("password"), className: "input pr-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", "aria-label": "Toggle password", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1.5", children: "8+ characters with uppercase, lowercase, and a number." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full h-12 volt-primary-btn font-display uppercase tracking-widest", children: isSubmitting ? "Creating account…" : "Create account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "By creating an account you agree to our Terms and Privacy Policy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-8", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", search: redirect ? {
        redirect
      } : void 0, className: "text-foreground font-medium hover:underline", children: "Sign in" })
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
  RegisterPage as component
};
