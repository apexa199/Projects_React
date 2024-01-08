import { put, takeEvery, delay, takeLatest } from "redux-saga/effects";
import { DEC, DIV, INC, MUL } from "../action/counterAction";



export function* incrementAsync() {
  yield delay(1000);
  yield put(INC());
}

export function* watchIncrementAsync() {
  yield takeLatest("INCREMENT_ASYNC", incrementAsync);
}



export function* decrementAsync() {
  yield delay(1000);
  yield put(DEC());
}

export function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}


export function* multiplyAsync() {
    yield delay(1000);
    yield put(MUL());
  }
  
  export function* watchMultiplyAsync() {
    yield takeEvery("MULTIPLY_ASYNC", multiplyAsync);
  }

  
  export function* divideAsync() {
    yield delay(1000);
    yield put(DIV());
  }
  
  export function* watchDivideAsync() {
    yield takeEvery("DIVIDE_ASYNC", divideAsync);
  }
  