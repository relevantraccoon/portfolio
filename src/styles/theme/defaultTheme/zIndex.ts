export const zIndex = {
  // Base layers
  stickyBackground: -1,
  base: 0,
  background: 1,
  content: 2,

  // Interactive elements
  card: {
    base: 1,
    hover: 2,
    content: 3,
  },

  // Carousel specific
  carousel: {
    hidden: 2,
    side: 6,
    active: 11,
    navigation: 21,
  },

  // Section layers
  sections: {
    bottom: 1,
    normal: 2,
    content: 6,
    overlay: 16,
  },

  // UI elements
  navigation: 51,
  overlay: 101,
  modal: 201,
  tooltip: 301,
};

export type ZIndex = typeof zIndex;
