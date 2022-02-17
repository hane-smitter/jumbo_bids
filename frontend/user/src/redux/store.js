import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

import { app, selectedProductDetails } from "./reducers/products";
import person from "./reducers/users";
import auth from "./reducers/auth";

const rootReducers = combineReducers({
  auth,
  app,
  person,
  selectedProductDetails,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
