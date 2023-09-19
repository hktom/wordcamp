import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Box } from "@mui/material";

function LargeCalendar() {
  return (
    <Box sx={{ p: 1 }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        //   hide title
        //   headerToolbar={{
        //     left: "prev,next today",
        //     center: "title",
        //     right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        //   }}
      />
    </Box>
  );
}

export default LargeCalendar;
