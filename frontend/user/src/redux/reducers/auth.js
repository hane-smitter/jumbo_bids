import { storeService } from "../../api/storeService";
import { AUTH, LOGOUT } from "../constants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      storeService.saveProfile = action.payload;

      return { ...state, authData: action.data, loading: false, errors: null };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
