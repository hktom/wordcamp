import { createSlice } from "@reduxjs/toolkit";
import { calendarView, status } from "../../helpers/enum";
import dayjs from "dayjs";
import dayGridPlugin from "@fullcalendar/daygrid";

export interface ICalendarState {
  view: calendarView;
  plugins: any[];
  title: string;
  current_date: string;
  small_current_date: string;
  calendar: any;
}

export const initialState: ICalendarState = {
  view: calendarView.month,
  plugins: [dayGridPlugin],
  title: dayjs().format("MMMM YYYY"),
  current_date: dayjs().format("YYYY-MM-DD"),
  small_current_date: dayjs().format("YYYY-MM-DD"),
  calendar: undefined,
};

export const calendarReducer = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    set_calendar: (state, action: any) => {
      state.calendar = action.payload;
    },
    go_to_today: (state, action) => {
      const calendarAPI = state.calendar.current as any;
      calendarAPI?.getApi().today();
      state.title = calendarAPI.calendar?.currentData?.viewTitle;
    },
    go_to_next: (state, action) => {
      const calendarAPI = state.calendar.current as any;
      calendarAPI?.getApi().next();
      state.title = calendarAPI.calendar?.currentData?.viewTitle;
    },
    go_to_prev: (state, action) => {
      const calendarAPI = state.calendar.current as any;
      calendarAPI?.getApi().prev();
      state.title = calendarAPI.calendar?.currentData?.viewTitle;
    },
    change_view: (state, action: any) => {
      state.view = action.payload.value;
      state.plugins = action.payload.plugins;
    },
    change_current_date: (state, action: any) => {
      state.current_date = action.payload;
    },
    change_small_current_date: (state, action: any) => {
      state.small_current_date = action.payload;
    },
    change_title: (state, action: any) => {
      state.title = action.payload;
    },
  },
});

export const {
  go_to_today,
  change_view,
  change_current_date,
  change_title,
  set_calendar,
  change_small_current_date,
  go_to_next,
  go_to_prev,
} = calendarReducer.actions;

export default calendarReducer.reducer;
