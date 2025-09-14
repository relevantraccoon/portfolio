import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "@/components/layout/Hero/Hero";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const meta: Meta<typeof Hero> = {
  title: "Components/Layout/Hero/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete hero section with animated background, name display, profile image, and content section. Fully ported from v12.",
      },
    },
  },
  argTypes: {
    shouldAnimate: {
      control: { type: "boolean" },
      description: "Start/stop the bubble animation",
    },
    showOverlayImage: {
      control: { type: "boolean" },
      description: "Show/hide the profile image",
    },
    svgName: {
      control: { type: "text" },
      description: "Name to display in the hero SVG",
    },
    subtitle: {
      control: { type: "text" },
      description: "Subtitle text below the hero",
    },
    description: {
      control: { type: "text" },
      description: "Description text",
    },
    ctaText: {
      control: { type: "text" },
      description: "Call-to-action button text",
    },
    profileImageUrl: {
      control: { type: "text" },
      description: "URL for the profile image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shouldAnimate: true,
    showOverlayImage: true,
    svgName: "Joakim Karlsson",
    subtitle: "Reskilling Journey to Frontend Engineer",
    description: "React • TypeScript • Styled Components • Storybook",
    ctaText: "Reach out",
    profileImageUrl: "/src/assets/images/hero/j_4.png",
    onCTAClick: () => alert("CTA clicked!"),
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
          "The real hero page with image-extracted colors and animated background.",
      },
    },
  },
};
