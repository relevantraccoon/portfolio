export const layout = {
  content: {
    text: {
      mobile: "100%",
      tablet: "80%",
      desktop: "60%",
    },
    grid: {
      mobile: "100%",
      tablet: "90%",
      desktop: "80%",
    },
    media: {
      mobile: "100%",
      tablet: "100%",
      desktop: "100%",
    },
  },

  grid: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: {
      mobile: "1rem",
      tablet: "1.5rem",
      desktop: "2rem",
    },
  },

  viewport: {
    sections: {
      hero: {
        mobile: "100vh",
        tablet: "100vh",
        desktop: "100vh",
        fhd: "100vh",
      },
      content: {
        mobile: "80vh",
        tablet: "70vh",
        desktop: "60vh",
        fhd: "50vh",
      },
      contact: {
        mobile: "90vh",
        tablet: "80vh",
        desktop: "70vh",
        fhd: "60vh",
      },
    },
  },

  proportions: {
    split: {
      golden: "61.8% 38.2%",
      twoThirds: "66.7% 33.3%",
      majorMinor: "60% 40%",
      equal: "50% 50%",
    },
    gridTemplates: {
      majorMinor: "2fr 1fr",
      equal: "1fr 1fr",
      thirds: "1fr 1fr 1fr",
      quarters: "1fr 1fr 1fr 1fr",
    },
    sizing: {
      almostFull: "95%",
      mostlyFull: "90%",
      threeQuarters: "75%",
      half: "50%",
    },
  },

  responsive: {
    gaps: {
      small: "clamp(1rem, 2vh, 1.5rem)",
      medium: "clamp(1.5rem, 3vh, 2rem)",
      large: "clamp(2rem, 4vh, 3rem)",
      xlarge: "clamp(3rem, 5vh, 4rem)",
      xxlarge: "clamp(4rem, 6vh, 5rem)",
    },
    contentGaps: {
      small: "clamp(1rem, 3vh, 1.5rem)",
      medium: "clamp(1.5rem, 4vh, 2rem)",
      large: "clamp(2rem, 5vh, 2.5rem)",
    },
  },

  animation: {
    speed: {
      quick: "0.15s",
      smooth: "0.3s",
      slow: "0.6s",
      sparkle: "0.6s",
      sparkFloat: "0.8s",
    },
    movement: {
      lift: "-2px",
      press: "0",
      float: "-4px",
      drop: "2px",
      sparkSlide: "6px",
      sparkOffset: "-12px",
    },
    scale: {
      hover: "1.05",
      hoverLarge: "1.1",
      press: "0.95",
    },
    rotation: {
      sparkTilt: "3deg",
    },
    easing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  opacity: {
    disabled: 0.5,
    hidden: 0,
    visible: 1,
  },

  components: {
    hero: {
      aspectRatio: {
        landscape: 320 / 280,
        portrait: 750 / 320,
      },
      svg: {
        viewBox: "0 0 400 250",
        centerX: 200,
        text: {
          primary: {
            y: 105,
          },
          secondary: {
            y: 155,
          },
        },
      },
    },
    carousel: {
      maxWidths: {
        content: "1200px",
        stack: "800px",
        card: {
          mobile: "450px",
          mobileWide: "520px",
          tablet: "650px",
          desktop: "700px",
          desktopLarge: "950px",
          widescreen: "1100px",
          fhd: "1300px",
        },
      },
      heights: {
        stack: {
          mobile: "290px",
          mobileWide: "300px",
          tablet: "320px",
          desktop: "350px",
        },
        minHeights: {
          thumbnail: "120px",
          logo: "80px",
          mood: "100px",
          description: "100px",
        },
      },
      transforms: {
        positions: {
          left: "-30%",
          right: "30%",
          hidden: "200%",
        },
        scales: {
          active: "1",
          side: "0.8",
          hidden: "0.6",
        },
      },
      opacity: {
        active: 1,
        side: 0.4,
        hidden: 0,
        disabled: 0.5,
        blur: {
          slight: 0.3,
          medium: 0.6,
          heavy: 0.8,
        },
      },
      blur: {
        none: "0px",
        slight: "1px",
        medium: "2px",
        heavy: "3px",
      },
    },
    video: {
      sizes: {
        small: "220px",
        medium: "260px",
        large: "300px",
      },
      borders: {
        small: "8px",
        medium: "10px",
        large: "12px",
      },
    },
    contact: {
      maxWidths: {
        text: "400px",
        button: "250px",
        svg: "500px",
      },
    },
  },
};

export type Layout = typeof layout;
