import { W as jsxRuntimeExports } from "./server-PohmNuOq.js";
import { u as useAuth, a as useRouterState, b as useWishlist, c as useCart, s as safeRedirectPath, N as Navigate, l as loginSearch, H as Heart, L as Link, X, t as toast, f as formatInr, B as Button, S as ShoppingBag } from "./router-B5Ai9hSw.js";
import { B as Breadcrumbs } from "./Breadcrumbs-sSG1XxUH.js";
import { E as EmptyState } from "./EmptyState-BItGhwp4.js";
import { o as orderedStandardSizes, r as resolveStoredSize } from "./sizes-BMKjk5Mb.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function WishlistPage() {
  const {
    user
  } = useAuth();
  const loc = useRouterState({
    select: (s) => s.location
  });
  const {
    items,
    remove
  } = useWishlist();
  const {
    add
  } = useCart();
  if (!user) {
    const back = safeRedirectPath(`${loc.pathname}${loc.search}`);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", search: loginSearch(back), replace: true });
  }
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
        label: "Wishlist"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: Heart, title: "No favorites yet", description: "Tap the heart on any product to save it for later.", ctaLabel: "Browse products", ctaTo: "/products" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      label: "Wishlist"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl uppercase mt-3", children: "Wishlist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
      items.length,
      " saved"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] rounded-lg overflow-hidden bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
          slug: p.slug
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.images[0], alt: p.name, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          remove(p.id);
          toast("Removed from wishlist");
        }, className: "absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-background", "aria-label": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
          slug: p.slug
        }, className: "font-medium hover:underline", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mt-1", children: formatInr(p.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
          const sizesShown = orderedStandardSizes(p.sizes);
          const stored = sizesShown.length > 0 ? resolveStoredSize(sizesShown[0], p.sizes) : void 0;
          const sz = stored ?? p.sizes[0];
          const color = p.colors[0]?.name ?? "Standard";
          if (!sz) {
            toast.error("Choose options on the product page");
            return;
          }
          add(p, sz, color, 1);
          toast.success("Added to bag");
        }, size: "sm", className: "mt-3 w-full volt-primary-btn font-display uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-3.5 w-3.5 mr-1.5" }),
          " Move to bag"
        ] })
      ] })
    ] }, p.id)) })
  ] });
}
export {
  WishlistPage as component
};
