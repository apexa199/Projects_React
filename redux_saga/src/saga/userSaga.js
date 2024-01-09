import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../components/fetchGetUsers";


function* handleGetUsers() {
    try {
   
      const users = yield call(fetchGetUsers);  
        console.log(users)

      yield put({ type: "GET_USERS_SUCCESS", payload: users });
    
    } catch (err) {

      yield put({ type: "GET_USERS_FAILED", payload: err });
    }
  }

export default function* watcherUserSaga() {

    yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  }
