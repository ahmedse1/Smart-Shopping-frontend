import { CommonActions } from "../actionTypes";

export const setUserType = userType => ({
  type: `${CommonActions.SET_USER_TYPE}`,
  userType
});
