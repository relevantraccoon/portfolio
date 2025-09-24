import { colors, type Colors } from "@/styles/theme/defaultTheme/colors";
import { shadows, type Shadows } from "@/styles/theme/defaultTheme/shadows";
import { layout, type Layout } from "@/styles/theme/defaultTheme/layout";
import {
  sizes,
  spacing,
  gutters,
  containers,
  borderRadius,
  controls,
  type Sizes,
  type Spacing,
  type Gutters,
  type Containers,
  type BorderRadius,
  type Controls,
} from "@/styles/theme/defaultTheme/sizes";
import {
  iconTypography,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  type IconTypography,
  type FontFamily,
  type FontSize,
  type FontWeight,
  type LineHeight,
  type LetterSpacing,
} from "@/styles/theme/defaultTheme/typography";
import {
  breakpoints,
  type Breakpoints,
} from "@/styles/theme/defaultTheme/breakpoints";
import { zIndex, type ZIndex } from "@/styles/theme/defaultTheme/zIndex";
import { transitions, type Transitions } from "@/styles/theme/defaultTheme/transitions";

export type DefaultThemeProps = {
  colors: Colors;
  sizes: Sizes;
  spacing: Spacing;
  gutters: Gutters;
  containers: Containers;
  borderRadius: BorderRadius;
  controls: Controls;
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  breakpoints: Breakpoints;
  iconTypography: IconTypography;
  shadows: Shadows;
  layout: Layout;
  zIndex: ZIndex;
  transitions: Transitions;
};

export const defaultTheme: DefaultThemeProps = {
  colors,
  sizes,
  spacing,
  gutters,
  containers,
  borderRadius,
  controls,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  breakpoints,
  iconTypography,
  shadows,
  layout,
  zIndex,
  transitions,
};
