import { colors, type Colors } from "./colors";
import { sizes, type Sizes } from "./sizes";
import { iconTypography, type IconTypography } from "./typography";

export type DefaultThemeProps = {
  colors: Colors;
  sizes: Sizes;
  iconTypography: IconTypography;
};
export const defaultTheme: DefaultThemeProps = {
  colors,
  sizes,
  iconTypography,
};
