import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const HeroContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.layout.viewport.sections.hero.mobile};
  background: ${({ theme }) => theme.colors.background.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.gutters.mobile} 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  overflow: hidden;

  ${mediaQuery.from("tablet")} {
    height: ${({ theme }) => theme.layout.viewport.sections.hero.tablet};
    padding: ${({ theme }) => theme.gutters.tablet} 0;
  }

  ${mediaQuery.from("desktop")} {
    height: ${({ theme }) => theme.layout.viewport.sections.hero.desktop};
    padding: ${({ theme }) => theme.gutters.desktop} 0;
  }

  ${mediaQuery.from("fhd")} {
    height: ${({ theme }) => theme.layout.viewport.sections.hero.fhd};
  }
`;

export const AnimationWrapper = styled.div`
  width: calc(100vw - (${({ theme }) => theme.gutters.mobile} * 2));
  height: calc(
    (100vw - (${({ theme }) => theme.gutters.mobile} * 2)) *
      ${({ theme }) => theme.layout.components.hero.aspectRatio.portrait}
  );
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;

  ${mediaQuery.from("mobileWide")} {
    height: calc(
      (100vw - (${({ theme }) => theme.gutters.mobile} * 2)) *
        ${({ theme }) => theme.layout.components.hero.aspectRatio.landscape}
    );
    grid-template-columns: ${({ theme }) =>
      theme.layout.proportions.gridTemplates.majorMinor};
    grid-template-rows: none;
  }

  ${mediaQuery.from("tablet")} {
    width: calc(100vw - (${({ theme }) => theme.gutters.tablet} * 2));
    height: calc(
      (100vw - (${({ theme }) => theme.gutters.tablet} * 2)) *
        ${({ theme }) => theme.layout.components.hero.aspectRatio.landscape}
    );
  }

  ${mediaQuery.from("desktop")} {
    width: calc(100vw - (${({ theme }) => theme.gutters.desktop} * 2));
    height: calc(
      (100vw - (${({ theme }) => theme.gutters.desktop} * 2)) *
        ${({ theme }) => theme.layout.components.hero.aspectRatio.landscape}
    );
  }
`;

export const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.background};
`;

export const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.content};
  background-color: ${({ theme }) => theme.colors.background.transparent};

  ${mediaQuery.from("mobileWide")} {
    width: ${({ theme }) =>
      theme.layout.proportions.split.majorMinor.split(" ")[0]};
    height: 100%;
  }
`;

export const HeroImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.content};
  background-color: ${({ theme }) => theme.colors.background.transparent};

  ${mediaQuery.from("mobileWide")} {
    top: 0;
    right: 0;
    left: auto;
    bottom: auto;
    width: ${({ theme }) =>
      theme.layout.proportions.split.majorMinor.split(" ")[1]};
    height: 100%;
  }
`;

export const OverlayImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const HeroTextSVG = styled.svg`
  width: 100%;
  height: 80%;
  max-width: 100%;
  max-height: 100%;
  filter: ${({ theme }) => theme.shadows.text.heroGlow};

  ${mediaQuery.from("mobileWide")} {
    width: ${({ theme }) => theme.layout.proportions.sizing.almostFull};
    height: ${({ theme }) => theme.layout.proportions.sizing.mostlyFull};
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.gutters.mobile};

  ${mediaQuery.from("tablet")} {
    padding: ${({ theme }) => theme.gutters.tablet};
  }

  ${mediaQuery.from("desktop")} {
    padding: ${({ theme }) => theme.gutters.desktop};
  }
`;

export const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.accent};
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CTAButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  background: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.layout.animation.speed.smooth}
    ${({ theme }) => theme.layout.animation.easing.ease};

  &:hover {
    background: ${({ theme }) => theme.colors.brand.primaryDark};
    transform: translateY(
      ${({ theme }) => theme.layout.animation.movement.lift}
    );
  }

  &:active {
    transform: translateY(
      ${({ theme }) => theme.layout.animation.movement.press}
    );
  }
`;
