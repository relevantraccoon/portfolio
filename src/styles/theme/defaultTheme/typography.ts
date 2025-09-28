import { css } from "styled-components";

// Font families
export const fontFamily = {
  primary: '"Varela Round", sans-serif',
  display: '"Caveat Brush", cursive',
}

// Font sizes from Hero styles
export const fontSize = {
  display: '72px',   // SVG display text (responsive)
  displaySub: '36px', // SVG subtitle text
  h1: '2rem',        // 32px - main headings
  h2: '1.25rem',     // 20px - subtitle
  h3: '1.125rem',    // 18px - section headings
  h4: '1rem',        // 16px - subsection headings
  h5: '0.875rem',    // 14px - small headings
  h6: '0.75rem',     // 12px - smallest headings
  body: '1rem',      // 16px - paragraph text
  bodyLarge: '1.125rem', // 18px - larger paragraph text
  caption: '0.875rem',   // 14px - small text
  button: '1.1rem',  // 17.6px - button text
  divider: '1.2rem', // Tech stack divider bullets
}

// Font weights
export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 900,
}

// Line heights
export const lineHeight = {
  tight: 1.6,  // subtitle
  normal: 1.7, // paragraph
}

// Letter spacing
export const letterSpacing = {
  tight: "-0.025em",
  normal: "0",
  medium: "0.05em",
  wide: "0.1em",
}

// Responsive typography
export const responsiveTypography = {
  contactTitle: "clamp(1.5rem, 4vw, 3rem)",
};

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
export type LetterSpacing = typeof letterSpacing;
export type ResponsiveTypography = typeof responsiveTypography;
export type IconTypography = typeof iconTypography;
