import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutMe } from "@/components/sections/AboutMe/AboutMe";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const meta: Meta<typeof AboutMe> = {
  title: "Components/Sections/AboutMe",
  component: AboutMe,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "About Me section with description and video.",
      },
    },
  },
  argTypes: {
    description: {
      control: { type: "object" },
      description: "Array of description paragraphs",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
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
        story: "AboutMe section with video on the right side and light background.",
      },
    },
  },
};