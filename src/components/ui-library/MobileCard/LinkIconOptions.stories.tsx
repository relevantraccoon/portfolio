import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "styled-components";
import {
  TbArrowUpRight,
  TbChevronUpRight,
  TbArrowUpRightCircle,
  TbCornerRightUp,
  TbExternalLink,
  TbLink,
} from "react-icons/tb";
import { FiArrowUpRight, FiExternalLink, FiChevronRight } from "react-icons/fi";
import { HiArrowTopRightOnSquare, HiArrowUpRight } from "react-icons/hi2";
import { DefaultThemeProvider } from "@/styles/theme/ThemeProvider";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.palette.background};
  min-height: 100vh;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  border: 1px solid ${({ theme }) => theme.colors.palette.outline};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.palette.surface};
  color: ${({ theme }) => theme.colors.palette.onSurface};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 0.8rem;
  text-align: center;
`;

const IconBox = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.palette.onSurfaceSubdued};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Note = styled.div`
  opacity: 0.7;
`;

const candidates = [
  { name: "TbArrowUpRight", Icon: TbArrowUpRight, note: "thin diagonal (current)" },
  { name: "TbChevronUpRight", Icon: TbChevronUpRight, note: "chevron diagonal" },
  { name: "TbArrowUpRightCircle", Icon: TbArrowUpRightCircle, note: "in circle" },
  { name: "TbCornerRightUp", Icon: TbCornerRightUp, note: "corner bend" },
  { name: "TbExternalLink", Icon: TbExternalLink, note: "box + arrow" },
  { name: "TbLink", Icon: TbLink, note: "chain link" },
  { name: "FiArrowUpRight", Icon: FiArrowUpRight, note: "feather diagonal" },
  { name: "FiExternalLink", Icon: FiExternalLink, note: "feather box+arrow" },
  { name: "FiChevronRight", Icon: FiChevronRight, note: "chevron" },
  { name: "HiArrowTopRightOnSquare", Icon: HiArrowTopRightOnSquare, note: "heroicons external" },
  { name: "HiArrowUpRight", Icon: HiArrowUpRight, note: "heroicons diagonal" },
];

const meta: Meta = {
  title: "UI Library/MobileCard/Link Icon Options",
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

export const SideBySide: Story = {
  render: () => (
    <Grid>
      {candidates.map(({ name, Icon, note }) => (
        <Cell key={name}>
          <IconBox>
            <Icon />
          </IconBox>
          <Name>{name}</Name>
          <Note>{note}</Note>
        </Cell>
      ))}
    </Grid>
  ),
};
