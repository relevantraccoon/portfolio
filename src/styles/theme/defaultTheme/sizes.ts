export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  xxl: "3rem", // 48px
  xxxl: "4rem", // 64px
};

export const gutters = {
  mobile: "1rem", // 16px
  mobileWide: "1.5rem", // 24px
  tablet: "2rem", // 32px
  desktop: "3rem", // 48px
  desktopLarge: "4rem", // 64px
  widescreen: "5rem", // 80px
  fhd: "6rem", // 96px
};

export const containers = {
  mobile: "100%",
  mobileWide: "100%",
  tablet: "100%",
  desktop: "100%",
  desktopLarge: "100%",
  widescreen: "100%",
  fhd: "100%",
};

export const borderRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
};

export const controls = {
  button: {
    width: "40px",
    height: "40px",
  },
  navButton: {
    width: "50px",
    height: "50px",
  },
  dot: {
    width: "12px",
    height: "12px",
  },
};

export const sizes: Sizes = {};

export type Controls = typeof controls;
export type Sizes = { [key: string]: number };
export type Spacing = typeof spacing;
export type Gutters = typeof gutters;
export type Containers = typeof containers;
export type BorderRadius = typeof borderRadius;
