import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { Contact } from "@/components/sections/Contact/Contact";

const meta: Meta<typeof Contact> = {
  title: "Components/Sections/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div style={{ minHeight: "100vh", backgroundColor: "#1E1412" }}>
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  argTypes: {
    email: {
      control: { type: "text" },
      description: "Email address",
    },
    linkedinUrl: {
      control: { type: "text" },
      description: "LinkedIn profile URL",
    },
    githubUrl: {
      control: { type: "text" },
      description: "GitHub profile URL",
    },
    stravaUrl: {
      control: { type: "text" },
      description: "Strava profile URL",
    },
    cvUrl: {
      control: { type: "text" },
      description: "CV download URL",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {
    email: "joakim.karlsson@example.com",
    linkedinUrl: "https://linkedin.com/in/joakimkarlsson",
    githubUrl: "https://github.com/joakimkarlsson",
    stravaUrl: "https://strava.com/athletes/joakimkarlsson",
    cvUrl: "/cv/joakim-karlsson-cv.pdf",
  },
};
