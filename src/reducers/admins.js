import { AdminActions, Suffixes } from "../actionTypes";

const initalState = {
  loading: false,
  adminData: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${AdminActions.ADMIN_LOGIN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        adminData: {},
        loading: true,
      };
    case `${AdminActions.ADMIN_LOGIN}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        adminData: action.payload.data,
        loading: false,
      };
    case `${AdminActions.ADMIN_LOGIN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        adminData: {},
      };
    case `${AdminActions.GET_ADMIN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        adminData: {},
        loading: true,
      };
    case `${AdminActions.GET_ADMIN}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        adminData: action.payload.data,
        loading: false,
      };
    case `${AdminActions.GET_ADMIN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        adminData: {},
      };
    case `${AdminActions.APPROVE_MANAGER}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${AdminActions.APPROVE_MANAGER}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
      };
    case `${AdminActions.APPROVE_MANAGER}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
