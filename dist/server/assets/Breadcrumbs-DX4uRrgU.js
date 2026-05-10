import { W as jsxRuntimeExports } from "./server-FI23jbqg.js";
import { L as Link, al as ChevronRight } from "./router-B4WIY8un.js";
function Breadcrumbs({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-1.5 flex-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors uppercase tracking-wider", children: "Home" }) }),
    items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
      it.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: it.to, className: "hover:text-foreground transition-colors uppercase tracking-wider", children: it.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground uppercase tracking-wider", children: it.label })
    ] }, i))
  ] }) });
}
export {
  Breadcrumbs as B
};
