import * as Suffixes from "./suffixes";

import * as UserActions from "./user";
import * as AdminActions from "./admin";
import * as CommonActions from "./common";
import * as CategoryActions from "./category";

const url = "http://localhost:5000/";
// const url = "https://wrp-test.herokuapp.com/";

export async function uploadImages(data = []) {
  const body = new FormData();
  body.append("gallery", data);
  body.append("Content-Type", data.type);

  const response = await fetch(`${url}products/images`, {
    method: "POST",
    body,
  });

  return await response.json();
}

export {
  Suffixes,
  UserActions,
  AdminActions,
  CommonActions,
  CategoryActions,
  url,
};
