import { r as reactExports, W as jsxRuntimeExports } from "./server-FI23jbqg.js";
import { e as createLucideIcon, ac as getProducts, B as Button, L as Link } from "./router-B4WIY8un.js";
import { m as motion, P as ProductCard, a as ProductCardSkeleton } from "./ProductCard-D7XIwqM6.js";
import { A as ArrowRight } from "./arrow-right-DRAwsHSP.js";
import { T as Truck, R as RotateCcw, S as Shield } from "./truck-DithHoBT.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sizes-BMKjk5Mb.js";
import "./addresses-BlM5wH_I.js";
import "./radio-group-DnGV9OEO.js";
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const heroImg = "/assets/hero-DK50zqu1.jpg";
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
const categories = [
  { name: "Men", image: u("photo-1617137968427-85924c800a22") },
  { name: "Women", image: u("photo-1483985988355-763728e1935b") },
  { name: "Unisex", image: u("photo-1620799140408-edc6dcb6d633") }
];
function Index() {
  const [trending, setTrending] = reactExports.useState(null);
  reactExports.useEffect(() => {
    getProducts({
      sort: "newest"
    }).then((p) => setTrending(p.slice(0, 8)));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[88vh] min-h-[600px] w-full overflow-hidden bg-neutral-950 text-neutral-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", className: "absolute inset-0 h-full w-full object-cover opacity-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 md:px-6 pb-20 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-volt text-volt-foreground px-3 py-1 rounded-full text-[10px] font-display uppercase tracking-widest mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
          " New Drop · Spring '26"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display-hero text-6xl sm:text-7xl md:text-8xl lg:text-9xl", children: [
          "Move",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Like",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Lightning",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-volt", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base md:text-lg text-neutral-50/80 max-w-md", children: "The Phantom Runner 1 is here. Featherlight. Volt-fast. Built for the relentless." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-volt text-volt-foreground hover:brightness-110 font-display uppercase tracking-widest h-12 px-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", search: {
            sort: "newest"
          }, children: [
            "Shop the drop ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-neutral-50 text-neutral-50 bg-transparent hover:bg-neutral-50 hover:text-neutral-950 font-display uppercase tracking-widest h-12 px-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "Explore all" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest text-muted-foreground", children: "Shop by" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl uppercase mt-1", children: "Category" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "text-sm font-medium underline-offset-4 hover:underline hidden md:inline-flex items-center gap-1", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", search: {
        category: c.name
      }, className: "group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-4 bottom-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl uppercase text-white", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white/80 mt-1 flex items-center gap-1", children: [
            "Shop now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-1" })
          ] })
        ] })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 md:px-6 pb-16 md:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest text-muted-foreground", children: "This Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl uppercase mt-1", children: "Trending" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "text-sm font-medium underline-offset-4 hover:underline hidden md:inline-flex items-center gap-1", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: trending ? trending.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) : Array.from({
        length: 8
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardSkeleton, {}, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-neutral-950 text-neutral-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest text-volt", children: "Manifesto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-hero text-5xl md:text-7xl mt-3", children: [
          "No off",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "days",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-volt", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-neutral-50/70 max-w-md", children: "Every stitch, every sole, every seam is engineered for the one thing that matters: forward. We don't make clothes for the sidelines." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-8 bg-volt text-volt-foreground hover:brightness-110 font-display uppercase tracking-widest h-12 px-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "Shop the movement" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80", alt: "Athlete training", loading: "lazy", className: "h-full w-full object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 md:px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [{
      i: Truck,
      t: "Free Shipping",
      d: "On orders over ₹8,500"
    }, {
      i: RotateCcw,
      t: "30-Day Returns",
      d: "No questions asked"
    }, {
      i: Shield,
      t: "2-Yr Warranty",
      d: "On every shoe"
    }, {
      i: Zap,
      t: "Member Perks",
      d: "Early access drops"
    }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-neutral-950 text-neutral-50 ring-1 ring-white/15 flex items-center justify-center shrink-0 dark:bg-neutral-900 dark:ring-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(x.i, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-sm tracking-wider", children: x.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: x.d })
      ] })
    ] }, x.t)) }) })
  ] });
}
export {
  Index as component
};
