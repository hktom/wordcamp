import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#323D54",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#F7F9FB",
    },
    info: {
      main: "#454A96",
    },
    error: {
      main: "#C72C30",
    },
    warning: {
      main: "#f7941f",
    },
    success: {
      main: "#17B06D",
    },
  },
  typography: {
    fontFamily: "Inter, arial",
    h1: {
      fontSize: "6rem",
    },
  },
});

export default theme;
