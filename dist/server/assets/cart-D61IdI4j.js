import { r as reactExports, W as jsxRuntimeExports } from "./server-FI23jbqg.js";
import { e as createLucideIcon, u as useAuth, c as useCart, d as useNavigate, t as toast, f as formatInr, B as Button, a as useRouterState, s as safeRedirectPath, N as Navigate, l as loginSearch, S as ShoppingBag, L as Link } from "./router-B4WIY8un.js";
import { B as Breadcrumbs } from "./Breadcrumbs-DX4uRrgU.js";
import { E as EmptyState } from "./EmptyState-D1yyW10q.js";
import { f as fetchAddresses, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, h as DialogDescription, L as Label, I as Input, T as Textarea, d as DialogFooter, e as createAddress } from "./addresses-BlM5wH_I.js";
import { R as RadioGroup, a as RadioGroupItem, M as Minus, P as Plus } from "./radio-group-DnGV9OEO.js";
import { A as ArrowRight } from "./arrow-right-DRAwsHSP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartCheckoutDialog({
  open,
  onOpenChange,
  subtotal,
  discountAmt,
  shipping,
  total,
  items
}) {
  const { user, token } = useAuth();
  const { clear } = useCart();
  useNavigate();
  const [addresses, setAddresses] = reactExports.useState([]);
  const [addrLoading, setAddrLoading] = reactExports.useState(false);
  const [selectedAddrId, setSelectedAddrId] = reactExports.useState("");
  const [expandNewAddress, setExpandNewAddress] = reactExports.useState(false);
  const [savingAddr, setSavingAddr] = reactExports.useState(false);
  const [paying, setPaying] = reactExports.useState(false);
  const [newAddr, setNewAddr] = reactExports.useState({
    label: "",
    fullName: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India"
  });
  reactExports.useEffect(() => {
    if (!open) return;
    setAddresses([]);
    setSelectedAddrId("");
    setExpandNewAddress(false);
    setNewAddr({
      label: "",
      fullName: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "India"
    });
  }, [open]);
  reactExports.useEffect(() => {
    if (!open || !token) return;
    let cancelled = false;
    void (async () => {
      setAddrLoading(true);
      try {
        const list = await fetchAddresses(token);
        if (cancelled) return;
        setAddresses(list);
        setSelectedAddrId((prev) => {
          if (list.length === 0) return "";
          if (prev && list.some((a) => String(a._id) === prev)) return prev;
          return String(list[0]._id);
        });
      } catch {
        if (!cancelled) toast.error("Could not load saved addresses");
      } finally {
        if (!cancelled) setAddrLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, token]);
  reactExports.useEffect(() => {
    if (!open || addrLoading) return;
    if (addresses.length === 0) setExpandNewAddress(true);
  }, [open, addrLoading, addresses.length]);
  const submitNewAddress = async () => {
    if (!token) return;
    setSavingAddr(true);
    try {
      const created = await createAddress(token, {
        label: newAddr.label.trim(),
        fullName: newAddr.fullName.trim(),
        phone: newAddr.phone.trim(),
        line1: newAddr.line1.trim(),
        line2: newAddr.line2.trim(),
        city: newAddr.city.trim(),
        state: newAddr.state.trim(),
        postalCode: newAddr.postalCode.trim(),
        country: newAddr.country.trim() || "India"
      });
      setAddresses((prev) => [...prev, created]);
      setSelectedAddrId(String(created._id));
      setExpandNewAddress(false);
      setNewAddr({
        label: "",
        fullName: "",
        phone: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India"
      });
      toast.success("Address saved");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save address");
    } finally {
      setSavingAddr(false);
    }
  };
  const startRazorpay = async () => {
    if (!token || !user) return;
    const addr = addresses.find((a) => String(a._id) === selectedAddrId);
    if (!addr) {
      toast.error("Select a delivery address");
      return;
    }
    {
      toast.error("Razorpay is not configured (missing VITE_RAZORPAY_KEY_ID).");
      return;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-2xl uppercase", children: "Delivery & payment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
        "Choose a delivery address. Pay ",
        formatInr(total),
        " securely with Razorpay."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 py-2", children: [
      addrLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Loading addresses…" }) : addresses.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Saved addresses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { value: selectedAddrId, onValueChange: setSelectedAddrId, children: addresses.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 has-[:checked]:border-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: String(a._id), id: `cart-addr-${a._id}`, className: "mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground mt-1", children: [
                  a.line1,
                  a.line2 ? `, ${a.line2}` : "",
                  ", ",
                  a.city,
                  ", ",
                  a.state,
                  " ",
                  a.postalCode,
                  ", ",
                  a.country ?? "India"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-xs mt-1", children: [
                  "Phone: ",
                  a.phone
                ] })
              ] })
            ]
          },
          String(a._id)
        )) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No saved addresses yet. Add one below." }),
      addresses.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => setExpandNewAddress((v) => !v), children: expandNewAddress ? "Hide new address form" : "Add another address" }),
      expandNewAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm uppercase tracking-widest", children: "New address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-label", children: "Label (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cart-label",
                value: newAddr.label,
                onChange: (e) => setNewAddr((s) => ({ ...s, label: e.target.value })),
                placeholder: "Home, Office…"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-name", children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cart-name",
                value: newAddr.fullName,
                onChange: (e) => setNewAddr((s) => ({ ...s, fullName: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-phone", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cart-phone",
                type: "tel",
                value: newAddr.phone,
                onChange: (e) => setNewAddr((s) => ({ ...s, phone: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-line1", children: "Address line 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cart-line1",
                value: newAddr.line1,
                onChange: (e) => setNewAddr((s) => ({ ...s, line1: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-line2", children: "Address line 2 (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "cart-line2",
                value: newAddr.line2,
                onChange: (e) => setNewAddr((s) => ({ ...s, line2: e.target.value })),
                rows: 2,
                className: "resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-city", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cart-city", value: newAddr.city, onChange: (e) => setNewAddr((s) => ({ ...s, city: e.target.value })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-state", children: "State" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cart-state", value: newAddr.state, onChange: (e) => setNewAddr((s) => ({ ...s, state: e.target.value })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-postal", children: "Postal code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "cart-postal",
                value: newAddr.postalCode,
                onChange: (e) => setNewAddr((s) => ({ ...s, postalCode: e.target.value }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cart-country", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cart-country", value: newAddr.country, onChange: (e) => setNewAddr((s) => ({ ...s, country: e.target.value })) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: () => void submitNewAddress(), disabled: savingAddr, children: savingAddr ? "Saving…" : "Save address" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          className: "volt-primary-btn font-display uppercase tracking-widest",
          disabled: paying || !selectedAddrId,
          onClick: () => void startRazorpay(),
          children: paying ? "Opening payment…" : `Pay ${formatInr(total)}`
        }
      )
    ] })
  ] }) });
}
const FREE_SHIPPING_SUBTOTAL_INR = 8500;
const SHIPPING_FLAT_INR = 99;
function CartPage() {
  const {
    user
  } = useAuth();
  const loc = useRouterState({
    select: (s) => s.location
  });
  const {
    items,
    remove,
    setQty,
    subtotal
  } = useCart();
  const [coupon, setCoupon] = reactExports.useState("");
  const [discount, setDiscount] = reactExports.useState(0);
  const [checkoutOpen, setCheckoutOpen] = reactExports.useState(false);
  if (!user) {
    const back = safeRedirectPath(`${loc.pathname}${loc.search}`);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", search: loginSearch(back), replace: true });
  }
  const apply = () => {
    if (coupon.trim().toUpperCase() === "VOLT10") {
      setDiscount(0.1);
      toast.success("Promo applied — 10% off");
    } else {
      setDiscount(0);
      toast.error("Invalid promo code");
    }
  };
  const shipping = subtotal > FREE_SHIPPING_SUBTOTAL_INR || subtotal === 0 ? 0 : SHIPPING_FLAT_INR;
  const discountAmt = subtotal * discount;
  const total = subtotal - discountAmt + shipping;
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
        label: "Bag"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: ShoppingBag, title: "Your bag is empty", description: "Add some heat from the latest drop.", ctaLabel: "Start shopping", ctaTo: "/products" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      label: "Bag"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl uppercase mt-3", children: "Your bag" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-[1fr_380px] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 border border-border rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
          slug: it.product.slug
        }, className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.product.images[0], alt: it.product.name, className: "w-24 h-32 sm:w-28 sm:h-36 rounded object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: it.product.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$slug", params: {
                slug: it.product.slug
              }, className: "font-display text-lg uppercase hover:underline", children: it.product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
                "Size ",
                it.size
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: formatInr(it.product.price * it.qty) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                formatInr(it.product.price),
                " each"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(it.id, it.qty - 1), className: "h-9 w-9 flex items-center justify-center", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 text-center text-sm", children: it.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(it.id, it.qty + 1), className: "h-9 w-9 flex items-center justify-center", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              remove(it.id);
              toast("Removed from bag");
            }, className: "text-xs text-muted-foreground hover:text-destructive flex items-center gap-1.5 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
              " Remove"
            ] })
          ] })
        ] })
      ] }, it.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-24 h-fit rounded-lg border border-border p-6 bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl uppercase", children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: formatInr(subtotal) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: shipping === 0 ? "FREE" : formatInr(shipping) }),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: `Promo (${(discount * 100).toFixed(0)}%)`, value: `-${formatInr(discountAmt)}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: coupon, onChange: (e) => setCoupon(e.target.value), placeholder: "Promo code (try VOLT10)", className: "h-10 w-full rounded border border-border bg-transparent pl-9 pr-3 text-sm" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: apply, children: "Apply" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-5 border-t border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-sm tracking-widest", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: formatInr(total) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", className: "mt-5 w-full h-12 volt-primary-btn font-display uppercase tracking-widest", onClick: () => setCheckoutOpen(true), children: [
          "Checkout ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 ml-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartCheckoutDialog, { open: checkoutOpen, onOpenChange: setCheckoutOpen, subtotal, discountAmt, shipping, total, items }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "block text-center text-xs text-muted-foreground mt-4 underline-offset-4 hover:underline", children: "Continue shopping" })
      ] })
    ] })
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
  ] });
}
export {
  CartPage as component
};
