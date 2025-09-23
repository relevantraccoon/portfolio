import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "@/components/layout/Hero/Hero";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { useTheme } from "styled-components";

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
    svgSubtitle: {
      control: { type: "text" },
      description: "Subtitle in the SVG section",
    },
    svgSubtitleLetterSpacing: {
      control: { 
        type: "range",
        min: 0,
        max: 0.5,
        step: 0.05
      },
      description: "Letter spacing for SVG subtitle (in em units)",
    },
    svgSubtitleFontFamily: {
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
      description: "Font family for SVG subtitle",
    },
    svgSubtitleFontSize: {
      control: { 
        type: "range",
        min: 20,
        max: 60,
        step: 2
      },
      description: "Font size for SVG subtitle (in px)",
    },
    title: {
      control: { type: "text" },
      description: "Main title below animation",
    },
    titleFontFamily: {
      control: { type: "select" },
      options: [
        "default",
        "'Inter', sans-serif",
        "'Roboto', sans-serif", 
        "'Source Sans Pro', sans-serif",
        "'Montserrat', sans-serif",
        "'Poppins', sans-serif",
        "'Work Sans', sans-serif",
        "'Fira Sans', sans-serif",
        "'IBM Plex Sans', sans-serif",
        "'Rubik', sans-serif",
        "'Nunito', sans-serif"
      ],
      description: "Font family for main title",
    },
    titleFontSize: {
      control: { 
        type: "range",
        min: 24,
        max: 72,
        step: 2
      },
      description: "Font size for main title (in px)",
    },
    titleLetterSpacing: {
      control: { 
        type: "range",
        min: 0,
        max: 0.5,
        step: 0.05
      },
      description: "Letter spacing for main title (in em units)",
    },
    subtitle: {
      control: { type: "text" },
      description: "Subtitle below title",
    },
    techStack: {
      control: { type: "object" },
      description: "Array of technology strings",
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
    svgSubtitle: "Frontend Developer",
    svgSubtitleLetterSpacing: 0.25,
    svgSubtitleFontFamily: "default",
    svgSubtitleFontSize: 20,
    title: "Tech Support → Frontend Developer",
    titleFontFamily: "'Roboto', sans-serif",
    titleFontSize: 24,
    titleLetterSpacing: 0.1,
    subtitle: "I've seen what breaks, now I build what works",
    techStack: ["TypeScript", "React", "GraphQL", "CSS/HTML", "Styled Components"],
    ctaText: "Get In Touch",
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
          "The current hero section with updated content and styling.",
      },
    },
  },
};


