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
        component: "About Me section with description and skills showcase.",
      },
    },
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <Story />
      </DefaultThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: [
      "I'm a frontend developer who understands users because I've solved their problems directly in tech support. Good interfaces work for real people under pressure.",
      "As an internal audit team leader, I learned to think like an owner. I approach development the same way: understanding how my code serves both users and business objectives.",
      "I build with TypeScript, React, and Styled Components. Whether debugging workflows or grinding through long runs, I solve problems systematically.",
      "I value learning forever - constantly building new skills and understanding.",
    ],
  },
};