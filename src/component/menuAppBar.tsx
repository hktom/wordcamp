import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import BasicSelect from "./basicSelect";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";

import { GeneralView, calendarView, status } from "../helpers/enum";
import { optionStatusData } from "../helpers/constant";
import {
  change_general_view,
  fetch_events,
  fetch_events_by_status,
} from "../reducers/events/slice";
import CalendarNavigation from "./calendarNavigation";

export default function MenuAppBar() {
  const state = useAppSelector((state) => state.calendar);
  const event = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();
  const [optionStatus, setOptionStatus] = React.useState(status.default);
  const [optionCalendarView, setOptionCalendarView] = React.useState(
    calendarView.month,
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ minWidth: "20%" }}>
              WordCamp Schedule
            </Typography>

            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              {event.view === GeneralView.calendar && <CalendarNavigation />}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                {event.isLoading && <CircularProgress sx={{ color: "#fff" }} />}

                <Box>
                  <BasicSelect
                    value={optionStatus}
                    onChange={(e) => {
                      setOptionStatus(e);
                      if (e == "default") {
                        dispatch(fetch_events({} as any));
                        return;
                      }
                      dispatch(fetch_events_by_status({ status: e } as any));
                    }}
                    defaultValue={status.default}
                    options={optionStatusData}
                  />
                </Box>

                <IconButton
                  color="inherit"
                  onClick={() => {
                    dispatch(change_general_view(GeneralView.calendar as any));
                  }}
                >
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    dispatch(change_general_view(GeneralView.map as any));
                  }}
                >
                  <PublicIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
