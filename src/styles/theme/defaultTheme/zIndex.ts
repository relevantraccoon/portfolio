export const zIndex = {
  // Base layers (used in Hero section)
  background: 1,
  content: 2,

  // Card layers
  card: {
    base: 1,
    hover: 2,
    content: 3,
  },

  // Carousel layers (used in Projects section)
  carousel: {
    hidden: 2,
    side: 6,
    active: 11,
    navigation: 21,
  },

  // Section layers
  sections: {
    wrapper: 1,    // ContentWrapper that holds all scrolling sections
    contact: 0,    // Sticky contact section at bottom
    content: 6,    // Content within contact section
  },
};

export type ZIndex = typeof zIndex;
