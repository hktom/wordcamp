import { IBasicSelectOption } from "../component/basicSelect";
import { calendarView, status } from "./enum";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";

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
    plugin: [dayGridPlugin],
    label: "Day",
  },
  {
    id: calendarView.week,
    value: calendarView.week,
    plugin: [timeGridPlugin],
    label: "Week",
  },
  {
    id: calendarView.month,
    value: calendarView.month,
    plugin: [dayGridPlugin],
    label: "Month",
  },
  {
    id: calendarView.year,
    value: calendarView.year,
    plugin: [dayGridPlugin],
    label: "Year",
  },
  {
    id: calendarView.multi_month,
    value: calendarView.multi_month,
    label: "Multi Month",
    plugin: [multiMonthPlugin],
  },
];
