import { combineReducers } from "@reduxjs/toolkit";
import eventReducer from "../reducers/events/slice";
import calendarReducer from "../reducers/calendar/slice";

export const rootReducer = combineReducers({
  event: eventReducer,
  calendar: calendarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
