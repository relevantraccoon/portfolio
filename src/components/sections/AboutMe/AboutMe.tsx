import React from "react";
import { Content } from "@/components/layout/Content";
import { Typography } from "@/components/ui-library/Typography";
import {
  AboutMeContainer,
  AboutGrid,
  AboutContent,
  AboutVideo,
} from "@/components/sections/AboutMe/styles";

export type AboutMeProps = {
  description?: string[];
};

const VIDEO_URL = "/Web_Development_Solutions_Video_Creation.mp4";

export const AboutMe: React.FC<AboutMeProps> = ({
  description = [
    "I'm a frontend developer who understands users because I've solved their problems directly in tech support. Good interfaces work for real people under pressure.",
    "As an internal audit team leader, I learned to think like an owner. I approach development the same way: understanding how my code serves both users and business objectives.",
    "I build with TypeScript, React, and Styled Components. Whether debugging workflows or grinding through long runs, I solve problems systematically.",
  ],
}) => {
  return (
    <AboutMeContainer>
      <Content type="grid">
        <AboutGrid>
            <AboutContent>
              {description.map((paragraph, index) => (
                <Typography 
                  key={index} 
                  variant="bodyLarge" 
                  color="onSecondary"
                >
                  {paragraph}
                </Typography>
              ))}
            </AboutContent>
            <AboutVideo muted autoPlay loop playsInline>
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </AboutVideo>
        </AboutGrid>
      </Content>
    </AboutMeContainer>
  );
};
