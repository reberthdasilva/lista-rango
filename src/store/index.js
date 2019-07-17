import { createStore } from "redux";
import middleware from "./middlewares";
import reducer from "./reducers";

const store = createStore(reducer, middleware);

export default store;
