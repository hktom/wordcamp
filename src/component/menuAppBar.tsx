import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import BasicSelect from "./basicSelect";
import { Button, CircularProgress } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  change_view,
  go_to_next,
  go_to_prev,
  go_to_today,
} from "../reducers/calendar/slice";
import { calendarView, status } from "../helpers/enum";
import { optionCalendarData, optionStatusData } from "../helpers/constant";
import { fetch_events, fetch_events_by_status } from "../reducers/events/slice";
import { useNavigate } from "react-router-dom";
import { change_page } from "../reducers/router/slice";

export default function MenuAppBar() {
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.calendar);
  const event = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();
  const router = useAppSelector((state) => state.router);
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  size="small"
                  sx={{ color: "primary.main", px: 3, mr: 4 }}
                  onClick={() => dispatch(go_to_today(state))}
                >
                  Today
                </Button>

                <IconButton
                  color="inherit"
                  onClick={() => dispatch(go_to_prev(state))}
                >
                  <ChevronLeftIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ px: 2 }}>
                  {state.title}
                </Typography>
                <IconButton
                  color="inherit"
                  onClick={() => dispatch(go_to_next(state))}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {event.isLoading && <CircularProgress sx={{ color: "#fff" }} />}

                {router.page === "home" && (
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
                  onClick={() => dispatch(change_page("home"))}
                >
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => dispatch(change_page("map"))}
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
