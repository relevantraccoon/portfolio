import styled from "styled-components";

export const SVGText = styled.text`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-anchor: middle;
  dominant-baseline: central;
  paint-order: stroke fill;
`;
