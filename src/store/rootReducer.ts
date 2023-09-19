import { combineReducers } from "@reduxjs/toolkit";
import eventReducer from "../reducers/events/slice";
import calendarReducer from "../reducers/calendar/slice";
import routerReducer from "../reducers/router/slice";

export const rootReducer = combineReducers({
  event: eventReducer,
  calendar: calendarReducer,
  router: routerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
