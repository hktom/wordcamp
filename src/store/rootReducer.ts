import { combineReducers } from "@reduxjs/toolkit";
import eventReducer from "../reducers/events/slice";

export const rootReducer = combineReducers({
  event: eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
