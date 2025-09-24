export const transitions = {
  default: "0.4s ease-out",
  smooth: "0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  quick: "0.3s ease-out",
  fast: "all 0.2s ease",
  transform: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  transformQuick: "transform 0.3s ease-out",
  transformSnappy: "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
  boxShadow: "box-shadow 0.4s ease",
  opacity: "opacity 0.4s ease-out",
  width: "width 0.4s ease-out",
  durations: {
    snappy: "0.4s",
    quick: "0.3s",
    smooth: "0.6s",
  },
  easings: {
    snappy: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeOut: "ease-out",
  },
};

export type Transitions = typeof transitions;