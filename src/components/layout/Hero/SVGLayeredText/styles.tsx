import styled from "styled-components";

const BaseSVGText = styled.text<{
  $letterSpacing?: string;
  $fontFamily?: string;
}>`
  text-anchor: middle;
  dominant-baseline: central;
  paint-order: stroke fill;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "normal"};
  font-family: ${({ $fontFamily, theme }) =>
    $fontFamily && $fontFamily !== "default" ? $fontFamily : theme.fontFamily.display};
`;

export const SVGTitleShadow = styled(BaseSVGText)`
  font-family: ${({ $fontFamily, theme }) =>
    $fontFamily && $fontFamily !== "default" ? $fontFamily : theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  filter: blur(2px);
`;

export const SVGTitleText = styled(BaseSVGText)`
  font-family: ${({ $fontFamily, theme }) =>
    $fontFamily && $fontFamily !== "default" ? $fontFamily : theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const SVGHeroStroke = styled(BaseSVGText)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  fill: none;
  stroke-linejoin: round;
`;

export const SVGHeroFill = styled(BaseSVGText)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  stroke: none;
`;
