import { combineReducers } from "redux";

import users from "./users";
import admins from "./admins";
import common from "./common";
import category from "./category";

const reducers = {
  users,
  admins,
  common,
  category,
};

export default combineReducers(reducers);
