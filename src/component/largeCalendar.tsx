import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { set_calendar } from "../reducers/calendar/slice";
import { IWordCamp } from "../helpers/apiInterface";

function LargeCalendar() {
  const event = useAppSelector((state) => state.event);
  const [calendarRef, setCalendarRef] = React.useState<any>(null);

  // let calendarRef = React.createRef();
  const dispatch = useAppDispatch();

  const goNext = () => {
    const calendarAPI = calendarRef?.current as any;
    calendarAPI?.getApi().next();
  };

  useEffect(() => {
    setCalendarRef(React.createRef());
  }, []);

  useEffect(() => {
    if (calendarRef) {
      dispatch(set_calendar(calendarRef! as any));
    }
  }, [calendarRef]);

  return (
    <Box sx={{ p: 1 }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={event.events?.map((e: IWordCamp) => {
          return {
            title: e.title,
            start: e.start,
            end: e.end,
            url: e.url,
          };
        })}
      />
    </Box>
  );
}

export default LargeCalendar;
