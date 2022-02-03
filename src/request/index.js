import axios from "axios";
// import { authService } from "../api/authService";

const request = axios.create({
  baseURL: "http://localhost:5000/api/u",
});

/* request.interceptors.request.use((req) => {
  if (authService.getProfile()) {
    req.headers.Authorization = `Bearer ${authService.getProfile().token}`;
  }

  return req;
}); */

export default request;
