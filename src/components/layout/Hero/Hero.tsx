import React from "react";
import { useTheme } from "styled-components";
import { HeroAnimatedBackground } from "@/components/layout/Hero/HeroAnimatedBackground";
import j4 from "@/assets/images/hero/j_4.png";
import type { DefaultThemeProps } from "@/styles/theme/defaultTheme";
import {
  AnimationWrapper,
  CanvasContainer,
  ContentSection,
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextSVG,
  OverlayImage,
  TextContent,
} from "@/components/layout/Hero/styles";
import { Button } from "@/components/ui-library/Button";
import { Typography } from "@/components/ui-library/Typography";
import { SVGLayeredText } from "@/components/layout/Hero/SVGLayeredText";
import { Content } from "@/components/layout/Content";

export type HeroProps = {
  shouldAnimate?: boolean;
  showOverlayImage?: boolean;
  svgName?: string;
  svgSubtitle?: string;
  svgSubtitleLetterSpacing?: number;
  svgSubtitleFontFamily?: string;
  svgSubtitleFontSize?: number;
  title?: string;
  titleFontFamily?: string;
  titleFontSize?: number;
  titleLetterSpacing?: number;
  subtitle?: string;
  ctaText?: string;
  profileImageUrl?: string;
  onCTAClick?: () => void;
};

export const Hero: React.FC<HeroProps> = ({
  shouldAnimate = true,
  showOverlayImage = true,
  svgName = "Joakim Karlsson",
  svgSubtitle = "Frontend Developer",
  svgSubtitleLetterSpacing = 0.25,
  svgSubtitleFontFamily = "default",
  svgSubtitleFontSize = 20,
  title = "Tech Support → Frontend Developer",
  titleFontSize = 24,
  titleLetterSpacing = 0.1,
  subtitle = "I've seen what breaks, now I build what works",
  ctaText = "Reach out",
  profileImageUrl = j4,
  onCTAClick,
}) => {
  const theme = useTheme() as DefaultThemeProps;

  return (
    <HeroContainer>
      <AnimationWrapper>
        <CanvasContainer>
          <HeroAnimatedBackground
            shouldAnimate={shouldAnimate}
            profileImageUrl={profileImageUrl}
            colorOpacity={100}
            bubbleCount={280}
            coinFlipVelocity={6}
            coinFlipDuration={1300}
            flipWaveSpeed={2.2}
            flipTimingRandomness={10}
            maxRevolutions={4}
            pulseSpeed={1}
            pulseIntensity={0}
            animationSpeed={1}
            enableCoinFlip={true}
            coinFlipAxis="x"
          />
        </CanvasContainer>

        <HeroTextContainer>
          <HeroTextSVG
            viewBox={theme.layout.components.hero.svg.viewBox}
            preserveAspectRatio="xMidYMid meet"
          >
            <SVGLayeredText
              text={svgName}
              x={theme.layout.components.hero.svg.centerX}
              y={theme.layout.components.hero.svg.text.primary.y}
              fontSize={parseInt(theme.fontSize.display)}
            />
            <SVGLayeredText
              text={svgSubtitle}
              x={theme.layout.components.hero.svg.centerX}
              y={theme.layout.components.hero.svg.text.secondary.y}
              fontSize={
                svgSubtitleFontSize || parseInt(theme.fontSize.displaySub)
              }
              letterSpacing={`${svgSubtitleLetterSpacing}em`}
              fontFamily={svgSubtitleFontFamily}
              isSubtitle={true}
            />
          </HeroTextSVG>
        </HeroTextContainer>

        {showOverlayImage && (
          <HeroImageContainer>
            <OverlayImage src={profileImageUrl} alt="Profile" />
          </HeroImageContainer>
        )}
      </AnimationWrapper>

      <ContentSection>
        <Content type="text">
          <TextContent>
            <Typography
              variant="h1"
              color="primary"
              align="center"
              fontFamily="roboto"
              style={{
                fontSize: `${titleFontSize}px`,
                letterSpacing: `${titleLetterSpacing}em`,
                WebkitFontSmoothing: "antialiased",
                marginBottom: "0.5rem",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body"
              color="onBackground"
              align="center"
              style={{
                opacity: 0.8,
                marginBottom: "1rem",
              }}
            >
              {subtitle}
            </Typography>

            <Button variant="primary" onClick={onCTAClick}>
              {ctaText}
            </Button>
          </TextContent>
        </Content>
      </ContentSection>
    </HeroContainer>
  );
};
