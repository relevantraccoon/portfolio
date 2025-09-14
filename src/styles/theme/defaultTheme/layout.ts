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
      aboutMe: {
        mobile: "80vh",
        tablet: "70vh",
        desktop: "60vh",
        fhd: "50vh",
      },
      project: {
        mobile: "80vh",
        tablet: "70vh",
        desktop: "60vh",
        fhd: "50vh",
      },
      skillsAndTech: {
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


  animation: {
    speed: {
      quick: "0.15s",
      smooth: "0.3s",
      slow: "0.6s",
    },
    movement: {
      lift: "-2px",
      press: "0",
      float: "-4px",
      drop: "2px",
    },
    easing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  components: {
    hero: {
      aspectRatio: {
        landscape: 320 / 991, // Desktop/tablet
        portrait: 991 / 320, // Mobile
      },
      svg: {
        viewBox: "0 0 400 250",
        centerX: 200,
        text: {
          primary: {
            y: 105,
          },
          secondary: {
            y: 165,
          },
        },
      },
    },
  },
};

export type Layout = typeof layout;
