import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const ContactWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.palette.primary};
  z-index: ${({ theme }) => theme.zIndex.sections.bottom};
`;

export const ContactContainer = styled.div`
  background: ${({ theme }) => theme.colors.palette.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 0;
  width: ${({ theme }) => theme.layout.proportions.sizing.mostlyFull};
  height: ${({ theme }) => theme.layout.viewport.sections.contact.mobile};
  min-height: 500px;
  overflow-y: auto;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.layout.responsive.gaps.small};
  height: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};

  ${mediaQuery.from('mobileWide')} {
    gap: ${({ theme }) => theme.layout.responsive.gaps.medium};
    padding: ${({ theme }) => theme.spacing.xxxl};
  }

  ${mediaQuery.from('tablet')} {
    grid-template-columns: ${({ theme }) => theme.layout.proportions.gridTemplates.majorMinor};
    gap: ${({ theme }) => theme.layout.responsive.gaps.large};
    padding: ${({ theme }) => theme.spacing.xxxxl};
  }

  ${mediaQuery.from('desktop')} {
    gap: ${({ theme }) => theme.layout.responsive.gaps.xlarge};
  }

  ${mediaQuery.from('desktopLarge')} {
    gap: ${({ theme }) => theme.layout.responsive.gaps.xxlarge};
    padding: ${({ theme }) => theme.spacing.xxxxl} ${({ theme }) => theme.gutters.widescreen};
  }

  @media (max-height: 600px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.responsive.contentGaps.small};
  text-align: center;
  width: 100%;
  align-items: center;

  ${mediaQuery.from('mobileWide')} {
    gap: ${({ theme }) => theme.layout.responsive.contentGaps.medium};
  }

  ${mediaQuery.from('tablet')} {
    gap: ${({ theme }) => theme.layout.responsive.contentGaps.large};
    text-align: left;
    align-items: flex-start;
  }

  @media (max-height: 600px) {
    gap: 1.25rem;
  }

  ${mediaQuery.until('mobileWide')} {
    text-align: center;
    align-items: center;
  }
`;

export const ContactTitle = styled.div`
  width: 100%;
  text-align: center;

  ${mediaQuery.from('tablet')} {
    text-align: left;
  }
`;

export const ContactTextContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.components.contact.maxWidths.text};
  text-align: center;
  margin: 0 auto;

  ${mediaQuery.from('tablet')} {
    text-align: left;
    margin: 0;
  }
`;

export const ContactButtonContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.components.contact.maxWidths.button};
  text-align: center;
  margin: 0 auto;

  ${mediaQuery.from('tablet')} {
    text-align: left;
    margin: 0;
  }
`;

export const ContactTextSVG = styled.svg`
  width: 100%;
  height: auto;
  max-width: ${({ theme }) => theme.layout.components.contact.maxWidths.svg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  pointer-events: none;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: inherit;

  * {
    text-align: inherit;
  }

  > *:first-child {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  > *:nth-child(2) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: ${({ theme }) => theme.layout.components.contact.maxWidths.button};
  justify-content: space-between;
  margin: 0 auto;

  ${mediaQuery.from('tablet')} {
    justify-content: flex-start;
    max-width: none;
    width: auto;
    margin: 0;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }
`;

export const VideoPlaceholder = styled.div`
  display: none;

  ${mediaQuery.from('tablet')} and (min-height: 500px) {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.layout.components.video.sizes.small};
    height: ${({ theme }) => theme.layout.components.video.sizes.small};
    color: ${({ theme }) => theme.colors.palette.secondary};
    font-style: italic;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.video.small};

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: ${({ theme }) => theme.shadows.video.insetSmall};
      pointer-events: none;
      z-index: ${({ theme }) => theme.zIndex.sections.content};
    }
  }

  ${mediaQuery.from('desktop')} and (min-height: 600px) {
    width: ${({ theme }) => theme.layout.components.video.sizes.medium};
    height: ${({ theme }) => theme.layout.components.video.sizes.medium};
    box-shadow: ${({ theme }) => theme.shadows.video.medium};

    &::after {
      box-shadow: ${({ theme }) => theme.shadows.video.insetMedium};
    }
  }

  ${mediaQuery.from('desktopLarge')} and (min-height: 700px) {
    width: ${({ theme }) => theme.layout.components.video.sizes.large};
    height: ${({ theme }) => theme.layout.components.video.sizes.large};
    box-shadow: ${({ theme }) => theme.shadows.video.large};

    &::after {
      box-shadow: ${({ theme }) => theme.shadows.video.insetLarge};
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ContactTitleTypography = styled.h1`
  font-size: ${({ theme }) => theme.responsiveTypography.contactTitle};
  font-weight: bold;
  letter-spacing: 0.025em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.palette.primary};
  text-align: inherit;
  margin: 0;
  text-shadow: ${({ theme }) => theme.textShadow.dark};
`;

export const ContactEmailWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

export const ContactEmailLink = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: baseline;
  user-select: text;
`;

export const ContactCopyIcon = styled.div`
  cursor: pointer;
  font-size: 0.9em;
  opacity: 0.6;
  margin-left: 0.25em;
  transition: opacity ${({ theme }) => theme.layout.animation.speed.quick} ${({ theme }) => theme.layout.animation.easing.ease};

  &:hover {
    opacity: 1;
  }
`;

export const ContactVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

