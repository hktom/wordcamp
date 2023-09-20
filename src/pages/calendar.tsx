import { Box, Typography } from "@mui/material";
import MainLayout from "../layout/mainLayout";
import SmallCalendar from "../component/smallCalendar";
import LargeCalendar from "../component/largeCalendar";

function CalendarPage() {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "100%",
            backgroundColor: "#fff",
            p: 0.1,
          }}
        >
          <SmallCalendar />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              px: 5,
            }}
          >
            <Box className="box-opened" sx={{ mr: 1 }}></Box>
            <Typography variant="body2">Upcoming Events</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              my: 2,
              px: 5,
            }}
          >
            <Box className="box-closed" sx={{ mr: 1 }}></Box>
            <Typography variant="body2">Past Events</Typography>
          </Box>
        </Box>
        <Box sx={{ width: "80%", height: "100%", backgroundColor: "#fff" }}>
          <LargeCalendar />
        </Box>
      </Box>
    </MainLayout>
  );
}

export default CalendarPage;
