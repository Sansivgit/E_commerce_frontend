const STANDARD_APPAREL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
function canonicalApparelSize(raw) {
  const t = raw.trim().toUpperCase();
  const map = {
    XS: "XS",
    S: "S",
    M: "M",
    L: "L",
    XL: "XL",
    XXL: "XXL"
  };
  return map[t] ?? null;
}
function orderedStandardSizes(productSizes) {
  return STANDARD_APPAREL_SIZES.filter(
    (sz) => productSizes.some((p) => canonicalApparelSize(p) === sz)
  );
}
function resolveStoredSize(canonical, productSizes) {
  return productSizes.find((p) => canonicalApparelSize(p) === canonical);
}
export {
  STANDARD_APPAREL_SIZES as S,
  orderedStandardSizes as o,
  resolveStoredSize as r
};
