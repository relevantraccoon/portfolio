import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI Library/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The main title of the card",
    },
    subtitle: {
      control: { type: "text" },
      description: "The subtitle below the title",
    },
    badges: {
      control: { type: "object" },
      description: "Array of badge strings to display",
    },
    hoverable: {
      control: { type: "boolean" },
      description: "Whether the card has hover effects",
    },
    maxWidth: {
      control: { type: "text" },
      description: "Maximum width of the card",
    },
    children: {
      control: { type: "text" },
      description: "Content to display in the card body",
    },
    backgroundImage: {
      control: { type: "text" },
      description: "URL for background image",
    },
    backgroundBlendMode: {
      control: { type: "select" },
      options: ["multiply", "overlay", "soft-light", "hard-light", "normal"],
      description: "CSS background-blend-mode for image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Portfolio",
    subtitle: "Live • 2025",
    badges: ["Portfolio", "React", "TypeScript", "Styled Components"],
    hoverable: true,
    backgroundImage: "/projectCardsFinal/portfolio.png",
    children:
      "Portfolio containing custom project carousel, unified theme system, fully responsive design.",
  },
};
