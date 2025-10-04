import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const AboutMeContainer = styled.section<{ $backgroundColor?: string }>`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.viewport.sections.content.mobile};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.colors.palette.secondary};
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.sections.normal};

  ${mediaQuery.from("tablet")} {
    min-height: ${({ theme }) => theme.layout.viewport.sections.content.tablet};
  }

  ${mediaQuery.from("desktop")} {
    min-height: ${({ theme }) =>
      theme.layout.viewport.sections.content.desktop};
  }

  ${mediaQuery.from("fhd")} {
    min-height: ${({ theme }) => theme.layout.viewport.sections.content.fhd};
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  ${mediaQuery.from("desktopLarge")} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxxxxxl};
    position: relative;
  }
`;

export const VerticalDivider = styled.div`
  display: none;

  ${mediaQuery.from("desktopLarge")} {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    border-left: 5px dotted rgba(89, 61, 54, 0.08);
    transform: translateX(-50%);
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.palette.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: 100%;

  ${mediaQuery.from("tablet")} {
    justify-content: center;
  }
`;

export const SkillsMainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.palette.onSecondary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  text-shadow: ${({ theme }) => theme.textShadow.light};
`;

export const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SkillCategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.palette.onSecondary};
  margin: 0;
  text-shadow: ${({ theme }) => theme.textShadow.light};
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ theme }) => theme.controls.skillItem.minWidth}, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  justify-items: start;
  max-width: calc(${({ theme }) => theme.controls.skillItem.minWidth} * 2 + ${({ theme }) => theme.spacing.lg});

  ${mediaQuery.from("tablet")} {
    max-width: calc(${({ theme }) => theme.controls.skillItem.minWidth} * 3 + ${({ theme }) => theme.spacing.lg} * 2);
  }

  ${mediaQuery.from("desktop")} {
    max-width: calc(${({ theme }) => theme.controls.skillItem.minWidth} * 2 + ${({ theme }) => theme.spacing.lg});
  }

  ${mediaQuery.from("widescreen")} {
    max-width: calc(${({ theme }) => theme.controls.skillItem.minWidth} * 3 + ${({ theme }) => theme.spacing.lg} * 2);
  }
`;

export const SkillItem = styled.span`
  padding: ${({ theme }) => theme.spacing.md} 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.palette.onSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: ${({ theme }) => theme.controls.skillItem.minHeight};
  transition: all ${({ theme }) => theme.layout.animation.speed.smooth}
    ${({ theme }) => theme.layout.animation.easing.ease};
  text-shadow: ${({ theme }) => theme.textShadow.light};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  letter-spacing: 0.01em;

  &:hover {
    border-color: ${({ theme }) => theme.colors.palette.outlineDarkVariant};
  }
`;

export const SkillIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.controls.icon.size};
  transition: color ${({ theme }) => theme.layout.animation.speed.smooth}
    ${({ theme }) => theme.layout.animation.easing.ease};

  svg {
    width: ${({ theme }) => theme.controls.icon.size};
    height: ${({ theme }) => theme.controls.icon.size};
    display: block;
  }

  /* Brand colors on hover */
  ${SkillItem}[data-tech="typescript"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.typescript};
  }
  ${SkillItem}[data-tech="javascript"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.javascript};
  }
  ${SkillItem}[data-tech="react"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.react};
  }
  ${SkillItem}[data-tech="css3"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.css3};
  }
  ${SkillItem}[data-tech="html5"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.html5};
  }
  ${SkillItem}[data-tech="styledcomponents"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.styledcomponents};
  }
  ${SkillItem}[data-tech="graphql"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.graphql};
  }
  ${SkillItem}[data-tech="git"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.git};
  }
  ${SkillItem}[data-tech="figma"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.figma};
  }
  ${SkillItem}[data-tech="storybook"]:hover & {
    color: ${({ theme }) => theme.colors.brandColors.storybook};
  }
`;
