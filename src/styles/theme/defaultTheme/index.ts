import { colors, type Colors } from "@/styles/theme/defaultTheme/colors";
import { shadows, type Shadows } from "@/styles/theme/defaultTheme/shadows";
import { layout, type Layout } from "@/styles/theme/defaultTheme/layout";
import {
  sizes,
  spacing,
  gutters,
  containers,
  borderRadius,
  type Sizes,
  type Spacing,
  type Gutters,
  type Containers,
  type BorderRadius,
} from "@/styles/theme/defaultTheme/sizes";
import {
  iconTypography,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  type IconTypography,
  type FontFamily,
  type FontSize,
  type FontWeight,
  type LineHeight,
} from "@/styles/theme/defaultTheme/typography";
import {
  breakpoints,
  type Breakpoints,
} from "@/styles/theme/defaultTheme/breakpoints";
import { zIndex, type ZIndex } from "@/styles/theme/defaultTheme/zIndex";

export type DefaultThemeProps = {
  colors: Colors;
  sizes: Sizes;
  spacing: Spacing;
  gutters: Gutters;
  containers: Containers;
  borderRadius: BorderRadius;
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  breakpoints: Breakpoints;
  iconTypography: IconTypography;
  shadows: Shadows;
  layout: Layout;
  zIndex: ZIndex;
};

export const defaultTheme: DefaultThemeProps = {
  colors,
  sizes,
  spacing,
  gutters,
  containers,
  borderRadius,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  breakpoints,
  iconTypography,
  shadows,
  layout,
  zIndex,
};
