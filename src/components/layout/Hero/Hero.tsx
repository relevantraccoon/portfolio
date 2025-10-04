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
  name?: string;
  subtitle?: string;
  subtitleLetterSpacing?: number;
  subtitleFontFamily?: string;
  subtitleFontSize?: number;
  profileImageUrl?: string;
};

export const Hero: React.FC<HeroProps> = ({
  shouldAnimate = true,
  showOverlayImage = true,
  name = "Joakim Karlsson",
  subtitle = "Tech Support → Frontend Developer",
  subtitleLetterSpacing = 0.25,
  subtitleFontFamily = "default",
  subtitleFontSize = 20,
  profileImageUrl = j4,
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
            <HeroName data-text={name}>{name}</HeroName>
            <HeroSubtitleText>{subtitle}</HeroSubtitleText>
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
