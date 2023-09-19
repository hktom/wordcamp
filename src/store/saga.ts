import { fork, SimpleEffect } from "redux-saga/effects";
import { eventSagas } from "../reducers/events/saga";

export function* rootSaga(): IterableIterator<SimpleEffect<"FORK">> {
  yield fork(eventSagas);
}
