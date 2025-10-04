import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconName } from "./Icon";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const meta: Meta<typeof Icon> = {
  title: "UI Library/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "white",
      values: [
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <DefaultThemeProvider>
        <div style={{ padding: "2rem", backgroundColor: "#FFFFFF" }}>
          <Story />
        </div>
      </DefaultThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "FaLinkedin",
        "FaGithub",
        "FaFilePdf",
        "FaCopy",
        "SiStrava",
        "SiTypescript",
        "SiJavascript",
        "SiCss3",
        "SiHtml5",
        "SiStyledcomponents",
        "SiGraphql",
        "SiGit",
        "SiFigma",
        "SiReact",
        "SiStorybook",
        "TbArrowBigLeftFilled",
        "TbArrowBigRightFilled",
      ],
      description: "Icon name from the registry",
    },
    styleVariant: {
      control: { type: "select" },
      options: ["ghost", "solid", "navigation"],
      description: "Visual style of the icon",
    },
    color: {
      control: { type: "color" },
      description: "Icon color (overrides theme default)",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "FaGithub",
    color: "#000000",
  },
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
};

export const AllIcons: Story = {
  render: () => {
    const iconNames: IconName[] = [
      "FaLinkedin",
      "FaGithub",
      "FaFilePdf",
      "FaCopy",
      "SiStrava",
      "SiTypescript",
      "SiJavascript",
      "SiCss3",
      "SiHtml5",
      "SiStyledcomponents",
      "SiGraphql",
      "SiGit",
      "SiFigma",
      "SiReact",
      "SiStorybook",
      "TbArrowBigLeftFilled",
      "TbArrowBigRightFilled",
    ];

    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "1.5rem", maxWidth: "800px", backgroundColor: "#FFFFFF", padding: "2rem" }}>
        {iconNames.map((iconName) => (
          <div key={iconName} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <Icon name={iconName} color="#000000" />
            <span style={{ fontSize: "0.75rem", wordBreak: "break-word", color: "#000000" }}>{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
};
