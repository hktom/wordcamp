import { createSlice } from "@reduxjs/toolkit";
import { calendarView, status } from "../../helpers/enum";
import dayjs from "dayjs";

export interface ICalendarState {
  view: calendarView;
  title: string;
  current_date: string;
}

export const initialState: ICalendarState = {
  view: calendarView.month,
  title: dayjs().format("MMMM YYYY"),
  current_date: dayjs().format("YYYY-MM-DD"),
};

export const calendarReducer = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    change_view: (state, action: any) => {
      state.view = action.payload;
    },
    change_current_date: (state, action: any) => {
      state.current_date = action.payload;
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

export const { change_view, change_current_date, change_title } =
  calendarReducer.actions;

export default calendarReducer.reducer;
