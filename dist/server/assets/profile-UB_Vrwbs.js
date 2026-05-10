import { r as reactExports, W as jsxRuntimeExports } from "./server-PohmNuOq.js";
import { e as createLucideIcon, g as useDirection, h as useControllableState, P as Primitive, i as useId, j as Root, I as Item, k as composeEventHandlers, m as Presence, o as createContextScope, p as createRovingFocusGroupScope, q as cn, r as Root$1, v as createDialogScope, w as Portal, x as useComposedRefs, W as WarningProvider, C as Content$1, T as Title, D as Description, y as Close, O as Overlay, z as Trigger$1, A as buttonVariants, E as getAuthJson, u as useAuth, d as useNavigate, t as toast, B as Button, F as LogOut, U as User, G as Package, L as Link, f as formatInr, J as updateProfile, K as changePassword } from "./router-B5Ai9hSw.js";
import { B as Breadcrumbs } from "./Breadcrumbs-sSG1XxUH.js";
import { f as fetchAddresses, L as Label, I as Input, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, T as Textarea, d as DialogFooter, e as createAddress, g as deleteAddress } from "./addresses-l3B2FJ_g.js";
import { E as EyeOff, a as Eye } from "./eye-DSasELsZ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode);
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME$1 = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME$1, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME$1, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME$1;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2$1 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
const Tabs = Root2$1;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger$1, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = /* @__PURE__ */ createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content$1,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              event.preventDefault();
              cancelRef.current?.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    const hasDescription = document.getElementById(
      contentRef.current?.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
async function fetchMyOrders(token) {
  const data = await getAuthJson("/api/orders/me", token);
  return Array.isArray(data.items) ? data.items : [];
}
function formatOrderDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return iso;
  }
}
function formatMemberSince(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString(void 0, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    return "—";
  }
}
function formatStatusLabel(status) {
  const labels = {
    pending: "Pending",
    paid: "Paid",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled"
  };
  return labels[status] ?? status;
}
function statusBadgeClass(status) {
  if (status === "cancelled") return "bg-destructive/15 text-destructive";
  if (status === "delivered" || status === "paid") return "bg-volt text-volt-foreground";
  return "bg-muted text-muted-foreground";
}
const PW_HINT = "Use at least 8 characters with uppercase, lowercase, and a number.";
const EMPTY_ADDR = {
  label: "",
  fullName: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "India"
};
function ProfilePage() {
  const {
    user,
    logout,
    token,
    refreshUser
  } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = reactExports.useState(null);
  const [nameDraft, setNameDraft] = reactExports.useState("");
  const [phoneDraft, setPhoneDraft] = reactExports.useState("");
  const [infoSaving, setInfoSaving] = reactExports.useState(false);
  const [addresses, setAddresses] = reactExports.useState(null);
  const [addressesLoading, setAddressesLoading] = reactExports.useState(false);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [addrForm, setAddrForm] = reactExports.useState({
    ...EMPTY_ADDR
  });
  const [addrSaving, setAddrSaving] = reactExports.useState(false);
  const [removeId, setRemoveId] = reactExports.useState(null);
  const [removeBusy, setRemoveBusy] = reactExports.useState(false);
  const [currentPassword, setCurrentPassword] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [passwordSaving, setPasswordSaving] = reactExports.useState(false);
  const [showCurrentPw, setShowCurrentPw] = reactExports.useState(false);
  const [showNewPw, setShowNewPw] = reactExports.useState(false);
  const [showConfirmPw, setShowConfirmPw] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!user) navigate({
      to: "/login"
    });
  }, [user, navigate]);
  reactExports.useEffect(() => {
    if (!token) return;
    void refreshUser();
  }, [token, refreshUser]);
  reactExports.useEffect(() => {
    if (!user) return;
    setNameDraft(user.name);
    setPhoneDraft(user.phone ?? "");
  }, [user]);
  reactExports.useEffect(() => {
    if (!user || !token) return;
    let cancelled = false;
    void (async () => {
      try {
        const list = await fetchMyOrders(token);
        if (!cancelled) setOrders(list);
      } catch (e) {
        if (!cancelled) {
          toast.error(e instanceof Error ? e.message : "Could not load orders");
          setOrders([]);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user, token]);
  reactExports.useEffect(() => {
    if (!token) return;
    let cancelled = false;
    void (async () => {
      setAddressesLoading(true);
      try {
        const list = await fetchAddresses(token);
        if (!cancelled) setAddresses(list);
      } catch (e) {
        if (!cancelled) {
          toast.error(e instanceof Error ? e.message : "Could not load addresses");
          setAddresses([]);
        }
      } finally {
        if (!cancelled) setAddressesLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);
  async function reloadAddresses() {
    if (!token) return;
    const list = await fetchAddresses(token);
    setAddresses(list);
  }
  async function handleSaveInfo(e) {
    e.preventDefault();
    if (!token) return;
    const name = nameDraft.trim();
    if (!name) {
      toast.error("Name is required");
      return;
    }
    setInfoSaving(true);
    try {
      await updateProfile(token, {
        name,
        phone: phoneDraft.trim()
      });
      await refreshUser();
      toast.success("Profile updated");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save profile");
    } finally {
      setInfoSaving(false);
    }
  }
  async function handleAddAddress(e) {
    e.preventDefault();
    if (!token) return;
    setAddrSaving(true);
    try {
      await createAddress(token, {
        label: addrForm.label,
        fullName: addrForm.fullName.trim(),
        phone: addrForm.phone.trim(),
        line1: addrForm.line1.trim(),
        line2: addrForm.line2.trim(),
        city: addrForm.city.trim(),
        state: addrForm.state.trim(),
        postalCode: addrForm.postalCode.trim(),
        country: addrForm.country.trim() || "India"
      });
      toast.success("Address saved");
      setAddrForm({
        ...EMPTY_ADDR
      });
      setAddOpen(false);
      await reloadAddresses();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not add address");
    } finally {
      setAddrSaving(false);
    }
  }
  async function handleConfirmRemove() {
    if (!token || !removeId) return;
    setRemoveBusy(true);
    try {
      await deleteAddress(token, removeId);
      toast.success("Address removed");
      setRemoveId(null);
      await reloadAddresses();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not remove address");
    } finally {
      setRemoveBusy(false);
    }
  }
  async function handleChangePassword(e) {
    e.preventDefault();
    if (!token) return;
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (newPassword.length < 8 || !strong.test(newPassword)) {
      toast.error(PW_HINT);
      return;
    }
    setPasswordSaving(true);
    try {
      await changePassword(token, {
        currentPassword,
        newPassword
      });
      toast.success("Password updated");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowCurrentPw(false);
      setShowNewPw(false);
      setShowConfirmPw(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not update password");
    } finally {
      setPasswordSaving(false);
    }
  }
  if (!user) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
      label: "Account"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-end justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl uppercase", children: [
          "Hey, ",
          user.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: user.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => {
        logout();
        toast("Signed out");
        navigate({
          to: "/"
        });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4 mr-2" }),
        " Sign out"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "info", className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full md:w-auto md:inline-flex grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 md:mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Info" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "orders", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-4 w-4 md:mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Orders" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "addresses", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 md:mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Addresses" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "settings", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4 md:mr-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Settings" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "info", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveInfo, className: "rounded-lg border border-border p-6 max-w-xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase tracking-widest text-sm", children: "Personal info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-name", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "profile-name", value: nameDraft, onChange: (e) => setNameDraft(e.target.value), autoComplete: "name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "profile-email", type: "email", value: user.email, disabled: true, readOnly: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Email cannot be changed here." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-phone", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "profile-phone", type: "tel", value: phoneDraft, onChange: (e) => setPhoneDraft(e.target.value), autoComplete: "tel", placeholder: "Optional" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Member since" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium", children: formatMemberSince(user.createdAt) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: infoSaving, className: "volt-primary-btn font-display uppercase tracking-widest", children: infoSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
          " Saving…"
        ] }) : "Save changes" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "orders", className: "mt-6", children: orders === null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-12 text-muted-foreground justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading orders…" })
      ] }) : orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border border-dashed px-6 py-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "mx-auto h-10 w-10 text-muted-foreground opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-medium", children: "No orders yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "When you complete a purchase, it will show up here." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6 volt-primary-btn font-display uppercase tracking-widest", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: "Shop now" }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3 sm:px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest text-muted-foreground", children: "Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg uppercase mt-0.5", children: o.orderNumber || o.id })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: formatOrderDate(o.createdAt) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: formatInr(o.totalAmount) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs font-display uppercase tracking-widest px-2 py-1 rounded sm:ml-auto", statusBadgeClass(o.status)), children: formatStatusLabel(o.status) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 sm:px-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest text-muted-foreground", children: "Items" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: o.items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: it.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                " × ",
                it.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 tabular-nums", children: formatInr(it.unitPrice * it.quantity) })
          ] }, idx)) }),
          o.shippingAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 text-xs text-muted-foreground border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase tracking-wider text-[10px]", children: "Ship to" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1", children: [
              o.shippingAddress.fullName,
              o.shippingAddress.phone ? ` · ${o.shippingAddress.phone}` : "",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              o.shippingAddress.line1,
              o.shippingAddress.line2 ? `, ${o.shippingAddress.line2}` : "",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              [o.shippingAddress.city, o.shippingAddress.state, o.shippingAddress.postalCode].filter(Boolean).join(", "),
              o.shippingAddress.country ? ` · ${o.shippingAddress.country}` : ""
            ] })
          ] }),
          o.paymentSummary ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground pt-1", children: [
            "Payment: ",
            o.paymentSummary
          ] }) : null
        ] })
      ] }, o.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "addresses", className: "mt-6", children: addresses === null || addressesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-12 text-muted-foreground justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading addresses…" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        addresses.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-5", children: [
          a.label ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-display uppercase tracking-widest text-muted-foreground", children: a.label }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-medium", children: a.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mt-1", children: [
            a.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.phone }),
            a.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            a.line1,
            a.line2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              a.line2
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            [a.city, a.state, a.postalCode].filter(Boolean).join(", "),
            a.country ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              a.country
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => setRemoveId(a._id), children: "Remove" }) })
        ] }, a._id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-dashed border-border p-5 text-sm text-muted-foreground hover:border-foreground hover:text-foreground transition-colors min-h-32 flex flex-col items-center justify-center gap-2", onClick: () => setAddOpen(true), children: "+ Add new address" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "settings", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleChangePassword, className: "rounded-lg border border-border p-6 max-w-xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase tracking-widest text-sm", children: "Change password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: PW_HINT }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "current-pw", children: "Current password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "current-pw", type: showCurrentPw ? "text" : "password", autoComplete: "current-password", value: currentPassword, onChange: (e) => setCurrentPassword(e.target.value), className: "pr-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", onClick: () => setShowCurrentPw((s) => !s), "aria-label": showCurrentPw ? "Hide current password" : "Show current password", children: showCurrentPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-pw", children: "New password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "new-pw", type: showNewPw ? "text" : "password", autoComplete: "new-password", value: newPassword, onChange: (e) => setNewPassword(e.target.value), className: "pr-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", onClick: () => setShowNewPw((s) => !s), "aria-label": showNewPw ? "Hide new password" : "Show new password", children: showNewPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "confirm-pw", children: "Confirm new password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "confirm-pw", type: showConfirmPw ? "text" : "password", autoComplete: "new-password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), className: "pr-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", onClick: () => setShowConfirmPw((s) => !s), "aria-label": showConfirmPw ? "Hide confirm password" : "Show confirm password", children: showConfirmPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: passwordSaving, variant: "outline", className: "w-full sm:w-auto", children: passwordSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
          " Updating…"
        ] }) : "Update password" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add address" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddAddress, className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-label", children: "Label (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-label", value: addrForm.label, onChange: (e) => setAddrForm((f) => ({
            ...f,
            label: e.target.value
          })), placeholder: "Home, Work…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-name", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-name", required: true, value: addrForm.fullName, onChange: (e) => setAddrForm((f) => ({
            ...f,
            fullName: e.target.value
          })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-phone", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-phone", required: true, type: "tel", value: addrForm.phone, onChange: (e) => setAddrForm((f) => ({
            ...f,
            phone: e.target.value
          })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-line1", children: "Address line 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-line1", required: true, value: addrForm.line1, onChange: (e) => setAddrForm((f) => ({
            ...f,
            line1: e.target.value
          })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-line2", children: "Address line 2 (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "addr-line2", rows: 2, value: addrForm.line2, onChange: (e) => setAddrForm((f) => ({
            ...f,
            line2: e.target.value
          })) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-city", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-city", required: true, value: addrForm.city, onChange: (e) => setAddrForm((f) => ({
              ...f,
              city: e.target.value
            })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-state", children: "State" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-state", required: true, value: addrForm.state, onChange: (e) => setAddrForm((f) => ({
              ...f,
              state: e.target.value
            })) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-postal", children: "Postal code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-postal", required: true, value: addrForm.postalCode, onChange: (e) => setAddrForm((f) => ({
              ...f,
              postalCode: e.target.value
            })) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "addr-country", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "addr-country", value: addrForm.country, onChange: (e) => setAddrForm((f) => ({
              ...f,
              country: e.target.value
            })) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => setAddOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: addrSaving, className: "volt-primary-btn font-display uppercase tracking-widest", children: addrSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
            " Saving…"
          ] }) : "Save address" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: removeId !== null, onOpenChange: (open) => !open && setRemoveId(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Remove this address?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "This removes the saved address from your account. You can add it again later." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: removeBusy, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "destructive", disabled: removeBusy, onClick: () => void handleConfirmRemove(), children: removeBusy ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
          " Removing…"
        ] }) : "Remove" })
      ] })
    ] }) })
  ] });
}
export {
  ProfilePage as component
};
