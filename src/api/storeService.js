let store = localStorage;

const storeService = {
  get profile() {
    return JSON.parse(store.getItem("profile"));
  },
  set saveProfile(profile) {
    store.setItem("profile", JSON.stringify(profile));
  },
  get bidInView() {
    return store.getItem("bidId");
  },
  set saveBidInViewId(id) {
    store.setItem("bidId", JSON.stringify(id));
  },
  get productInView() {
    return store.getItem("productId");
  },
  set saveProductInViewId(id) {
    store.setItem("productId", JSON.stringify(id));
  },
};

export { storeService };
