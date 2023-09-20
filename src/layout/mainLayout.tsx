import { Box } from "@mui/material";
import MenuAppBar from "../component/menuAppBar";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetch_events } from "../reducers/events/slice";
import { IQueryParams } from "../helpers/apiInterface";


interface IProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetch_events({} as any));
  }, []);
  return (
    <div>
      <MenuAppBar />
      <Box>{children}</Box>
    </div>
  );
}

export default MainLayout;
