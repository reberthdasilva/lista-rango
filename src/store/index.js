import { createStore, applyMiddleware } from "redux";
// import middleware from "./middlewares";
import logger from "./middlewares/logger";
import reducer from "./reducers";
import rootSaga from "./sagas";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
