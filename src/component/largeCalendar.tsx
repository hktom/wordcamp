import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch } from "../store/store";
import { set_calendar } from "../reducers/calendar/slice";

function LargeCalendar() {
  const calendarRef = React.createRef();
  const dispatch = useAppDispatch();

  const goNext = () => {
    const calendarAPI = calendarRef?.current as any;
    calendarAPI?.getApi().next();
  };

  useEffect(() => {
    if (calendarRef) {
      dispatch(set_calendar(calendarRef! as any));
    }
  }, [calendarRef]);

  return (
    <Box sx={{ p: 1 }}>
      <FullCalendar
        ref={calendarRef! as any}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </Box>
  );
}

export default LargeCalendar;
