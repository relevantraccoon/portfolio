export const colors = {
  // Brand colors from Hero
  brand: {
    primary: "rgb(187, 94, 79)",
    primaryDark: "rgb(167, 74, 59)",
    light: "rgb(219, 177, 166)",
  },

  // Background colors
  background: {
    dark: "rgb(30, 20, 18)",
    transparent: "transparent",
  },

  // Text colors
  text: {
    primary: "#ffffff",
    secondary: "rgb(219, 177, 166)",
    accent: "rgb(187, 94, 79)",
    dark: "rgb(30, 20, 18)",
  },

  // Colors extracted from Hero image, for later use
  extracted: {
    lightest: [
      "rgba(220, 178, 168, 1)",
      "rgba(220, 178, 166, 1)",
      "rgba(219, 177, 166, 1)",
      "rgba(219, 176, 165, 1)",
      "rgba(219, 176, 166, 1)",
      "rgba(219, 178, 167, 1)",
      "rgba(219, 178, 166, 1)",
      "rgba(218, 174, 162, 1)",
      "rgba(218, 175, 164, 1)",
    ],
    light: [
      "rgba(217, 176, 165, 1)",
      "rgba(217, 171, 161, 1)",
      "rgba(216, 170, 159, 1)",
      "rgba(215, 169, 156, 1)",
      "rgba(213, 160, 148, 1)",
      "rgba(211, 156, 144, 1)",
    ],
    mediumLight: [
      "rgba(206, 144, 131, 1)",
      "rgba(205, 140, 127, 1)",
      "rgba(204, 139, 127, 1)",
      "rgba(202, 132, 119, 1)",
      "rgba(200, 129, 116, 1)",
      "rgba(199, 126, 113, 1)",
      "rgba(198, 147, 136, 1)",
      "rgba(198, 124, 110, 1)",
      "rgba(198, 124, 111, 1)",
      "rgba(197, 119, 107, 1)",
      "rgba(195, 116, 102, 1)",
      "rgba(194, 114, 99, 1)",
      "rgba(193, 149, 138, 1)",
      "rgba(193, 109, 94, 1)",
      "rgba(192, 140, 128, 1)",
      "rgba(191, 104, 89, 1)",
    ],
    medium: [
      "rgba(189, 101, 86, 1)",
      "rgba(188, 97, 82, 1)",
      "rgba(187, 94, 79, 1)",
      "rgba(187, 95, 80, 1)",
      "rgba(184, 146, 136, 1)",
      "rgba(184, 93, 78, 1)",
      "rgba(180, 141, 131, 1)",
      "rgba(175, 123, 112, 1)",
      "rgba(175, 90, 76, 1)",
      "rgba(172, 89, 75, 1)",
    ],
    mediumDark: [
      "rgba(158, 94, 83, 1)",
      "rgba(154, 115, 106, 1)",
      "rgba(143, 109, 100, 1)",
      "rgba(143, 79, 67, 1)",
    ],
    dark: [
      "rgba(127, 73, 63, 1)",
      "rgba(114, 83, 75, 1)",
      "rgba(113, 82, 74, 1)",
      "rgba(111, 68, 59, 1)",
      "rgba(108, 69, 61, 1)",
      "rgba(108, 66, 58, 1)",
      "rgba(102, 64, 56, 1)",
    ],
    darkest: [
      "rgba(97, 63, 55, 1)",
      "rgba(92, 61, 53, 1)",
      "rgba(88, 59, 52, 1)",
      "rgba(87, 59, 52, 1)",
    ],
  },
};

export type Colors = typeof colors;
