export const zIndex = {
  background: 1,
  content: 2,
  overlay: 3,
  navigation: 5,
  modal: 10,
  tooltip: 20,
  carousel: {
    hidden: 1,
    side: 5,
    active: 10,
  },
};

export type ZIndex = typeof zIndex;