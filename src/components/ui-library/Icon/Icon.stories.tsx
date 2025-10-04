import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconName } from "./Icon";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const meta: Meta<typeof Icon> = {
  title: "UI Library/Icon",
  component: Icon,
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
    variant: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size variant",
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
  },
};

export const AllStyleVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Ghost</p>
        <Icon name="FaGithub" styleVariant="ghost" onClick={() => alert("Clicked!")} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Solid</p>
        <Icon name="FaGithub" styleVariant="solid" onClick={() => alert("Clicked!")} />
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Navigation</p>
        <Icon name="TbArrowBigRightFilled" styleVariant="navigation" onClick={() => alert("Clicked!")} />
      </div>
    </div>
  ),
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "1.5rem", maxWidth: "800px" }}>
        {iconNames.map((iconName) => (
          <div key={iconName} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <Icon name={iconName} />
            <span style={{ fontSize: "0.75rem", wordBreak: "break-word" }}>{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    name: "FaGithub",
    styleVariant: "ghost",
    disabled: true,
    onClick: () => alert("This should not fire!"),
  },
};
