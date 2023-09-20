import FullCalendar from "@fullcalendar/react";
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
  const calendarRef = useRef<any>(null);

  useEffect(() => {
    if (calendarRef?.current) {
      dispatch(set_calendar(calendarRef as any));
    }
  }, [calendarRef]);

  return (
    <Box sx={{ p: 1 }}>
      <FullCalendar
        ref={calendarRef}
        plugins={calendar.plugins}
        initialView={calendar.view}
        eventClick={(e) => {
          e.jsEvent.preventDefault();
          window.open(e.event.url, "_blank");
        }}
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
