import { fork, SimpleEffect } from "redux-saga/effects";
import { eventSagas } from "../reducers/events/saga";
import { calendarSagas } from "../reducers/calendar/saga";

export function* rootSaga(): IterableIterator<SimpleEffect<"FORK">> {
  yield fork(eventSagas);
  yield fork(calendarSagas);
}
