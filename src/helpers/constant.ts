import { IBasicSelectOption } from "../component/basicSelect";
import { calendarView, status } from "./enum";

export const optionStatusData: IBasicSelectOption[] = [
  {
    id: status.default,
    value: status.default,
    label: "Default",
  },
  {
    id: status.open,
    value: status.open,
    label: "Upcoming Events",
  },
  {
    id: status.closed,
    value: status.closed,
    label: "Past Events",
  },
];

export const optionCalendarData: IBasicSelectOption[] = [
  {
    id: calendarView.day,
    value: calendarView.day,
    label: "Day",
  },
  {
    id: calendarView.week,
    value: calendarView.week,
    label: "Week",
  },
  {
    id: calendarView.month,
    value: calendarView.month,
    label: "Month",
  },
  {
    id: calendarView.year,
    value: calendarView.year,
    label: "Year",
  },
];
