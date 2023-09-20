import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  go_to_today,
  go_to_prev,
  go_to_next,
} from "../reducers/calendar/slice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useAppDispatch, useAppSelector } from "../store/store";

function CalendarNavigation() {
  const state = useAppSelector((state) => state.calendar);
  const event = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
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

      <IconButton color="inherit" onClick={() => dispatch(go_to_prev(state))}>
        <ChevronLeftIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ px: 2 }}>
        {state.title}
      </Typography>
      <IconButton color="inherit" onClick={() => dispatch(go_to_next(state))}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export default CalendarNavigation;
