import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "@/components/layout/Hero/Hero";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import j4 from "@/assets/images/hero/j_4.png";

const meta: Meta<typeof Hero> = {
  title: "Components/Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Hero section with animated background, name display, profile image, and content section.",
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
    name: {
      control: { type: "text" },
      description: "Name to display in the hero",
    },
    subtitle: {
      control: { type: "text" },
      description: "Subtitle text",
    },
    subtitleLetterSpacing: {
      control: {
        type: "range",
        min: 0,
        max: 0.5,
        step: 0.05
      },
      description: "Letter spacing for subtitle (in em units)",
    },
    subtitleFontFamily: {
      control: { type: "select" },
      options: [
        "default",
        "Monaco, monospace",
        "Times, serif",
        "Helvetica, sans-serif",
        "'Inter', sans-serif",
        "'Roboto', sans-serif",
        "'Source Sans Pro', sans-serif",
        "'Montserrat', sans-serif"
      ],
      description: "Font family for subtitle",
    },
    subtitleFontSize: {
      control: {
        type: "range",
        min: 20,
        max: 60,
        step: 2
      },
      description: "Font size for subtitle (in px)",
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
    name: "Joakim Karlsson",
    subtitle: "Tech Support → Frontend Developer",
    subtitleLetterSpacing: 0.25,
    subtitleFontFamily: "default",
    subtitleFontSize: 20,
    profileImageUrl: j4,
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
          "The current hero section with updated content and styling.",
      },
    },
  },
};


