import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { TbArrowBigRightFilled } from "react-icons/tb";

const meta: Meta<typeof Button> = {
  title: "UI Library/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "navigation", "outlinePrimary"],
      description: "The visual style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    children: {
      control: { type: "text" },
      description: "The button content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Get In Touch",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Learn More",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true,
  },
};

export const Navigation: Story = {
  args: {
    variant: "navigation",
    children: <TbArrowBigRightFilled />,
  },
};

export const OutlinePrimary: Story = {
  args: {
    variant: "outlinePrimary",
    children: "Outline Primary",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="navigation"><TbArrowBigRightFilled /></Button>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="large">Large</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="outlinePrimary">Outline Primary</Button>
    </div>
  ),
};