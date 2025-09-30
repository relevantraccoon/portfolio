import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { Content } from "@/components/layout/Content";
import { mediaQuery } from "@/styles/theme/mediaQueries";
import type { DefaultThemeProps } from "@/styles/theme/defaultTheme";

export type CircleDividerProps = {
  circleCount?: number;
  circleSize?: number;
};

const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.palette.background};
  display: flex;
  align-items: center;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.sections.normal};
`;

const CirclesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.div<{ $size: number; $color: string }>`
  width: ${({ $size }) => Math.round($size * 0.7)}px;
  height: ${({ $size }) => Math.round($size * 0.7)}px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;

  ${mediaQuery.from("mobileWide")} {
    width: ${({ $size }) => Math.round($size * 0.85)}px;
    height: ${({ $size }) => Math.round($size * 0.85)}px;
  }

  ${mediaQuery.from("tablet")} {
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
  }
`;

export const CircleDivider: React.FC<CircleDividerProps> = ({
  circleCount = 15,
  circleSize = 20,
}) => {
  const theme = useTheme() as DefaultThemeProps;

  // Get all extracted colors from theme
  const extractedColors = [
    ...theme.colors.extractedDoNotUse.lightest,
    ...theme.colors.extractedDoNotUse.light,
    ...theme.colors.extractedDoNotUse.mediumLight,
    ...theme.colors.extractedDoNotUse.medium,
    ...theme.colors.extractedDoNotUse.mediumDark,
    ...theme.colors.extractedDoNotUse.dark,
    ...theme.colors.extractedDoNotUse.darkest,
  ];

  // Generate random colors for circles
  const circles = Array.from({ length: circleCount }, (_, index) => {
    const colorIndex = Math.floor(Math.random() * extractedColors.length);
    return {
      id: index,
      color: extractedColors[colorIndex],
    };
  });

  return (
    <FullWidthContainer>
      <Content type="grid" verticalPadding={true} verticalPaddingSize="half">
        <CirclesContainer>
          {circles.map((circle) => (
            <Circle key={circle.id} $size={circleSize} $color={circle.color} />
          ))}
        </CirclesContainer>
      </Content>
    </FullWidthContainer>
  );
};
