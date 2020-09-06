import {
  getIsDarkMode,
  getIsNavBtnsMenuOpen,
  getPrimaryColor,
  getSecondaryColor,
  getPrimaryShade,
  getSecondaryShade,
} from "../../../Redux/selectors/display.selectors";
import sampleState from "../sampleStore";

describe("The display selectors", () => {
  test("The getIsDarkMode selector", () => {
    const expected = sampleState.display.isDarkMode;
    const actual = getIsDarkMode(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getIsNavBtnsMenuOpen selector", () => {
    const expected = sampleState.display.isNavBtnsMenuOpen;
    const actual = getIsNavBtnsMenuOpen(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getPrimaryColor selector", () => {
    const expected = sampleState.display.colors.primary;
    const actual = getPrimaryColor(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSecondaryColor selector", () => {
    const expected = sampleState.display.colors.secondary;
    const actual = getSecondaryColor(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getPrimaryShade selector", () => {
    const expected = sampleState.display.shades.primary;
    const actual = getPrimaryShade(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getSecondaryShade selector", () => {
    const expected = sampleState.display.shades.secondary;
    const actual = getSecondaryShade(sampleState);
    expect(actual).toEqual(expected);
  });
});
