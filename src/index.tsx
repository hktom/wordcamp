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

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      {/* </LocalizationProvider> */}
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
