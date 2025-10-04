import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";
import { useTheme } from "styled-components";

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "0.75rem",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: value,
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        flexShrink: 0,
      }}
    />
    <div>
      <div
        style={{ fontWeight: "600", marginBottom: "0.25rem", color: "#000" }}
      >
        {name}
      </div>
      <div
        style={{ fontSize: "0.875rem", color: "#666", fontFamily: "monospace" }}
      >
        {value}
      </div>
    </div>
  </div>
);

const ColorSection = ({
  title,
  colors,
}: {
  title: string;
  colors: Array<{ name: string; value: string }>;
}) => (
  <div style={{ marginBottom: "2rem" }}>
    <h3
      style={{
        marginBottom: "1rem",
        fontSize: "1.25rem",
        fontWeight: "600",
        color: "#000",
      }}
    >
      {title}
    </h3>
    <div>
      {colors.map((color) => (
        <ColorSwatch key={color.name} name={color.name} value={color.value} />
      ))}
    </div>
  </div>
);

const ColorsDisplay = () => {
  const theme = useTheme();

  const brandColors = [
    { name: "Primary", value: theme.colors.palette.primary },
    { name: "Secondary", value: theme.colors.palette.secondary },
    { name: "Tertiary", value: theme.colors.palette.tertiary },
  ];

  const backgroundColors = [
    { name: "Background", value: theme.colors.palette.background },
    { name: "On Background", value: theme.colors.palette.onBackground },
  ];

  const surfaceColors = [
    { name: "Surface", value: theme.colors.palette.surface },
    { name: "Surface Variant", value: theme.colors.palette.surfaceVariant },
    { name: "Surface Container", value: theme.colors.palette.surfaceContainer },
    {
      name: "Surface Container High",
      value: theme.colors.palette.surfaceContainerHigh,
    },
    {
      name: "Surface Container Highest",
      value: theme.colors.palette.surfaceContainerHighest,
    },
  ];

  const contentColors = [
    { name: "On Primary", value: theme.colors.palette.onPrimary },
    { name: "On Secondary", value: theme.colors.palette.onSecondary },
    { name: "On Tertiary", value: theme.colors.palette.onTertiary },
    { name: "On Surface", value: theme.colors.palette.onSurface },
    {
      name: "On Surface Variant",
      value: theme.colors.palette.onSurfaceVariant,
    },
    {
      name: "On Surface Subdued",
      value: theme.colors.palette.onSurfaceSubdued,
    },
    {
      name: "On Surface Container",
      value: theme.colors.palette.onSurfaceContainer,
    },
    {
      name: "On Surface Container High",
      value: theme.colors.palette.onSurfaceContainerHigh,
    },
    {
      name: "On Surface Container Highest",
      value: theme.colors.palette.onSurfaceContainerHighest,
    },
  ];

  const semanticColors = [
    { name: "Success", value: theme.colors.palette.success },
    { name: "On Success", value: theme.colors.palette.onSuccess },
    { name: "Warning", value: theme.colors.palette.warning },
    { name: "On Warning", value: theme.colors.palette.onWarning },
    { name: "Error", value: theme.colors.palette.error },
    { name: "On Error", value: theme.colors.palette.onError },
    { name: "Info", value: theme.colors.palette.info },
    { name: "On Info", value: theme.colors.palette.onInfo },
  ];

  const utilityColors = [
    { name: "Outline", value: theme.colors.palette.outline },
    { name: "Outline Variant", value: theme.colors.palette.outlineVariant },
    { name: "Outline Dark", value: theme.colors.palette.outlineDark },
    {
      name: "Outline Dark Variant",
      value: theme.colors.palette.outlineDarkVariant,
    },
    { name: "Shadow", value: theme.colors.palette.shadow },
    { name: "Scrim", value: theme.colors.palette.scrim },
  ];

  const techBrandColors = [
    { name: "TypeScript", value: theme.colors.brandColors.typescript },
    { name: "JavaScript", value: theme.colors.brandColors.javascript },
    { name: "React", value: theme.colors.brandColors.react },
    { name: "CSS3", value: theme.colors.brandColors.css3 },
    { name: "HTML5", value: theme.colors.brandColors.html5 },
    {
      name: "Styled Components",
      value: theme.colors.brandColors.styledcomponents,
    },
    { name: "GraphQL", value: theme.colors.brandColors.graphql },
    { name: "Git", value: theme.colors.brandColors.git },
    { name: "Storybook", value: theme.colors.brandColors.storybook },
    { name: "Figma", value: theme.colors.brandColors.figma },
  ];

  const decorativePaletteColors = [
    ...theme.colors.decorativePalette.lightest.map((color, i) => ({
      name: `Lightest ${i + 1}`,
      value: color,
    })),
    ...theme.colors.decorativePalette.light.map((color, i) => ({
      name: `Light ${i + 1}`,
      value: color,
    })),
    ...theme.colors.decorativePalette.mediumLight.map((color, i) => ({
      name: `Medium Light ${i + 1}`,
      value: color,
    })),
    ...theme.colors.decorativePalette.medium.map((color, i) => ({
      name: `Medium ${i + 1}`,
      value: color,
    })),
    ...theme.colors.decorativePalette.mediumDark.map((color, i) => ({
      name: `Medium Dark ${i + 1}`,
      value: color,
    })),
    ...theme.colors.decorativePalette.dark.map((color, i) => ({
      name: `Dark ${i + 1}`,
      value: color,
    })),
    ...theme.colors.decorativePalette.darkest.map((color, i) => ({
      name: `Darkest ${i + 1}`,
      value: color,
    })),
  ];

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          marginBottom: "2rem",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#000",
        }}
      >
        Theme Colors
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
        <div style={{ flex: "1 1 350px", minWidth: "350px" }}>
          <ColorSection title="Brand Colors" colors={brandColors} />
          <ColorSection title="Background Colors" colors={backgroundColors} />
        </div>

        <div style={{ flex: "1 1 350px", minWidth: "350px" }}>
          <ColorSection title="Surface Colors" colors={surfaceColors} />
        </div>

        <div style={{ flex: "1 1 350px", minWidth: "350px" }}>
          <ColorSection title="Content Colors" colors={contentColors} />
        </div>

        <div style={{ flex: "1 1 350px", minWidth: "350px" }}>
          <ColorSection title="Semantic Colors" colors={semanticColors} />
        </div>

        <div style={{ flex: "1 1 350px", minWidth: "350px" }}>
          <ColorSection title="Utility Colors" colors={utilityColors} />
        </div>

        <div style={{ flex: "1 1 350px", minWidth: "350px" }}>
          <ColorSection
            title="Technology Brand Colors"
            colors={techBrandColors}
          />
        </div>

        <div style={{ flex: "1 1 100%", width: "100%" }}>
          <ColorSection
            title="Decorative Palette"
            colors={decorativePaletteColors}
          />
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Theme/Colors",
  parameters: {
    layout: "fullscreen",
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
type Story = StoryObj;

export const AllColors: Story = {
  render: () => <ColorsDisplay />,
};
