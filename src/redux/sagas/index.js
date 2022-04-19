import { swapi } from "../../services/api";
import types from "../core/actions/types/charactersTypes";
import { call, all, put, takeLatest } from "redux-saga/effects";

function* loadCharactersSaga(action) {
  let jsonResponse = yield call(swapi, action.payload);
  yield put({
    type: types.SET_CHARACTERS,
    payload: jsonResponse,
  });
}

export default function* rootSaga() {
  return yield all([
    yield takeLatest(types.LOAD_CHARACTERS_SAGA, loadCharactersSaga),
  ]);
}
