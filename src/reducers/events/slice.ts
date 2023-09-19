import { createSlice } from "@reduxjs/toolkit";
import { IWordCamp } from "../../helpers/apiInterface";

export interface IEventState {
  loading: boolean;
  error?: string;
  events: IWordCamp[];
}

export const initialState: IEventState = {
  loading: false,
  events: [],
  error: undefined,
};

export const eventReducer = createSlice({
  name: "event",
  initialState,
  reducers: {
    fetch_events: (state) => {
      state.loading = true;
    },
    fetch_events_success: (state, action) => {
      state.loading = false;
      state.events = action.payload;
    },
    fetch_events_error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetch_events, fetch_events_success, fetch_events_error } =
  eventReducer.actions;

export default eventReducer.reducer;
