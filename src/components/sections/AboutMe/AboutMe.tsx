import React from "react";
import { Content } from "@/components/layout/Content";
import { Typography } from "@/components/ui-library/Typography";
import {
  AboutMeContainer,
  AboutGrid,
  AboutContent,
  VerticalDivider,
  SkillsContainer,
  SkillCategory,
  SkillCategoryTitle,
  SkillsList,
  SkillItem,
  SkillIconWrapper,
} from "@/components/sections/AboutMe/styles";
import {
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiStyledcomponents,
  SiGraphql,
  SiGit,
  SiFigma,
  SiReact,
  SiStorybook,
} from "react-icons/si";

const TECHNOLOGIES = [
  { id: "typescript", icon: SiTypescript, label: "TypeScript" },
  { id: "react", icon: SiReact, label: "React" },
  { id: "css3", icon: SiCss3, label: "CSS" },
  { id: "html5", icon: SiHtml5, label: "HTML" },
  { id: "styledcomponents", icon: SiStyledcomponents, label: "Styled Components" },
  { id: "graphql", icon: SiGraphql, label: "GraphQL" },
] as const;

const TOOLS = [
  { id: "git", icon: SiGit, label: "Git" },
  { id: "figma", icon: SiFigma, label: "Figma" },
  { id: "storybook", icon: SiStorybook, label: "Storybook" },
] as const;

export type AboutMeProps = {
  description: React.ReactNode[];
};

export const AboutMe: React.FC<AboutMeProps> = ({ description }) => {
  return (
    <AboutMeContainer>
      <Content type="grid" verticalPadding={true}>
        <AboutGrid>
          <VerticalDivider />
          <AboutContent>
            {description.map((paragraph, index) => (
              <Typography key={index} variant="body" color="onSecondary">
                {paragraph}
              </Typography>
            ))}
          </AboutContent>
          <SkillsContainer>
            <SkillCategory>
              <SkillCategoryTitle>
                Some of the technologies I use:
              </SkillCategoryTitle>
              <SkillsList>
                {TECHNOLOGIES.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <SkillItem key={tech.id} data-tech={tech.id}>
                      <SkillIconWrapper>
                        <Icon />
                      </SkillIconWrapper>
                      {tech.label}
                    </SkillItem>
                  );
                })}
              </SkillsList>
            </SkillCategory>
            <SkillCategory>
              <SkillCategoryTitle>
                ...and a couple of the tools:
              </SkillCategoryTitle>
              <SkillsList>
                {TOOLS.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <SkillItem key={tool.id} data-tech={tool.id}>
                      <SkillIconWrapper>
                        <Icon />
                      </SkillIconWrapper>
                      {tool.label}
                    </SkillItem>
                  );
                })}
              </SkillsList>
            </SkillCategory>
          </SkillsContainer>
        </AboutGrid>
      </Content>
    </AboutMeContainer>
  );
};
