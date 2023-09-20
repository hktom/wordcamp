import { useEffect } from "react";
import CalendarPage from "./calendar";
import MapPage from "./map";
import { Box } from "@mui/material";
import { useAppSelector } from "../store/store";
import { GeneralView } from "../helpers/enum";

function HomePage() {
  const event = useAppSelector((state) => state.event);
  return (
    <div>
      {/* <Box sx={{ opacity: event.view === GeneralView.calendar ? 1 : 0 }}>
        
      </Box> */}

      {event.view === GeneralView.calendar && <CalendarPage />}

      {event.view === GeneralView.map && <MapPage />}
    </div>
  );
}

export default HomePage;
