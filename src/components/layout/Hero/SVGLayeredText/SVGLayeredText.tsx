import React from "react";
import { useTheme } from "styled-components";
import { 
  SVGTitleShadow, 
  SVGTitleText, 
  SVGHeroStroke, 
  SVGHeroFill 
} from "@/components/layout/Hero/SVGLayeredText/styles";
import type { DefaultThemeProps } from "@/styles/theme/defaultTheme";

export type SVGLayeredTextProps = {
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fillColor?: string;
  strokeColor?: string;
  secondaryStrokeColor?: string;
  letterSpacing?: string;
  fontFamily?: string;
  isSubtitle?: boolean;
};

export const SVGLayeredText: React.FC<SVGLayeredTextProps> = ({
  text,
  x,
  y,
  fontSize,
  fillColor,
  strokeColor,
  secondaryStrokeColor,
  letterSpacing = "normal",
  fontFamily,
  isSubtitle = false,
}) => {
  const theme = useTheme() as DefaultThemeProps;
  const strokeWidthLarge = Math.max(4, fontSize / 6);
  const strokeWidthSmall = Math.max(2, fontSize / 9);

  const finalFillColor = fillColor || theme.colors.palette.background;
  const finalStrokeColor = strokeColor || theme.colors.palette.background;
  const finalSecondaryStrokeColor =
    secondaryStrokeColor || theme.colors.palette.secondary;

  const baseProps = {
    x,
    y,
    fontSize,
    $letterSpacing: letterSpacing,
    $fontFamily: fontFamily,
  };

  if (isSubtitle) {
    return (
      <>
        {/* Blurry shadow for better readability */}
        <SVGTitleShadow
          {...baseProps}
          fill="rgba(0, 0, 0, 0.6)"
          stroke="rgba(0, 0, 0, 0.4)"
          strokeWidth={3}
        >
          {text}
        </SVGTitleShadow>

        {/* Main text */}
        <SVGTitleText
          {...baseProps}
          fill={theme.colors.palette.secondary}
        >
          {text}
        </SVGTitleText>
      </>
    );
  }

  return (
    <>
      {/* Background stroke (largest) */}
      <SVGHeroStroke
        {...baseProps}
        stroke={finalStrokeColor}
        strokeWidth={strokeWidthLarge}
      >
        {text}
      </SVGHeroStroke>

      {/* Secondary stroke (medium) */}
      <SVGHeroStroke
        {...baseProps}
        stroke={finalSecondaryStrokeColor}
        strokeWidth={strokeWidthSmall}
      >
        {text}
      </SVGHeroStroke>

      {/* Fill (top layer) */}
      <SVGHeroFill
        {...baseProps}
        fill={finalFillColor}
      >
        {text}
      </SVGHeroFill>
    </>
  );
};
