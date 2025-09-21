import type { Meta, StoryObj } from "@storybook/react";
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

export const SurfaceMainCard: Story = {
  args: {
    title: "Surface - Main Card",
    subtitle: "Frontend Developer",
    badges: ["React", "TypeScript"],
    hoverable: true,
    backgroundImage: "/projectCardDemo/image.png",
    children: "This is a comprehensive description of the project that showcases the main features, technologies used, and the impact it had. It demonstrates how the color system works with different text elements and provides context for the project's purpose and scope.",
  },
};

