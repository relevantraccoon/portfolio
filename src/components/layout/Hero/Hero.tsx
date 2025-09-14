import React from "react";
import { useTheme } from "styled-components";
import { HeroAnimatedBackground } from "@/components/layout/Hero/HeroAnimatedBackground";
import j4 from "@/assets/images/hero/j_4.png";
import type { DefaultThemeProps } from "@/styles/theme/defaultTheme";
import {
  AnimationWrapper,
  CanvasContainer,
  ContentSection,
  CTAButton,
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextSVG,
  OverlayImage,
  Paragraph,
  Subtitle,
  TextContent,
} from "@/components/layout/Hero/styles";
import { SVGLayeredText } from "@/components/layout/Hero/SVGLayeredText";
import { Content } from "@/components/layout/Content";

export type HeroProps = {
  shouldAnimate?: boolean;
  showOverlayImage?: boolean;
  svgName?: string;
  svgSubtitle?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  profileImageUrl?: string;
  onCTAClick?: () => void;
};

export const Hero: React.FC<HeroProps> = ({
  shouldAnimate = true,
  showOverlayImage = true,
  svgName = "Joakim Karlsson",
  svgSubtitle = "Frontend Developer",
  subtitle = "Reskilling Journey to Frontend Engineer",
  description = "React • TypeScript • Styled Components • Storybook",
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
            bubbleCount={147}
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
              fontSize={parseInt(theme.fontSize.displaySub)}
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
            <Subtitle>{subtitle}</Subtitle>
            <Paragraph>{description}</Paragraph>
            <CTAButton onClick={onCTAClick}>{ctaText}</CTAButton>
          </TextContent>
        </Content>
      </ContentSection>
    </HeroContainer>
  );
};
