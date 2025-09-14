import React from "react";
import { useTheme } from "styled-components";
import { SVGText } from "@/components/layout/Hero/SVGLayeredText/styles";
import type { DefaultThemeProps } from "@/styles/theme/defaultTheme";

export type SVGLayeredTextProps = {
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fillColor?: string;
  strokeColor?: string;
  secondaryStrokeColor?: string;
};

export const SVGLayeredText: React.FC<SVGLayeredTextProps> = ({
  text,
  x,
  y,
  fontSize,
  fillColor,
  strokeColor,
  secondaryStrokeColor,
}) => {
  const theme = useTheme() as DefaultThemeProps;
  const strokeWidthLarge = Math.max(4, fontSize / 6);
  const strokeWidthSmall = Math.max(2, fontSize / 9);

  const finalFillColor = fillColor || theme.colors.background.dark;
  const finalStrokeColor = strokeColor || theme.colors.background.dark;
  const finalSecondaryStrokeColor =
    secondaryStrokeColor || theme.colors.brand.light;

  return (
    <>
      {/* Background stroke (largest) */}
      <SVGText
        x={x}
        y={y}
        fontSize={fontSize}
        fill="none"
        stroke={finalStrokeColor}
        strokeWidth={strokeWidthLarge}
        strokeLinejoin="round"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {text}
      </SVGText>

      {/* Secondary stroke (medium) */}
      <SVGText
        x={x}
        y={y}
        fontSize={fontSize}
        fill="none"
        stroke={finalSecondaryStrokeColor}
        strokeWidth={strokeWidthSmall}
        strokeLinejoin="round"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {text}
      </SVGText>

      {/* Fill (top layer) */}
      <SVGText
        x={x}
        y={y}
        fontSize={fontSize}
        fill={finalFillColor}
        stroke="none"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {text}
      </SVGText>
    </>
  );
};
