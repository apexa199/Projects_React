import { all } from "redux-saga/effects";
import { watchDecrementAsync, watchDivideAsync, watchIncrementAsync, watchMultiplyAsync } from "./counterSaga";


export default function* rootSaga() {

  yield all([watchDecrementAsync(), watchIncrementAsync(),watchMultiplyAsync() ,watchDivideAsync()]);
  }