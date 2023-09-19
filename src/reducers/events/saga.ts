import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchEventRequest } from "./api";
import { fetch_events_error, fetch_events_success } from "./slice";

export function* fetchEventSaga(): SagaIterator {
  const res = yield call(fetchEventRequest);
  if (res.error) {
    yield put(fetch_events_error(res.error));
    return;
  }
  yield put(fetch_events_success(res.data.events));
}

export function* eventSagas(): Generator {
  yield takeEvery("event/fetch_event", fetchEventSaga);
}
