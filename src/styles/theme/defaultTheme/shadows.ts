export const shadows = {
  text: {
    heroGlow:
      "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.8)) drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.4))",
    heroSubtitle: "0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.7)",
  },
  card: {
    default: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    hover: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  video: {
    small: "0 0 22px rgba(255, 255, 255, 0.5)",
    medium: "0 0 26px rgba(255, 255, 255, 0.5)",
    large: "0 0 30px rgba(255, 255, 255, 0.5)",
    insetSmall: "inset 0 0 0 8px rgba(0, 0, 0, 1)",
    insetMedium: "inset 0 0 0 10px rgba(0, 0, 0, 1)",
    insetLarge: "inset 0 0 0 12px rgba(0, 0, 0, 1)",
  },
};

export type Shadows = typeof shadows;
