import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 576, // Small devices (tablets)
      md: 768, // Medium devices (desktops)
      lg: 992, // Large devices (larger desktops)
      xl: 1200, // Extra large devices
      xxl: 1400, // Ultra large devices
    },
  },
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export default theme;
