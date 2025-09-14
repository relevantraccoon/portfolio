import { breakpoints } from "@/styles/theme/defaultTheme/breakpoints";

type ScreenSize = keyof typeof breakpoints;

export type MediaQueryHelpers = {
  from: (screenSize: ScreenSize) => string;
  until: (screenSize: ScreenSize) => string;
  only: (screenSize: ScreenSize) => string;
  between: (startScreenSize: ScreenSize, endScreenSize: ScreenSize) => string;
};

export const mediaQuery: MediaQueryHelpers = {
  from: (screenSize) =>
    `@media (min-width: ${breakpoints[screenSize].start}px)`,
  until: (screenSize) => `@media (max-width: ${breakpoints[screenSize].end}px)`,
  only: (screenSize) =>
    `@media (min-width: ${breakpoints[screenSize].start}px) and (max-width: ${breakpoints[screenSize].end}px)`,
  between: (startScreenSize, endScreenSize) =>
    `@media (min-width: ${breakpoints[startScreenSize].start}px) and (max-width: ${breakpoints[endScreenSize].end}px)`,
};

export type { ScreenSize };
