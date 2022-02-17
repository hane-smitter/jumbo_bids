import {
  CREATE,
  READPROD,
  READCAT,
  ERROR,
  LOADING,
  STATUS,
  FETCHTB,
  FETCHCB,
  READ_PROD_DET_SUCCESS,
  READ_PROD_DET_REQUEST,
  READ_PROD_DET_FAIL,
  SET_ACTIVE_CATEGORY,
} from "../constants";

export const app = (
  app = {
    products: [],
    status: {},
    categories: [],
    activeCategory: { name: "All" },
    loading: false,
    err: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    /* case READPROD:
            return payload.products; */
    case READPROD:
      const { data, loadType, ...pageData } = payload;
      console.group("LOAD TYPE FROM REDUCERS");
      console.log("load type: ", loadType);
      console.groupEnd();
      return {
        ...app,
        products:
          String(loadType).toLowerCase() === "secondary"
            ? [...app.products, ...data]
            : data,
        ...pageData,
      };
    case CREATE:
      return {
        ...app,
        products: [...app.products, payload.product],
      };
    case READCAT:
      return {
        ...app,
        categories: payload.categories,
      };
    case FETCHTB:
      return {
        ...app,
        bidder: { ...app.bidder, topBidder: payload.bidder },
      };
    case SET_ACTIVE_CATEGORY:
      return {
        ...app,
        activeCategory: payload,
      };
    case FETCHCB:
      return {
        ...app,
        currentBidders: payload.bidder,
      };
    case STATUS:
      return {
        ...app,
        status: payload.status,
      };
    case ERROR:
      return {
        ...app,
        err: [...payload.err],
      };
    case LOADING:
      return {
        ...app,
        loading: Boolean(payload.status),
      };
    default:
      return app;
  }
};

export const selectedProductDetails = (
  state = {
    details: null,
    loading: true,
    err: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case READ_PROD_DET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case READ_PROD_DET_SUCCESS:
      return {
        ...state,
        loading: false,
        details: payload,
        err: null,
      };
    case READ_PROD_DET_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
