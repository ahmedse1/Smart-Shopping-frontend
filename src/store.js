import { createStore, applyMiddleware, compose } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk,
      createPromise({
        promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"]
      }),
      logger
    )
  )
);

export default store;
