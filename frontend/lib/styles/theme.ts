import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFC300",
      main: "#FFAA00",
      dark: "#FF9500",
      contrastText: "#000",
    },
    secondary: {
      light: "#0336FF",
      main: "#0336FF",
      dark: "#0336FF",
      contrastText: "#fff",
    },
  },
});

export default theme;
