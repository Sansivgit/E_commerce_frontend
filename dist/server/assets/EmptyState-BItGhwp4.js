import { W as jsxRuntimeExports } from "./server-PohmNuOq.js";
import { B as Button, L as Link } from "./router-B5Ai9hSw.js";
function EmptyState({
  icon: Icon,
  title,
  description,
  ctaLabel,
  ctaTo
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-9 w-9 text-muted-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl uppercase", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground max-w-sm", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6 volt-primary-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: ctaTo, children: ctaLabel }) })
  ] });
}
export {
  EmptyState as E
};
