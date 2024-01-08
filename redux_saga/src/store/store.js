import { createStore } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducer/rootReducer";
import rootSaga from "../saga/rootsaga";



const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);



  export default store;