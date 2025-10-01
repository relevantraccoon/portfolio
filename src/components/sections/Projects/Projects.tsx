import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Content } from "@/components/layout/Content";
import { Card } from "@/components/ui-library/Card";
import { NavButton } from "@/components/ui-library/Button";
import { Typography } from "@/components/ui-library/Typography";
import {
  ProjectsContainer,
  ProjectsContentWrapper,
  CarouselContainer,
  CardStack,
  CarouselCard,
  NavigationContainer,
} from "@/components/sections/Projects/styles";
import { ProjectData } from "@/components/sections/Projects/index";

export type ProjectsProps = {
  projects?: ProjectData[];
  title?: string;
};

export const Projects: React.FC<ProjectsProps> = ({
  projects = [],
  title = "Featured Projects",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  if (projects.length === 0) return null;

  const shouldDisplayNavButtons = projects.length > 1;
  const shouldUsePluralTitle = projects.length > 1;
  const displayTitle = shouldUsePluralTitle ? title : title.replace("Projects", "Project");

  const getCardPosition = (
    index: number
  ): "left" | "active" | "right" | "hidden" => {
    const leftIndex = (activeIndex - 1 + projects.length) % projects.length;
    const rightIndex = (activeIndex + 1) % projects.length;

    if (index === activeIndex) return "active";
    if (index === leftIndex) return "left";
    if (index === rightIndex) return "right";
    return "hidden";
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <ProjectsContainer>
      <Content type="grid" verticalPadding={true}>
        <ProjectsContentWrapper>
          <Typography
            variant="h1"
            color="onBackground"
            align="center"
            fontFamily="roboto"
            style={{
              marginBottom: theme.spacing.xxl,
              letterSpacing: theme.letterSpacing.wide,
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {displayTitle}
          </Typography>
          <CarouselContainer>
            <CardStack>
              {projects.map((project, index) => {
                const position = getCardPosition(index);

                return (
                  <CarouselCard
                    key={project.id}
                    $position={position}
                    aria-hidden={position !== "active"}
                    tabIndex={position !== "active" ? -1 : undefined}
                  >
                    <Card
                      title={project.title}
                      subtitle={project.status}
                      badges={[project.projectType, ...project.techStack]}
                      hoverable={position === "active"}
                      backgroundImage={project.thumbnail}
                      variant="responsive"
                      href={position === "active" ? project.href : undefined}
                    >
                      {project.description}
                    </Card>
                  </CarouselCard>
                );
              })}
            </CardStack>
          </CarouselContainer>

          {shouldDisplayNavButtons && (
            <NavigationContainer>
              <NavButton
                direction="left"
                onClick={handlePrev}
              />

              <NavButton
                direction="right"
                onClick={handleNext}
              />
            </NavigationContainer>
          )}
        </ProjectsContentWrapper>
      </Content>
    </ProjectsContainer>
  );
};
