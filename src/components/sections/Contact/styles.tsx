import styled from "styled-components";

export const ContactWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.palette.primary};
  z-index: ${({ theme }) => theme.zIndex.sections.bottom};
`;

export const ContactContainer = styled.div`
  background: ${({ theme }) => theme.colors.palette.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 3rem;
  width: 90vw;
  height: 80vh;
  min-height: 500px;
  overflow-y: auto;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1280px) {
    padding: 3rem 10rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2vh, 1.5rem);
  height: 100%;
  align-items: center;

  @media (min-width: 480px) {
    gap: clamp(1.5rem, 3vh, 2rem);
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: clamp(2rem, 4vh, 3rem);
  }

  @media (min-width: 991px) {
    gap: clamp(3rem, 5vh, 4rem);
  }

  @media (min-width: 1280px) {
    gap: clamp(4rem, 6vh, 5rem);
  }

  @media (max-height: 600px) {
    gap: 1rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vh, 1.5rem);
  text-align: center;
  width: 100%;
  padding: 1rem;
  align-items: center;

  @media (min-width: 480px) {
    padding: 1.5rem;
    gap: clamp(1.5rem, 4vh, 2rem);
  }

  @media (min-width: 768px) {
    padding: 2rem;
    gap: clamp(2rem, 5vh, 2.5rem);
    text-align: left;
    align-items: flex-start;
  }

  @media (max-height: 600px) {
    gap: 1.25rem;
    padding: 1rem;
  }

  @media (max-width: 767px) {
    text-align: center;
    align-items: center;
  }
`;

export const ContactTitle = styled.div`
  width: 100%;
  text-align: center;

  * {
    text-align: center !important;
  }

  @media (min-width: 768px) {
    text-align: left;

    * {
      text-align: left !important;
    }
  }
`;

export const ContactTextContainer = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }
`;

export const ContactButtonContainer = styled.div`
  width: 100%;
  max-width: 250px;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }
`;

export const ContactTextSVG = styled.svg`
  width: 100%;
  height: auto;
  max-width: 500px;
  margin-bottom: 1rem;
  pointer-events: none;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: inherit;

  * {
    text-align: inherit;
  }

  > *:first-child {
    margin-bottom: 0.25rem;
  }

  > *:nth-child(2) {
    margin-bottom: 1rem;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 250px;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: flex-start;
    max-width: none;
    width: auto;
    margin: 0;
  }
`;

export const VideoPlaceholder = styled.div`
  display: none;

  @media (min-width: 768px) and (min-height: 500px) {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    color: ${({ theme }) => theme.colors.palette.secondary};
    font-style: italic;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 22px
      ${({ theme }) => theme.colors.extractedDoNotUse.lightest[0].replace('1)', '0.5)')};
  }

  @media (min-width: 768px) and (min-height: 500px) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: inset 0 0 0 8px rgba(0, 0, 0, 1);
      pointer-events: none;
      z-index: 10;
    }
  }

  @media (min-width: 991px) and (min-height: 600px) {
    width: 260px;
    height: 260px;
    box-shadow: 0 0 26px
      ${({ theme }) => theme.colors.extractedDoNotUse.lightest[0].replace('1)', '0.5)')};

    &::after {
      box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 1);
    }
  }

  @media (min-width: 1280px) and (min-height: 700px) {
    width: 300px;
    height: 300px;
    box-shadow: 0 0 30px
      ${({ theme }) => theme.colors.extractedDoNotUse.lightest[0].replace('1)', '0.5)')};

    &::after {
      box-shadow: inset 0 0 0 12px rgba(0, 0, 0, 1);
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactTitleTypography = styled.div`
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: bold;
  letter-spacing: 0.025em;
  line-height: 1.1;
`;

export const ContactEmailWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.25rem;
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

