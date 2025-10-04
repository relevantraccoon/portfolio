import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "UI Library/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "title",
        "subtitle",
        "body",
        "bodyLarge",
        "caption",
        "overline",
      ],
      description: "Typography variant",
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "onBackground",
        "onPrimary",
        "onSecondary",
        "onSurface",
        "onTertiary",
        "inherit",
      ],
      description: "Text color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    fontFamily: {
      control: { type: "select" },
      options: [
        "varela",
        "inter",
        "roboto",
        "sourceSans",
        "openSans",
        "lato",
        "montserrat",
      ],
      description: "Font family to use",
    },
    children: {
      control: { type: "text" },
      description: "Text content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "800px",
      }}
    >
      <Typography variant="display" color="primary">
        Display Text
      </Typography>
      <Typography variant="h1" color="onBackground">
        Heading 1
      </Typography>
      <Typography variant="h2" color="onBackground">
        Heading 2
      </Typography>
      <Typography variant="h3" color="onBackground">
        Heading 3
      </Typography>
      <Typography variant="h4" color="onBackground">
        Heading 4
      </Typography>
      <Typography variant="h5" color="onBackground">
        Heading 5
      </Typography>
      <Typography variant="h6" color="onBackground">
        Heading 6
      </Typography>
      <Typography variant="bodyLarge" color="onBackground">
        Body Large Text
      </Typography>
      <Typography variant="body" color="onBackground">
        Body Text
      </Typography>
      <Typography variant="caption" color="onBackground">
        Caption Text
      </Typography>
      <Typography variant="overline" color="secondary">
        Overline Text
      </Typography>
    </div>
  ),
};
