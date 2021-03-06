//React Imports
import React from "react";

//Material UI Imports
import {
  colors,
  useMediaQuery,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import LabOverrides from "@material-ui/lab/themeAugmentation";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getIsDarkMode, getPalette } from "./Redux/selectors";
import { toggleDarkMode } from "./Redux/actions";

export const alternativeFont = "Arial, sans-serif";

const Theme: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isDarkMode = useSelector(getIsDarkMode);
  if (isDarkMode === null && prefersDarkMode) {
    dispatch(toggleDarkMode(prefersDarkMode));
  }

  const [
    primaryColor,
    secondaryColor,
    primaryShade,
    secondaryShade,
  ] = useSelector(getPalette);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiTooltip: {
            arrow: {
              color: "rgb(0, 0, 0, 0.76)",
            },
            tooltip: {
              fontFamily: alternativeFont,
              fontWeight: 600,
              fontSize: "0.72rem",
              backgroundColor: "rgb(0, 0, 0, 0.76)",
            },
          },
          MuiTab: {
            wrapper: {
              fontFamily: alternativeFont,
              fontWeight: 600,
              fontSize: "0.9rem",
            },
          },
          MuiButton: {
            label: {
              fontFamily: alternativeFont,
              fontWeight: 600,
            },
          },
          MuiAlert: {
            message: {
              fontFamily: alternativeFont,
              fontWeight: 600,
            },
          },
          MuiChip: {
            label: {
              fontSize: "0.875rem",
            },
            avatarColorSecondary: {
              backgroundColor: "inherit",
            },
            avatarColorPrimary: {
              backgroundColor: "inherit",
            },
          },
          MuiSlider: {
            root: {
              "@media (pointer: coarse)": {
                padding: "auto",
              },
            },
          },
        },
        typography: {
          fontFamily: "Palatino, Georgia, Serif",
          fontWeightBold: 600,
        },
        palette: {
          type: isDarkMode ? "dark" : "light",
          primary: {
            //@ts-ignore
            main: colors[primaryColor][primaryShade],
          },
          secondary: {
            //@ts-ignore
            main: colors[secondaryColor][secondaryShade],
          },
        },
        spacing: 8,
      }),
    [isDarkMode, primaryColor, secondaryColor, primaryShade, secondaryShade]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
