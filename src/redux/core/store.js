import { createStore, compose, applyMiddleware } from "redux";
import combinedReducers from "../core/combinedReducers";
import createSaga from "redux-saga";
import sagas from "../sagas";

const sagaMiddleware = createSaga();

const dev =
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  combinedReducers,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);
