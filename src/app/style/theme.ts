import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#168bc2",
    },
    secondary: {
      main: "#59b90a",
    },
    text: {
      primary: "#272e36",
      secondary: "#053a85",
    },
  },
  typography: {
    fontFamily: "Barlow",
    h1: {
      fontFamily: "var(--kalam)",
    },
  },
});

export default theme;
