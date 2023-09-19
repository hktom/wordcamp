import { createSlice } from "@reduxjs/toolkit";
import { calendarView, status } from "../../helpers/enum";
import dayjs from "dayjs";

export interface ICalendarState {
  view: calendarView;
  title: string;
  current_date: string;
  small_current_date: string;
  calendar: any;
}

export const initialState: ICalendarState = {
  view: calendarView.month,
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

    go_to_today: (state) => {
      const calendarAPI = state.calendar.current as any;
      calendarAPI?.getApi().today();
    },
    go_to_next: (state) => {
      const calendarAPI = state.calendar.current as any;
      calendarAPI?.getApi().next();
    },
    go_to_prev: (state) => {
      const calendarAPI = state.calendar.current as any;
      calendarAPI?.getApi().prev();
    },
    change_view: (state, action: any) => {
      state.view = action.payload;
    },
    change_current_date: (state, action: any) => {
      state.current_date = action.payload;
    },
    change_small_current_date: (state, action: any) => {
      state.small_current_date = action.payload;
    },
    change_title: (state, action: any) => {
      switch (state.view) {
        case calendarView.year:
          state.title = dayjs().format("YYYY");
          break;
        case calendarView.month:
          state.title = dayjs().format("MMMM YYYY");
          break;
        case calendarView.week:
          state.title = dayjs(action.date).format("MMMM YYYY");
          break;
        case calendarView.day:
          state.title = dayjs(action.date).format("MMMM, DD YYYY");
          break;
        default:
          state.title = dayjs().format("MMMM YYYY");
          break;
      }
    },
  },
});

export const {
  change_view,
  change_current_date,
  change_title,
  set_calendar,
  change_small_current_date,
  go_to_next,
  go_to_prev,
  go_to_today,
} = calendarReducer.actions;

export default calendarReducer.reducer;
