import axios from 'axios';
import elevateAxios from './axiosConfig';

export const fetchBidProducts = () => elevateAxios.get(`/products`);
export const fetchBiddableProducts = () => elevateAxios.get(`/products/bids`);
export const createProduct = (body) => elevateAxios.post(`/products`, body, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
});
export const updateProduct = (param, body) => elevateAxios.patch(`/products/mod/update/${param}`, body, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});
export const createProductBid = body => elevateAxios.post(`/products/bid/create`, body);
export const fetchProductCategories = () => elevateAxios.get(`/categories`);
export const createProductCategory = body => elevateAxios.post(`/categories`, body);//elevateAxios to be returned
export const updateProductCategory = (param, body) => elevateAxios.patch(`/categories/mod/update/${param}`, body);//elevateAxios to be returned
export const deleteProductCategory = (body) => elevateAxios.delete(`/categories/mod`, body);//elevateAxios to be returned
export const fetchProductBidWinners = () => elevateAxios.get(`/bids/winners`);

export const fetchBids = () => elevateAxios.get(`/bids`);
export const fetchExpiredBids = () => elevateAxios.get(`/bids/expired`);

export const register = body => axios.post(`/auth/signup`, body);
export const fetchAdmins = () => elevateAxios.get(`/auth/`);
export const registerAdmin = (body) => elevateAxios.post(`/auth/create`, body);
export const login = body => axios.post(`/auth/signin`, body);
export const logout = body => elevateAxios.post(`/auth/logout`, body);
export const forgotPassword = body => axios.post(`/auth/forgotpassword`, body);
export const resetPassword = (param, body) => axios.patch(`/auth/resetpassword/${param}`, body);

export const getDashboardData = () => elevateAxios.get(`/auth/dashboard-data`);
//store
export const fetchStores = () => elevateAxios.get(`/stores`);
export const createStore = (body) => elevateAxios.post(`/stores/create`, body);
export const updateStore = (param, body) => elevateAxios.patch(`/stores/update/${param}`, body);
export const deleteStore = (param, body) => elevateAxios.patch(`/stores/delete/${param}`, body);