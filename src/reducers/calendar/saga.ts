import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { calendarView } from "../../helpers/enum";
import dayjs from "dayjs";
import { change_title } from "./slice";

export function* viewTitleSaga(action: any): SagaIterator {
  
//   let title: string = "";
//   switch (action.payload) {
//     case calendarView.year:
//       title = dayjs().format("YYYY");
//       break;
//     case calendarView.month:
//       title = dayjs().format("MMMM YYYY");
//       break;
//     case calendarView.week:
//       title = dayjs(action.date).format("MMMM YYYY");
//       break;
//     case calendarView.day:
//       title = dayjs(action.date).format("MMMM, DD YYYY");
//       break;
//     default:
//       title = dayjs().format("MMMM YYYY");
//       break;
//   }

  //   yield put(change_title(title as any));
}

export function* calendarSagas(): Generator {
  yield takeEvery("calendar/go_to_next", viewTitleSaga);
  yield takeEvery("calendar/go_to_prev", viewTitleSaga);
  yield takeEvery("calendar/go_to_today", viewTitleSaga);
}
