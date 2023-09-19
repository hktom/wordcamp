import { createSlice } from "@reduxjs/toolkit";
import { IWordCamp } from "../../helpers/apiInterface";
import { status } from "../../helpers/enum";

export interface IEventState {
  loading: boolean;
  events: IWordCamp[];
  error?: string;
  status?: status;
  start_date?: string;
  end_date?: string;
  page: number;
  per_page: number;
  isLoading: boolean;
}

export const initialState: IEventState = {
  loading: false,
  events: [],
  page: 1,
  per_page: 100,
  isLoading: false,
};

export const eventReducer = createSlice({
  name: "event",
  initialState,
  reducers: {
    fetch_events: (state, action: any) => {
      state.loading = true;
      state.page = action.payload.page || 1;
      state.per_page = action.payload.per_page || 100;
      state.isLoading = true;
    },
    fetch_events_by_date: (state, action: any) => {
      state.loading = true;
      state.start_date = action.payload.start_date;
      state.end_date = action.payload.end_date;
      state.page = action.payload.page || 1;
      state.per_page = action.payload.per_page || 100;
      state.isLoading = true;
    },
    fetch_events_by_status: (state, action: any) => {
      state.loading = true;
      state.status = action.payload.status;
      state.page = action.payload.page || 1;
      state.per_page = action.payload.per_page || 100;
      state.isLoading = true;
    },
    fetch_events_success: (state, action) => {
      state.loading = false;
      state.events = action.payload;
      state.isLoading = false;
    },
    fetch_events_error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetch_events,
  fetch_events_by_date,
  fetch_events_by_status,
  fetch_events_success,
  fetch_events_error,
} = eventReducer.actions;

export default eventReducer.reducer;
