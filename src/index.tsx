/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarPage from "./pages/calendar";
import MapPage from "./pages/map";
import { Provider } from "react-redux";
import store from "./store/store";
import theme from "./config/theme";
import { ThemeProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../public/css/index.scss";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/map",
  //   element: <MapPage />,
  // },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
