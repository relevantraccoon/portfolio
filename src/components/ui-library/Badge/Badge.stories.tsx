import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const meta: Meta<typeof Badge> = {
  title: "UI Library/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div style={{ padding: "2rem" }}>
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "info"],
      description: "Color variant of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the badge",
    },
    children: {
      control: { type: "text" },
      description: "Badge content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "primary",
    size: "medium",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="tertiary">Tertiary</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
  ),
};

export const TechStack: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", maxWidth: "400px" }}>
      <Badge variant="primary" size="small">TypeScript</Badge>
      <Badge variant="primary" size="small">React</Badge>
      <Badge variant="primary" size="small">GraphQL</Badge>
      <Badge variant="primary" size="small">Styled Components</Badge>
      <Badge variant="primary" size="small">Storybook</Badge>
    </div>
  ),
};

export const Combined: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h3 style={{ margin: "0 0 0.75rem 0", fontSize: "0.875rem", color: "#666" }}>Small</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" size="small">Primary</Badge>
          <Badge variant="secondary" size="small">Secondary</Badge>
          <Badge variant="tertiary" size="small">Tertiary</Badge>
          <Badge variant="info" size="small">Info</Badge>
        </div>
      </div>

      <div>
        <h3 style={{ margin: "0 0 0.75rem 0", fontSize: "0.875rem", color: "#666" }}>Medium</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" size="medium">Primary</Badge>
          <Badge variant="secondary" size="medium">Secondary</Badge>
          <Badge variant="tertiary" size="medium">Tertiary</Badge>
          <Badge variant="info" size="medium">Info</Badge>
        </div>
      </div>

      <div>
        <h3 style={{ margin: "0 0 0.75rem 0", fontSize: "0.875rem", color: "#666" }}>Large</h3>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Badge variant="primary" size="large">Primary</Badge>
          <Badge variant="secondary" size="large">Secondary</Badge>
          <Badge variant="tertiary" size="large">Tertiary</Badge>
          <Badge variant="info" size="large">Info</Badge>
        </div>
      </div>
    </div>
  ),
};
