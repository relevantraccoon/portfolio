import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const HeroContainer = styled.div`
  width: 100%;
  height: calc(100vh - (11px + (${({ theme }) => theme.spacing.xxl} * 2)));
  background: ${({ theme }) => theme.colors.palette.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.sections.normal};

  ${mediaQuery.from("mobileWide")} {
    height: calc(100vh - (14px + (${({ theme }) => theme.spacing.xxl} * 2)));
  }

  ${mediaQuery.from("tablet")} {
    height: calc(100vh - (16px + (${({ theme }) => theme.spacing.xxl} * 2)));
  }
`;

export const AnimationWrapper = styled.div`
  width: 100vw;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;

  ${mediaQuery.from("desktopLarge")} {
    grid-template-columns: ${({ theme }) =>
      theme.layout.proportions.gridTemplates.majorMinor};
    grid-template-rows: none;
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
  background-color: transparent;

  ${mediaQuery.from("desktopLarge")} {
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
  background-color: transparent;

  ${mediaQuery.from("desktopLarge")} {
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

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const HeroName = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.display};
  font-size: ${({ theme }) => theme.responsiveTypography.heroName};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.palette.background};
  margin: 0;
  line-height: 1.1;
  position: relative;
  filter: ${({ theme }) => theme.shadows.text.heroGlow};
  white-space: nowrap;

  /* Top layer: fill with secondary stroke (creates beige outline) */
  -webkit-text-fill-color: ${({ theme }) => theme.colors.palette.background};
  -webkit-text-stroke: 5px ${({ theme }) => theme.colors.palette.secondary};
  paint-order: stroke fill;

  /* Bottom layer: add outer background stroke using pseudo-element */
  &::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 12px ${({ theme }) => theme.colors.palette.background};
  }

  ${mediaQuery.from("tablet")} {
    font-size: clamp(72px, 14vw, 120px);
  }
`;

export const HeroSubtitleText = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.responsiveTypography.heroSubtitle};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.palette.secondary};
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  letter-spacing: 0.25em;
  text-shadow: ${({ theme }) => theme.shadows.text.heroSubtitle};
  white-space: nowrap;

  ${mediaQuery.from("tablet")} {
    font-size: clamp(24px, 4vw, 36px);
  }
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
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  box-sizing: border-box;
`;

export const TextContent = styled.div`
  color: ${({ theme }) => theme.colors.palette.onBackground};
`;

export const Title = styled.h1.attrs({
  className: 'hero-title'
})<{ $fontFamily?: string; $fontSize?: number; $letterSpacing?: number }>`
  font-family: ${({ $fontFamily, theme }) => 
    $fontFamily === "default" ? theme.fontFamily.primary : 
    $fontFamily || theme.fontFamily.primary
  };
  font-size: ${({ $fontSize, theme }) => 
    $fontSize ? `${$fontSize}px` : theme.fontSize.display
  };
  letter-spacing: ${({ $letterSpacing }) => 
    $letterSpacing ? `${$letterSpacing}em` : 'normal'
  };
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.palette.primary};
`;


export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.palette.onBackground};
  opacity: 0.8;
`;

export const TechStack = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.palette.onBackground};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TechItem = styled.span`
  white-space: nowrap;
`;

export const TechDivider = styled.span`
  margin: 0 calc(${({ theme }) => theme.spacing.md} / 2);
  color: ${({ theme }) => theme.colors.palette.primary};
  font-size: ${({ theme }) => theme.fontSize.divider};
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.body};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.palette.onBackground};
`;

export const CTAButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  background: ${({ theme }) => theme.colors.palette.primary};
  color: ${({ theme }) => theme.colors.palette.onPrimary};
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.button};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.layout.animation.speed.smooth}
    ${({ theme }) => theme.layout.animation.easing.ease};

  &:hover {
    background: ${({ theme }) => theme.colors.palette.tertiary};
    color: ${({ theme }) => theme.colors.palette.onTertiary};
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
