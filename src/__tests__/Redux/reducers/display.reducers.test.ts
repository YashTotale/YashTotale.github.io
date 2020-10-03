import { displayReducer as display } from "../../../Redux/reducers/display.reducers";
import {
  TOGGLE_DARK_MODE,
  TOGGLE_NAV_BTNS_MENU,
  CHANGE_COLORS,
  CHANGE_SHADE,
  SET_SNACKBAR_MESSAGE,
  HANDLE_SNACKBAR_CLOSE,
  ToggleDarkModePayload,
  ToggleNavBtnsMenuPayload,
  ChangeColorsPayload,
  ChangeShadePayload,
  SetSnackbarMessagePayload,
  HandleSnackbarClosePayload,
} from "../../../Redux/actions/display.actions";
import { display as originalState } from "../sampleStore";

describe("The display reducer", () => {
  test("Toggles dark mode", () => {
    const fakeAction: ToggleDarkModePayload = {
      type: TOGGLE_DARK_MODE,
      payload: {},
    };

    const expected = {
      ...originalState,
      isDarkMode: !originalState.isDarkMode,
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Toggles Nav Btn Menu Open", () => {
    const fakeAction1: ToggleNavBtnsMenuPayload = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: {},
    };

    const expected1 = {
      ...originalState,
      isNavBtnsMenuOpen: !originalState.isNavBtnsMenuOpen,
    };

    const actual1 = display(originalState, fakeAction1);

    expect(actual1).toEqual(expected1);

    const fakeAction2: ToggleNavBtnsMenuPayload = {
      type: TOGGLE_NAV_BTNS_MENU,
      payload: { isOpen: true },
    };

    const expected2 = {
      ...originalState,
      isNavBtnsMenuOpen: true,
    };

    const actual2 = display(originalState, fakeAction2);

    expect(actual2).toEqual(expected2);
  });

  test("Changes color", () => {
    const fakeAction: ChangeColorsPayload = {
      type: CHANGE_COLORS,
      payload: {
        scheme: "secondary",
        color: "#ffffff",
      },
    };

    const expected = {
      ...originalState,
      colors: {
        primary: originalState.colors.primary,
        secondary: "#ffffff",
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Changes shade", () => {
    const fakeAction: ChangeShadePayload = {
      type: CHANGE_SHADE,
      payload: { shade: "A200", scheme: "primary" },
    };

    const expected = {
      ...originalState,
      shades: {
        primary: "A200",
        secondary: originalState.shades.secondary,
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets Snackbar message", () => {
    const message = "test";
    const severity = "error";
    const color = null;

    const fakeAction: SetSnackbarMessagePayload = {
      type: SET_SNACKBAR_MESSAGE,
      payload: { message, severity, color },
    };

    const expected = {
      ...originalState,
      snackBar: {
        isOpen: true,
        severity,
        message,
        color,
      },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Closes the Snackbar", () => {
    const fakeAction: HandleSnackbarClosePayload = {
      type: HANDLE_SNACKBAR_CLOSE,
      payload: {},
    };

    const expected = {
      ...originalState,
      snackBar: { ...originalState.snackBar, isOpen: false },
    };

    const actual = display(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});
