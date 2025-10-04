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
      <>
        I'm the <strong>sole</strong> technical support at a startup, and I'm
        working on <strong>crossing over to the development side</strong>.
        Between handling user tickets,{" "}
        <strong>I'm shipping real frontend features</strong> - turning Figma
        designs into type-safe React components and wiring them up to a GraphQL
        backend.
      </>,
      <>
        Me working at <strong>Collegial</strong>, a company driving
        transformation through learning, isn't a coincidence. I thrive on
        acquiring new knowledge - and I'm selective:{" "}
        <strong>
          learn the right things, and then apply them for maximum impact
        </strong>
        .
      </>,
      <>
        Having been embedded in a product & tech team for years, I'm completely
        at home with the agile rhythm — sprints, standups, retros, and the
        controlled chaos that comes with the territory.
      </>,
      <>
        This year, I've been entrusted with stepping up as{" "}
        <strong>internal audit lead for our ISO 27001 ISMS</strong>. Having been
        on the internal audit team for a couple of years, I know my way around
        risk assessments, control objectives, and compliance — another lens into
        how companies scale.
      </>,
      <>
        Away from the keyboard, I'm passionate about long distance running
        (2-time marathon finisher, working on 10k speed). At home, it's all
        about my fiancée and our cats.
      </>,
    ],
  },
};
