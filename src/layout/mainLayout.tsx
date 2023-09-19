import { Box } from "@mui/material";
import MenuAppBar from "../component/menuAppBar";

interface IProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
  return (
    <div>
      <MenuAppBar />
      <Box>{children}</Box>
    </div>
  );
}

export default MainLayout;
