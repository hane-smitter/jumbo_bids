import request from "../request";

export const fetchBiddableProducts = (params = {}) =>
  request.get("/products/bids", {
    params,
  });
export const fetchBiddableProductDetails = (bidId, productId) =>
  request.get("/products/bids/iteminfo", {
    params: {
      bidDetailsId: bidId,
      productId,
    },
  });
export const fetchProductCategories = () => request.get(`/categories`);
export const createProduct = (body) =>
  request.post(`/products`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const makeBid = (body) => request.post(`/bids`, body);
export const fetchTopBidder = (body) =>
  request.get(`/bids/amount/high?productId=${body.productId}`);
export const fetchLastBidder = (body) =>
  request.get(`/bids/last?productId=${body.productId}`);
export const fetchCurrentBidder = (body) =>
  request.get(`/bids/current-bidders?productId=${body.productId}`);

export const createUser = (body) => request.post(`/users/create`, body);
export const signIn = (body) => request.post(`/users/login`, body);
export const sendOtp = (body) => request.post(`/users/generate-otp`, body);
