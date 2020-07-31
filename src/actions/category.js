import { CategoryActions, url } from "../actionTypes";
import axios from "axios";

export const addCategory = (data) => {
  return {
    type: `${CategoryActions.ADD_CATEGORY}`,
    payload: axios.post(`${url}categories/addCategory`, data),
  };
};
export const getCategories = (id) => {
  return {
    type: `${CategoryActions.GET_CATEGORIES}`,
    payload: axios.get(`${url}categories/${id}`),
  };
};
export const deleteCategory = (id) => {
  return {
    type: `${CategoryActions.DELETE_CATEGORY}`,
    payload: axios.delete(`${url}categories`, {
      params: {
        id,
      },
    }),
  };
};
export const updateCategory = (data) => {
  return {
    type: `${CategoryActions.UPDATE_CATEGORY}`,
    payload: axios.put(`${url}categories`, data),
  };
};
export const getProducts = (id) => {
  return {
    type: `${CategoryActions.GET_PRODUCTS}`,
    payload: axios.get(`${url}products/${id}`),
  };
};
export const increaseQuantity = (id) => {
  return {
    type: `${CategoryActions.INCREASE_QUANTITY}`,
    payload: axios.put(`${url}products`, {
      params: {
        id,
      },
    }),
  };
};
