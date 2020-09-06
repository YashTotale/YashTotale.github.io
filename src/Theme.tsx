//React Imports
import React from "react";

//Material UI Imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//Redux Imports
import { useSelector } from "react-redux";
import {
  getIsDarkMode,
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
} from "./Redux/selectors";

const Theme: React.FC = ({ children }) => {
  const isDarkMode = useSelector(getIsDarkMode);
  const primaryColor = useSelector(getPrimaryColor);
  const secondaryColor = useSelector(getSecondaryColor);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            main: primaryColor,
          },
          secondary: {
            main: secondaryColor,
          },
        },
      }),
    [isDarkMode, primaryColor, secondaryColor]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
