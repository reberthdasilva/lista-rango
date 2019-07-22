import { getRestaurants } from "../../utils/API/restaurants";
import { all, takeEvery, takeLatest, put, call } from "redux-saga/effects";

function* asyncReceiveRestaurants() {
  const response = yield call(getRestaurants);
  yield put({ type: "RECEIVE_RESTAURANTS", restaurants: response });
}

export default function* root() {
  yield all([takeLatest("ASYNC_RECEIVE_RESTAURANTS", asyncReceiveRestaurants)]);
}
