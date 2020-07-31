import { UserActions, url, uploadImages } from "../actionTypes";
import axios from "axios";

export const signUp = (userData) => {
  return {
    type: `${UserActions.USER_SIGNUP}`,
    payload: axios.post(`${url}users/signup`, userData),
  };
};
export const login = (userData) => {
  return {
    type: `${UserActions.USER_LOGIN}`,
    payload: axios.post(`${url}users/login`, userData),
  };
};
export const getUser = () => {
  const id = localStorage.getItem("id");

  return {
    type: `${UserActions.GET_USER}`,
    payload: axios.get(`${url}users/getUser/${id}`),
  };
};
export const getUsers = () => {
  return {
    type: `${UserActions.GET_USERS}`,
    payload: axios.get(`${url}users`),
  };
};
export const uploadImage = (image) => {
  return {
    type: `${UserActions.UPLOAD_IMAGE}`,
    payload: uploadImages(image),
  };
};
export const postProduct = (data) => {
  return {
    type: `${UserActions.POST_PRODUCT}`,
    payload: axios.post(`${url}products`, data),
  };
};
export const deleteProduct = (id) => {
  return {
    type: `${UserActions.DELETE_PRODUCT}`,
    payload: axios.delete(`${url}products`, {
      params: {
        id,
      },
    }),
  };
};
export const updatePassword = (data) => {
  return {
    type: `${UserActions.UPDATE_PASSWORD}`,
    payload: axios.put(`${url}users/changepassword`, data),
  };
};
