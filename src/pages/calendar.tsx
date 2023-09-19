import { Box } from "@mui/material";
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
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "100vh",
            backgroundColor: "lightgray",
            p: 0.1,
          }}
        >
          <SmallCalendar />
        </Box>
        <Box sx={{ width: "80%", height: "100vh", backgroundColor: "white" }}>
          <LargeCalendar />
        </Box>
      </Box>
    </MainLayout>
  );
}

export default CalendarPage;
