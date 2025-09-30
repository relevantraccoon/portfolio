export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  xxl: "3rem", // 48px
  xxxl: "4rem", // 64px
  xxxxl: "5rem", // 80px
  xxxxxl: "5.25rem", // 84px
  xxxxxxl: "11.25rem", // 180px
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
    small: {
      width: "40px",
      height: "40px",
    },
    medium: {
      width: "48px",
      height: "48px",
    },
    large: {
      width: "60px",
      height: "60px",
    },
  },
  navButton: {
    width: "50px",
    height: "50px",
  },
  dot: {
    width: "12px",
    height: "12px",
  },
  icon: {
    padding: "12px",
    fontSize: "20px",
    size: "24px",
  },
  skillItem: {
    minHeight: "48px",
    minWidth: "120px",
  },
};

export const sizes: Sizes = {};

export type Controls = typeof controls;
export type Sizes = { [key: string]: number };
export type Spacing = typeof spacing;
export type Gutters = typeof gutters;
export type Containers = typeof containers;
export type BorderRadius = typeof borderRadius;
