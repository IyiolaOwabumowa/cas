import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import reducer from "./reducers";

const loggerMiddleware = createLogger();

const enhance = composeWithDevTools({
  realtime: true,
  host: 'localhost',
  port: 3000
  });

export const store = createStore(
  reducer,
  enhance(applyMiddleware(thunkMiddleware))
);
