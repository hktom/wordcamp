import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import { go_to_date } from "../reducers/calendar/slice";

export default function SmallCalendar() {
  const state = useAppSelector((state) => state.calendar);
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(state.small_current_date),
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setValue(dayjs(state.small_current_date));
  }, [state.small_current_date]);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              dispatch(go_to_date(newValue as any));
            }}
          />
        </DemoItem>
      </DemoContainer>
    </Box>
  );
}
