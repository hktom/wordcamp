import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import BasicSelect from "./basicSelect";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function MenuAppBar() {
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [calendarView, setCalendarView] = React.useState("month");

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
                >
                  Today
                </Button>

                <IconButton color="inherit">
                  <ChevronLeftIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ px: 2 }}>
                  2021/10
                </Typography>
                <IconButton color="inherit">
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
                <Box>
                  <BasicSelect
                    value={calendarView}
                    onChange={(e) => setCalendarView(e)}
                    options={[]}
                  />
                </Box>
                <Box>
                  <BasicSelect
                    value={calendarView}
                    onChange={(e) => setCalendarView(e)}
                    options={[]}
                  />
                </Box>
                <IconButton color="inherit">
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton color="inherit">
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
