import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Projects } from "@/components/sections/Projects/Projects";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const meta: Meta<typeof Projects> = {
  title: "Components/Sections/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Projects section using CSS Grid with fr units for precise proportions.",
      },
    },
  },
  argTypes: {
    projects: {
      control: { type: "object" },
      description: "Array of project data",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProjects = [
  {
    id: "1",
    title: "Kubic Kode",
    thumbnail: "/projectCardDemo/image.png",
    description:
      "Complete 2D game engine with multiplayer support and comprehensive toolkit for game development",
    techStack: ["JavaScript", "WebGL"],
    status: "Live • 2024",
    projectType: "Game Engine",
  },
  {
    id: "2",
    title: "Project Two",
    thumbnail: "/projectCardDemo/image2.png",
    description:
      "Modern web application built with React and TypeScript featuring responsive design and real-time updates",
    techStack: ["React", "TypeScript"],
    status: "Live • 2024",
    projectType: "Web App",
  },
  {
    id: "3",
    title: "Project Three",
    thumbnail: "/projectCardDemo/image3.png",
    description:
      "RESTful API backend with Vue.js frontend providing seamless data integration and user experience",
    techStack: ["Vue", "Node.js"],
    status: "Live • 2023",
    projectType: "API",
  },
  {
    id: "4",
    title: "Project Four",
    thumbnail: "/projectCardDemo/image.png",
    description:
      "Cross-platform mobile application with native performance and intuitive user interface design",
    techStack: ["React Native", "Expo"],
    status: "In Development • 2024",
    projectType: "Mobile App",
  },
  {
    id: "5",
    title: "Project Five",
    thumbnail: "/projectCardDemo/image2.png",
    description:
      "AI-powered application with real-time data processing and machine learning integration for intelligent insights",
    techStack: ["Python", "TensorFlow"],
    status: "Beta • 2024",
    projectType: "AI Application",
  },
];

export const CarouselDefault: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <Story />
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "5-card carousel with current animation: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
};

export const CarouselFast: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.3s",
              "--carousel-easing": "cubic-bezier(0.4, 0, 0.2, 1)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Fast animation: 0.3s with sharp easing",
      },
    },
  },
};

export const CarouselSlow: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "1.2s",
              "--carousel-easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Slow animation: 1.2s with smooth easing",
      },
    },
  },
};

export const CarouselBouncy: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.8s",
              "--carousel-easing": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Bouncy animation: 0.8s with elastic easing",
      },
    },
  },
};

export const CarouselSnappy: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.4s",
              "--carousel-easing": "cubic-bezier(0.25, 0.1, 0.25, 1)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Snappy animation: 0.4s with material design easing",
      },
    },
  },
};

export const CarouselDramatic: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "1.5s",
              "--carousel-easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Dramatic slow animation: 1.5s with extended smooth easing",
      },
    },
  },
};

export const CarouselSpring: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.7s",
              "--carousel-easing": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Spring animation: 0.7s with back easing",
      },
    },
  },
};

export const CarouselSharp: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.2s",
              "--carousel-easing": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Sharp animation: 0.2s with quick ease-in",
      },
    },
  },
};

export const CarouselButtery: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.9s",
              "--carousel-easing": "cubic-bezier(0.23, 1, 0.32, 1)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Buttery smooth animation: 0.9s with gentle ease-out",
      },
    },
  },
};

export const CarouselBouncyFast: Story = {
  args: {
    projects: sampleProjects,
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={
            {
              "--carousel-duration": "0.5s",
              "--carousel-easing": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
            } as React.CSSProperties
          }
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Fast bouncy animation: 0.5s with extra elastic bounce at the end",
      },
    },
  },
};

export const SingleProject: Story = {
  args: {
    projects: [sampleProjects[0]],
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <Story />
      </DefaultThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Single project display - navigation buttons are hidden when there's only one project",
      },
    },
  },
};
