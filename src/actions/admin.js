import { AdminActions, url } from "../actionTypes";
import axios from "axios";

export const login = (data) => {
  return {
    type: `${AdminActions.ADMIN_LOGIN}`,
    payload: axios.post(`${url}admins/login`, data),
  };
};
export const getAdmin = () => {
  const id = localStorage.getItem("id");

  return {
    type: `${AdminActions.GET_ADMIN}`,
    payload: axios.get(`${url}admins/getAdmin/${id}`),
  };
};

export const approveManager = (data) => {
  return {
    type: `${AdminActions.APPROVE_MANAGER}`,
    payload: axios.put(`${url}admins/approveManager`, data),
  };
};
