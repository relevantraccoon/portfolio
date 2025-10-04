import type { Meta, StoryObj } from "@storybook/react-vite";
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
    title: "Portfolio",
    thumbnail: "/projectCardsFinal/portfolio.png",
    description:
      "Portfolio containing custom project carousel, unified theme system, fully responsive design.",
    techStack: ["React", "TypeScript", "Styled Components"],
    status: "Live • 2025",
    projectType: "Portfolio",
    href: "https://github.com/relevantraccoon/portfolio",
  },
  {
    id: "2",
    title: "Placeholder 1",
    thumbnail: "/projectCardsFinal/card_bg1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    techStack: ["React", "TypeScript", "GraphQL"],
    status: "Live • 2024",
    projectType: "Web App",
  },
  {
    id: "3",
    title: "Placeholder 2",
    thumbnail: "/projectCardsFinal/card_bg2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    status: "Live • 2023",
    projectType: "Web App",
  },
  {
    id: "4",
    title: "Placeholder 3",
    thumbnail: "/projectCardsFinal/card_bg3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    techStack: ["TypeScript", "Styled Components"],
    status: "In Development • 2024",
    projectType: "Design System",
  },
  {
    id: "5",
    title: "Placeholder 4",
    thumbnail: "/projectCardsFinal/card_bg4.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    techStack: ["React", "Storybook", "Figma"],
    status: "In Development • 2024",
    projectType: "Component Library",
  },
];

export const Default: Story = {
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
          "Multiple projects displayed in a carousel",
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
