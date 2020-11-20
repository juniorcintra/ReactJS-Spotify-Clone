import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

const middlewares = [];

const SagaMonitor =
	process.env.NODE_ENV === "development"
		? console.tron.createSagaMonitor()
		: null;
const sagaMiddleware = createSagaMiddleware({ SagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
	process.env.NOVE_ENV === "development"
		? compose(
				applyMiddleware(...middlewares),
				console.tron.createEnhancer()
		  )
		: applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
