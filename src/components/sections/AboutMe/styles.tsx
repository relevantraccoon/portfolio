import styled from "styled-components";
import { mediaQuery } from "@/styles/theme/mediaQueries";

export const AboutMeContainer = styled.section<{ $backgroundColor?: string }>`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.viewport.sections.aboutMe.mobile};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${({ theme, $backgroundColor }) => 
    $backgroundColor || theme.colors.background.dark};
  overflow: hidden;

  ${mediaQuery.from("tablet")} {
    min-height: ${({ theme }) => theme.layout.viewport.sections.aboutMe.tablet};
  }

  ${mediaQuery.from("desktop")} {
    min-height: ${({ theme }) => theme.layout.viewport.sections.aboutMe.desktop};
  }

  ${mediaQuery.from("fhd")} {
    min-height: ${({ theme }) => theme.layout.viewport.sections.aboutMe.fhd};
  }
`;


export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.gutters.mobile};

  ${mediaQuery.from("tablet")} {
    padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.gutters.tablet};
  }

  ${mediaQuery.from("desktop")} {
    padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.gutters.desktop};
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  ${mediaQuery.from("tablet")} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxxl};
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.dark};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${mediaQuery.from("tablet")} {
    font-size: ${({ theme }) => theme.fontSize.display};
  }
`;

export const AboutText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  color: ${({ theme }) => theme.colors.text.dark};
  margin: 0;

  ${mediaQuery.from("tablet")} {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

export const AboutVideo = styled.video`
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  object-fit: cover;

  ${mediaQuery.from("tablet")} {
    min-height: 400px;
  }
`;