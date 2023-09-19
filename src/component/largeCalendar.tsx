import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { set_calendar } from "../reducers/calendar/slice";
import { IWordCamp } from "../helpers/apiInterface";
import { status } from "../helpers/enum";

function LargeCalendar() {
  const event = useAppSelector((state) => state.event);
  const calendar = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      dispatch(set_calendar(calendarRef! as any));
    }
  }, []);

  return (
    <Box sx={{ p: 1 }}>
      <FullCalendar
        ref={calendarRef}
        plugins={calendar.plugins}
        initialView={calendar.view}
        events={event.events?.map((e: IWordCamp) => {
          return {
            title: e.title,
            start: e.start,
            end: e.end,
            url: e.url,
            classNames:
              e.status === status.open ? ["open-event"] : ["close-event"],
          };
        })}
      />
    </Box>
  );
}

export default LargeCalendar;
