import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { Link } from "@/components/ui-library/Link/Link";

const meta: Meta<typeof Link> = {
  title: "UI Library/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#1E1412",
            color: "#D9B0A7",
          }}
        >
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "subtle", "bold", "button"],
      description: "Visual style of the link",
    },
    effect: {
      control: { type: "select" },
      options: ["none", "spark"],
      description: "Hover effect animation",
    },
    external: {
      control: { type: "boolean" },
      description: "Opens in new tab if true",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// Basic Variants
export const Default: Story = {
  args: {
    href: "#",
    children: "Default Link",
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    href: "#",
    variant: "default",
    effect: "spark",
    children: "Interactive Link",
  },
};

// Showcase All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <h3 style={{ color: "#BF5D54", marginBottom: "1rem" }}>Variants</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <Link href="#" variant="default">
            Default
          </Link>
          <Link href="#" variant="subtle">
            Subtle
          </Link>
          <Link href="#" variant="bold">
            Bold
          </Link>
          <Link href="#" variant="button">
            Button
          </Link>
        </div>
      </div>

      <div>
        <h3 style={{ color: "#BF5D54", marginBottom: "1rem" }}>Effects</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <Link href="#" effect="none">
            No Effect
          </Link>
          <Link href="#" effect="spark">
            Spark Effect
          </Link>
        </div>
      </div>

      <div>
        <h3 style={{ color: "#BF5D54", marginBottom: "1rem" }}>Combinations</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <Link href="#" variant="bold" effect="spark">
            Bold + Spark
          </Link>
          <Link href="#" variant="subtle" effect="spark">
            Subtle + Spark
          </Link>
          <Link href="#" variant="default" effect="spark">
            Default + Spark
          </Link>
        </div>
      </div>

      <div>
        <h3 style={{ color: "#BF5D54", marginBottom: "1rem" }}>
          Special Cases
        </h3>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link href="mailto:hello@example.com" effect="spark">
            hello@example.com
          </Link>
          <Link href="https://example.com" external effect="spark">
            External Link
          </Link>
          <Link href="#" disabled>
            Disabled Link
          </Link>
        </div>
      </div>
    </div>
  ),
};
