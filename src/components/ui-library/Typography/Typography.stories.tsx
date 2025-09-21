import type { Meta, StoryObj } from "@storybook/react";
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
      options: ["display", "h1", "h2", "h3", "h4", "h5", "h6", "title", "subtitle", "body", "bodyLarge", "caption", "overline"],
      description: "Typography variant",
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "onBackground", "onPrimary", "onSecondary", "onSurface", "onTertiary", "inherit"],
      description: "Text color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    fontFamily: {
      control: { type: "select" },
      options: ["varela", "inter", "roboto", "sourceSans", "openSans", "lato", "montserrat"],
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

export const Default: Story = {
  args: {
    variant: "h2",
    color: "primary",
    align: "center",
    children: "Featured Projects",
  },
};

export const HeadingVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px" }}>
      <Typography variant="display" color="primary">Display Text</Typography>
      <Typography variant="h1" color="onBackground">Heading 1</Typography>
      <Typography variant="h2" color="onBackground">Heading 2</Typography>
      <Typography variant="h3" color="onBackground">Heading 3</Typography>
      <Typography variant="h4" color="onBackground">Heading 4</Typography>
      <Typography variant="h5" color="onBackground">Heading 5</Typography>
      <Typography variant="h6" color="onBackground">Heading 6</Typography>
      <Typography variant="title" color="primary">Title (Legacy)</Typography>
      <Typography variant="subtitle" color="onBackground">Subtitle (Legacy)</Typography>
      <Typography variant="bodyLarge" color="onBackground">Body Large Text</Typography>
      <Typography variant="body" color="onBackground">Body Text</Typography>
      <Typography variant="caption" color="onBackground">Caption Text</Typography>
      <Typography variant="overline" color="secondary">Overline Text</Typography>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px", padding: "2rem", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h3" color="primary">Primary Color</Typography>
      <Typography variant="h3" color="secondary">Secondary Color</Typography>
      <Typography variant="h3" color="onBackground">On Background</Typography>
      <div style={{ padding: "1rem", backgroundColor: "#2196F3", borderRadius: "8px" }}>
        <Typography variant="h3" color="onPrimary">On Primary (on blue bg)</Typography>
      </div>
      <div style={{ padding: "1rem", backgroundColor: "#FF9800", borderRadius: "8px" }}>
        <Typography variant="h3" color="onSecondary">On Secondary (on orange bg)</Typography>
      </div>
    </div>
  ),
};

export const AlignmentVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "600px" }}>
      <Typography variant="h3" align="left">Left Aligned Text</Typography>
      <Typography variant="h3" align="center">Center Aligned Text</Typography>
      <Typography variant="h3" align="right">Right Aligned Text</Typography>
      <Typography variant="body" align="justify">
        Justified text automatically adjusts spacing between words to create clean, even margins on both sides. 
        This creates a more formal, structured appearance that's often used in professional documents and publications.
      </Typography>
    </div>
  ),
};

export const TitleFontComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "800px" }}>
      <div style={{ textAlign: "center", padding: "1rem", background: "#f5f5f5", borderRadius: "8px" }}>
        <h3 style={{ margin: 0 }}>Font Comparison for Title</h3>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#666" }}>
          "Tech Support → Frontend Developer" - Finding a less 'round' alternative to Varela Round
        </p>
      </div>
      
      <div style={{ display: "grid", gap: "1.5rem" }}>
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Current: Varela Round</h4>
          <Typography variant="title" fontFamily="varela">
            Tech Support → Frontend Developer
          </Typography>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Inter (geometric, clean)</h4>
          <Typography variant="title" fontFamily="inter">
            Tech Support → Frontend Developer
          </Typography>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Roboto (slightly geometric)</h4>
          <Typography variant="title" fontFamily="roboto">
            Tech Support → Frontend Developer
          </Typography>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Source Sans Pro (clean, readable)</h4>
          <Typography variant="title" fontFamily="sourceSans">
            Tech Support → Frontend Developer
          </Typography>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Open Sans (neutral, clean)</h4>
          <Typography variant="title" fontFamily="openSans">
            Tech Support → Frontend Developer
          </Typography>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Lato (humanist, less geometric)</h4>
          <Typography variant="title" fontFamily="lato">
            Tech Support → Frontend Developer
          </Typography>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Montserrat (modern, clean)</h4>
          <Typography variant="title" fontFamily="montserrat">
            Tech Support → Frontend Developer
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const SVGTextComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "800px" }}>
      <div style={{ textAlign: "center", padding: "1rem", background: "#f5f5f5", borderRadius: "8px" }}>
        <h3 style={{ margin: 0 }}>SVG Text Styling Comparison</h3>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#666" }}>
          "Frontend Developer" - Testing straighter fonts and letter spacing for the SVG subtitle
        </p>
      </div>
      
      <div style={{ display: "grid", gap: "1.5rem" }}>
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Current: Caveat Brush (display font)</h4>
          <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}>
            Frontend Developer
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Varela Round + Letter Spacing</h4>
          <div style={{ fontFamily: "'Varela Round', sans-serif", fontSize: "1.5rem", textAlign: "center", letterSpacing: "0.15em" }}>
            Frontend Developer
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Inter + Letter Spacing</h4>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.5rem", textAlign: "center", letterSpacing: "0.15em" }}>
            Frontend Developer
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Roboto + Letter Spacing</h4>
          <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.5rem", textAlign: "center", letterSpacing: "0.15em" }}>
            Frontend Developer
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Montserrat + Letter Spacing</h4>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", textAlign: "center", letterSpacing: "0.15em" }}>
            Frontend Developer
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.9rem", color: "#666" }}>Source Sans Pro + Wide Letter Spacing</h4>
          <div style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: "1.5rem", textAlign: "center", letterSpacing: "0.2em" }}>
            Frontend Developer
          </div>
        </div>
      </div>
    </div>
  ),
};