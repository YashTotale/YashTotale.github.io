export const defaultColors = {
  primary: "lightBlue",
  secondary: "amber",
};

export const defaultShades = {
  primary: <shade>"500",
  secondary: <shade>"500",
};

export const colors: color[] = [
  "Red",
  "Pink",
  "Purple",
  "Deep Purple",
  "Indigo",
  "Blue",
  "Light Blue",
  "Cyan",
  "Teal",
  "Green",
  "Light Green",
  "Lime",
  "Yellow",
  "Amber",
  "Orange",
  "Deep Orange",
];

export const shades: shade[] = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "A100",
  "A200",
  "A400",
  "A700",
];

export type scheme = "primary" | "secondary";

export type shade =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "A100"
  | "A200"
  | "A400"
  | "A700";

export type color =
  | "Red"
  | "Pink"
  | "Purple"
  | "Deep Purple"
  | "Indigo"
  | "Blue"
  | "Light Blue"
  | "Cyan"
  | "Teal"
  | "Green"
  | "Light Green"
  | "Lime"
  | "Yellow"
  | "Amber"
  | "Orange"
  | "Deep Orange";

export const toCssColor = (color: string): string =>
  color
    .replace(" ", "")
    .replace(color.charAt(0), color.charAt(0).toLowerCase());

export const isRgb = (string: string): boolean =>
  /rgb\([0-9]{1,3}\s*,\s*[0-9]{1,3}\s*,\s*[0-9]{1,3}\)/i.test(string);

export const isHex = (string: string): boolean =>
  /^#?([0-9a-f]{3})$|^#?([0-9a-f]){6}$/i.test(string);
