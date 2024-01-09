import { all } from "redux-saga/effects";
import { watchDecrementAsync, watchDivideAsync, watchIncrementAsync, watchMultiplyAsync } from "./counterSaga";
import watcherUserSaga from "./userSaga";


export default function* rootSaga() {

  yield all([watchDecrementAsync(), watchIncrementAsync(),watchMultiplyAsync() ,watchDivideAsync()
  ,watcherUserSaga()]);
  }