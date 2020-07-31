import { CommonActions } from "../actionTypes";

const initalState = {
  userType: ""
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${CommonActions.SET_USER_TYPE}`:
      // AsyncStorage.setItem("type", action.userType);
      return { ...state, userType: action.userType };

    default:
      return state;
  }
};
