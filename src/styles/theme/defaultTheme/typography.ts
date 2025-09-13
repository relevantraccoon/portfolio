import { css } from "styled-components";

// Font families
export const fontFamily = {
  primary: '"Varela Round", sans-serif',
  display: '"Caveat Brush", cursive',
}

// Font sizes from Hero styles
export const fontSize = {
  body: '1rem',      // 16px - paragraph text
  button: '1.1rem',  // 17.6px - button text
  h2: '1.25rem',     // 20px - subtitle
  display: '72px',   // SVG display text (responsive)
  displaySub: '36px', // SVG subtitle text
}

// Font weights
export const fontWeight = {
  normal: 400,
  medium: 600,
  bold: 900,
}

// Line heights
export const lineHeight = {
  tight: 1.6,  // subtitle
  normal: 1.7, // paragraph
}

// Icon typography (legacy)
export const iconTypography = {
  iconMini: css`
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 8px;
  `,
  iconSmall: css`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
  `,
  iconMedium: css`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  `,
  iconLarge: css`
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 36px;
  `,
};

export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type LineHeight = typeof lineHeight;
export type IconTypography = typeof iconTypography;
