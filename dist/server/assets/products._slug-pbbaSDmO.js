import { r as reactExports, W as jsxRuntimeExports, V as React } from "./server-PohmNuOq.js";
import { e as createLucideIcon, h as useControllableState, P as Primitive, i as useId, k as composeEventHandlers, m as Presence, o as createContextScope, x as useComposedRefs, Y as useLayoutEffect2, _ as createCollection, g as useDirection, q as cn, al as Route, u as useAuth, d as useNavigate, a as useRouterState, c as useCart, b as useWishlist, f as formatInr, B as Button, S as ShoppingBag, H as Heart, t as toast, l as loginSearch, s as safeRedirectPath } from "./router-B5Ai9hSw.js";
import { B as Breadcrumbs } from "./Breadcrumbs-sSG1XxUH.js";
import { m as motion, P as ProductCard } from "./ProductCard-CRjzK_bA.js";
import { C as ChevronDown } from "./chevron-down-B8oxmmNG.js";
import { o as orderedStandardSizes, r as resolveStoredSize } from "./sizes-BMKjk5Mb.js";
import { M as Minus, P as Plus } from "./radio-group-s09rzDrg.js";
import { T as Truck, R as RotateCcw, S as Shield } from "./truck-C289Qpr6.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./addresses-l3B2FJ_g.js";
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = React.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function PDP() {
  const {
    product,
    related
  } = Route.useLoaderData();
  const defaultColor = product.colors[0]?.name ?? "Standard";
  const displaySizes = orderedStandardSizes(product.sizes);
  const [size, setSize] = reactExports.useState("");
  const [qty, setQty] = reactExports.useState(1);
  const [activeImg, setActiveImg] = reactExports.useState(0);
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const loc = useRouterState({
    select: (s) => s.location
  });
  const {
    add
  } = useCart();
  const {
    has,
    toggle
  } = useWishlist();
  const wished = has(product.id);
  const goLogin = () => {
    const r = `${loc.pathname}${loc.search}`;
    navigate({
      to: "/login",
      search: loginSearch(safeRedirectPath(r))
    });
  };
  reactExports.useEffect(() => {
    setSize("");
    setQty(1);
    setActiveImg(0);
  }, [product.id]);
  const onAdd = () => {
    if (!user) {
      toast.info("Sign in to add items to your bag");
      goLogin();
      return;
    }
    if (!size) {
      toast.error("Select a size");
      return;
    }
    add(product, size, defaultColor, qty);
    toast.success("Added to bag", {
      description: `${product.name} · ${size}`
    });
  };
  const onWishToggle = () => {
    if (!user) {
      toast.info("Sign in to save favorites");
      goLogin();
      return;
    }
    toggle(product);
    toast(wished ? "Removed from wishlist" : "Added to wishlist");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      label: "Shop",
      to: "/products"
    }, {
      label: product.type,
      to: "/products"
    }, {
      label: product.name
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-[1fr_1fr] gap-8 lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[80px_1fr] gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 order-2 md:order-1", children: product.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveImg(i), className: cn("aspect-square rounded-md overflow-hidden border-2 transition-colors", activeImg === i ? "border-foreground" : "border-transparent"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover" }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 0.3
        }, className: "order-1 md:order-2 aspect-[4/5] rounded-lg overflow-hidden bg-muted group relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.images[activeImg], alt: product.name, draggable: false, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none" }) }, activeImg)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-display uppercase tracking-widest text-muted-foreground", children: [
          product.brand,
          " · ",
          product.type
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl uppercase mt-2", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("h-4 w-4", i < Math.round(product.rating) ? "fill-foreground text-foreground" : "text-muted-foreground") }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            product.rating,
            " · ",
            product.reviewCount,
            " reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-semibold", children: formatInr(product.price) }),
          product.compareAt && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg text-muted-foreground line-through", children: formatInr(product.compareAt) }),
          product.compareAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-display uppercase tracking-widest bg-volt text-volt-foreground px-2 py-1 rounded", children: [
            "Save ",
            formatInr(product.compareAt - product.price)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-xs tracking-widest", children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-xs text-muted-foreground underline-offset-4 hover:underline", children: "Size guide" })
          ] }),
          displaySizes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Standard sizes (XS–XXL) are not listed for this product." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-6 gap-2", children: displaySizes.map((canon) => {
            const stored = resolveStoredSize(canon, product.sizes) ?? canon;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSize(stored), className: cn("h-12 rounded border text-sm font-medium transition-colors", size === stored ? "volt-primary-btn border-neutral-950 dark:border-neutral-50" : "border-border hover:border-neutral-500 dark:hover:border-neutral-400"), children: canon }, canon);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "h-12 w-12 flex items-center justify-center", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 text-center text-sm", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "h-12 w-12 flex items-center justify-center", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onAdd, size: "lg", className: "flex-1 h-12 volt-primary-btn font-display uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 mr-2" }),
            " Add to bag"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", className: "h-12 w-12", onClick: onWishToggle, "aria-label": "Wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: cn("h-5 w-5", wished && "fill-foreground") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-3 text-xs", children: [{
          i: Truck,
          t: "Free shipping"
        }, {
          i: RotateCcw,
          t: "30-day returns"
        }, {
          i: Shield,
          t: "2yr warranty"
        }].map(({
          i: I,
          t
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 rounded border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4" }),
          " ",
          t
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "multiple", className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "desc", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "font-display uppercase tracking-widest text-sm", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground", children: product.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "ship", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "font-display uppercase tracking-widest text-sm", children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground", children: "Free standard shipping on orders over ₹8,500. Express options at checkout." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "ret", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "font-display uppercase tracking-widest text-sm", children: "Returns" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground", children: "Free 30-day returns. Items must be unworn with tags attached." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl uppercase", children: "Reviews" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-[280px_1fr] gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-display font-bold", children: product.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 mt-1", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("h-4 w-4", i < Math.round(product.rating) ? "fill-foreground text-foreground" : "text-muted-foreground") }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mt-1", children: [
            product.reviewCount,
            " reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [{
          n: "Jordan M.",
          r: 5,
          t: "Best gear I own",
          c: "Fits true to size, ships fast, looks better in person."
        }, {
          n: "Sasha K.",
          r: 4,
          t: "Solid daily wear",
          c: "Comfortable and clean. Slight color difference from photos."
        }, {
          n: "Marcus T.",
          r: 5,
          t: "Can't beat it",
          c: "Held up through six months of training. Worth every dollar."
        }].map((rev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-6 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: Array.from({
            length: 5
          }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("h-3.5 w-3.5", j < rev.r ? "fill-foreground text-foreground" : "text-muted-foreground") }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-2", children: rev.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: rev.c }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-2", children: [
            "— ",
            rev.n
          ] })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl uppercase", children: "You may also like" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6", children: related.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
    ] })
  ] });
}
export {
  PDP as component
};
