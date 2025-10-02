import React from "react";
import { useTheme } from "styled-components";
import { HeroAnimatedBackground } from "@/components/layout/Hero/HeroAnimatedBackground";
import j4 from "@/assets/images/hero/j_4.png";
import type { DefaultThemeProps } from "@/styles/theme/defaultTheme";
import {
  AnimationWrapper,
  CanvasContainer,
  HeroContainer,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextContent,
  HeroName,
  HeroSubtitleText,
  OverlayImage,
} from "@/components/layout/Hero/styles";

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
          <HeroTextContent>
            <HeroName data-text={svgName}>{svgName}</HeroName>
            <HeroSubtitleText>{svgSubtitle}</HeroSubtitleText>
          </HeroTextContent>
        </HeroTextContainer>

        {showOverlayImage && (
          <HeroImageContainer>
            <OverlayImage src={profileImageUrl} alt="Profile" />
          </HeroImageContainer>
        )}
      </AnimationWrapper>
    </HeroContainer>
  );
};
