import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  fetchEventRequest,
  fetchEventRequestByDate,
  fetchEventRequestByStatus,
} from "./api";
import { fetch_events_error, fetch_events_success } from "./slice";

export function* fetchEventSaga(action: any): SagaIterator {
  const res = yield call(fetchEventRequest, action.payload);
  if (res.error) {
    yield put(fetch_events_error(res.error));
    return;
  }
  yield put(fetch_events_success(res.data));
}
export function* fetchEventSagaByStatus(action: any): SagaIterator {
  const res = yield call(fetchEventRequestByStatus, action.payload);
  if (res.error) {
    yield put(fetch_events_error(res.error));
    return;
  }
  yield put(fetch_events_success(res.data));
}
export function* fetchEventSagaByDate(action: any): SagaIterator {
  const res = yield call(fetchEventRequestByDate, action.payload);
  if (res.error) {
    yield put(fetch_events_error(res.error));
    return;
  }
  yield put(fetch_events_success(res.data));
}

export function* eventSagas(): Generator {
  yield takeEvery("event/fetch_events", fetchEventSaga);
  yield takeEvery("event/fetch_events_by_status", fetchEventSagaByStatus);
  yield takeEvery("event/fetch_events_by_date", fetchEventSagaByDate);
}
