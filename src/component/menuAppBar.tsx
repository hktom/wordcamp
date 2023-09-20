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

import { calendarView, status } from "../helpers/enum";
import { optionStatusData } from "../helpers/constant";
import { fetch_events, fetch_events_by_status } from "../reducers/events/slice";
import { useNavigate } from "react-router-dom";
import CalendarNavigation from "./calendarNavigation";

export default function MenuAppBar() {
  const navigate = useNavigate();
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
              {window.location.pathname === "/" && <CalendarNavigation />}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                {event.isLoading && <CircularProgress sx={{ color: "#fff" }} />}

                {window.location.pathname === "/" && (
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
                )}
                {/* <Box>
                  <BasicSelect
                    value={optionCalendarView}
                    onChange={(e) => {
                      setOptionCalendarView(e);
                      const payload = optionCalendarData.find(
                        (i) => i.value === e,
                      );
                      
                      dispatch(change_view(payload as any));
                    }}
                    defaultValue={calendarView.month}
                    options={optionCalendarData}
                  />
                </Box> */}
                <IconButton
                  color="inherit"
                  onClick={() => (window.location.href = "/")}
                >
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => (window.location.href = "/map")}
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
