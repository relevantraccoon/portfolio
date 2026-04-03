import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileCard } from "@/components/ui-library/MobileCard/MobileCard";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import plixitImg from "@/assets/images/projects/plixit.png";
import portfolioImg from "@/assets/images/projects/portfolio.png";

const meta: Meta<typeof MobileCard> = {
  title: "UI Library/MobileCard",
  component: MobileCard,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        component:
          "Mobile project card. Image on top, content below with title, status, badges and description.",
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

export const Plixit: Story = {
  args: {
    title: "Plixit",
    status: "Live \u2022 Active Development \u2022 2026",
    description:
      "Multiplayer territory game built on a custom game engine (Kubic Kode). Real-time sync over WebSockets. Self-hosted Docker stack with Grafana/Loki monitoring, in-game playtesting pipeline, and a structured ship process.",
    projectType: "Multiplayer Game",
    techStack: ["React", "TypeScript", "Node.js", "Docker", "Grafana"],
    thumbnail: plixitImg,
  },
};

export const Portfolio: Story = {
  args: {
    title: "Portfolio",
    status: "Live - 2025",
    description:
      "Portfolio containing custom project carousel, unified theme system, fully responsive design.",
    projectType: "Portfolio",
    techStack: ["React", "TypeScript", "Styled Components"],
    thumbnail: portfolioImg,
  },
};
