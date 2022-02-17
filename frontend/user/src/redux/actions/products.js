import { batch } from "react-redux";

import * as api from "../../api";
import {
  CREATE,
  READPROD,
  READCAT,
  ERROR,
  LOADING,
  STATUS,
  FETCHTB,
  FETCHCB,
  READ_PROD_DET_REQUEST,
  READ_PROD_DET_SUCCESS,
  READ_PROD_DET_FAIL,
} from "../constants";

//Action creators
export const getProducts = (query = {}, loadType) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: { status: 1 } });
    //fetch data
    const [productsData, categoriesData] = await Promise.all([
      api.fetchBiddableProducts(query),
      api.fetchProductCategories(),
    ]);
    const {
      data: { data, pageInfo, nextPageToken, prevPageToken },
    } = productsData;
    const { data: categories } = categoriesData;

    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({
        type: READPROD,
        payload: { data, pageInfo, nextPageToken, prevPageToken, loadType },
      });
      dispatch({ type: READCAT, payload: { categories } });
    });
  } catch (error) {
    logError(error, dispatch);
  }
};
export const createProduct = (body) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: { status: 1 } });
    //create product
    const { data } = await api.createProduct(body);

    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({
        type: STATUS,
        payload: {
          info: {
            message: "Success! Product created.",
            severity: "success",
            code: "createproduct",
          },
        },
      });
      dispatch({ type: CREATE, payload: { product: data } });
    });
  } catch (error) {
    logError(error, dispatch);
  }
};
export const makeBid = (body, bidId, productId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: { status: 1 } });
    //make a product bid
    const { data: status } = await api.makeBid(body);

    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({ type: STATUS, payload: { status } });
    });
    if (bidId && productId) {
      bidId = bidId.replace(/"/g, "");
      productId = productId.replace(/"/g, "");
      getProductDetails(bidId, productId)(dispatch);
    }
  } catch (error) {
    logError(error, dispatch);
  }
};
export const fetchTopBidder = (body) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: { status: 1 } });
    //fetch top bidder
    const { data } = await api.fetchTopBidder(body);
    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({ type: FETCHTB, payload: { bidder: data } });
    });
  } catch (error) {
    logError(error, dispatch);
  }
};
//fetchCurrentBidder
export const fetchCurrentBidder = (body) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: { status: 1 } });
    //fetch top bidder
    const { data } = await api.fetchCurrentBidder(body);

    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({ type: FETCHCB, payload: { bidder: data } });
    });
  } catch (error) {
    logError(error, dispatch);
  }
};

export const getProductDetails = (bidId, productId) => async (dispatch) => {
  try {
    dispatch({ type: READ_PROD_DET_REQUEST });
    //fetch top bidder
    const { data } = await api.fetchBiddableProductDetails(bidId, productId);

    batch(() => {
      dispatch({ type: READ_PROD_DET_SUCCESS, payload: data });
    });
  } catch (error) {
    logError_v2(error, dispatch, READ_PROD_DET_FAIL);
  }
};

function logError(error, dispatch) {
  if (error.response) {
    const { err } = error.response.data;
    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({ type: ERROR, payload: { err } });
    });
  } else if (error.request) {
    let err = [
      {
        msg: "Could not get response",
      },
    ];

    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({ type: ERROR, payload: { err } });
    });
  } else {
    console.error(error);
    console.log(error.message);
    let err = [
      {
        msg: "Oops! An unknown error occured!",
      },
    ];

    batch(() => {
      dispatch({ type: LOADING, payload: { status: 0 } });
      dispatch({ type: ERROR, payload: { err } });
    });
  }
}
function logError_v2(error, dispatch, actionType) {
  if (error.response) {
    const { err } = error.response.data;
    batch(() => {
      dispatch({ type: actionType, payload: err });
    });
  } else if (error.request) {
    const err = [
      {
        msg: "Could not get response",
      },
    ];

    batch(() => {
      dispatch({ type: actionType, payload: err });
    });
  } else {
    console.error(error);
    console.log(error.message);
    let err = [
      {
        msg: "Oops! An unknown error occured!",
      },
    ];

    batch(() => {
      dispatch({ type: actionType, payload: err });
    });
  }
}