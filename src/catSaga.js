import { call, put, takeEvery } from "redux-saga/effects";

import { getCatsSuccess } from "./catState";

function* workGetCats() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));

  const formattedCats = yield cats.json();
  const formattedCatsShort = formattedCats.slice(0, 10);

  yield put(getCatsSuccess(formattedCatsShort));
}

function* catSaga() {
  yield takeEvery("cat/getCats", workGetCats);
}

export default catSaga;
