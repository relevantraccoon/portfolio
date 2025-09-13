export const breakpoints = {
  mobile: { start: 0, end: 479 },
  mobileWide: { start: 480, end: 767 },
  tablet: { start: 768, end: 990 },
  desktop: { start: 991, end: 1279 },
  desktopLarge: { start: 1280, end: 1439 },
  widescreen: { start: 1440, end: 1919 },
  fhd: { start: 1920, end: Infinity },
};

export type Breakpoints = typeof breakpoints;
