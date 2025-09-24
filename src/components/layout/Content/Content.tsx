import React from "react";
import styled from "styled-components";

type ContentType = "text" | "grid" | "media";

export type ContentProps = {
  type?: ContentType;
  children: React.ReactNode;
  className?: string;
};

const ContentContainer = styled.div<{ $contentType: ContentType }>`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.gutters.mobile};

  /* Mobile */
  max-width: ${({ theme, $contentType }) =>
    theme.layout.content[$contentType].mobile};

  /* Mobile Wide breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileWide.start}px) {
    padding: 0 ${({ theme }) => theme.gutters.mobileWide};
  }

  /* Tablet breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.start}px) {
    max-width: ${({ theme, $contentType }) =>
      theme.layout.content[$contentType].tablet};
    padding: 0 ${({ theme }) => theme.gutters.tablet};
  }

  /* Desktop breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.start}px) {
    max-width: ${({ theme, $contentType }) =>
      theme.layout.content[$contentType].desktop};
    padding: 0 ${({ theme }) => theme.gutters.desktop};
  }

  /* Desktop Large breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge.start}px) {
    padding: 0 ${({ theme }) => theme.gutters.desktopLarge};
  }

  /* Widescreen breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.widescreen.start}px) {
    padding: 0 ${({ theme }) => theme.gutters.widescreen};
  }

  /* FHD breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.fhd.start}px) {
    padding: 0 ${({ theme }) => theme.gutters.fhd};
  }
`;

export const Content: React.FC<ContentProps> = ({
  type = "text",
  children,
  className,
}) => {
  return (
    <ContentContainer $contentType={type} className={className}>
      {children}
    </ContentContainer>
  );
};
