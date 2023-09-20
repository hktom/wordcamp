import { Box } from "@mui/material";
import MenuAppBar from "../component/menuAppBar";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { fetch_events } from "../reducers/events/slice";
import { IQueryParams } from "../helpers/apiInterface";

interface IProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
  const dispatch = useAppDispatch();
  const event = useAppSelector((state) => state.event);

  useEffect(() => {
    if (event.events.length === 0) {
      dispatch(fetch_events({} as any));
    }
  }, [event.events]);
  return (
    <div>
      <MenuAppBar />
      <Box>{children}</Box>
    </div>
  );
}

export default MainLayout;
