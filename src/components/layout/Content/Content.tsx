import React from "react";
import styled from "styled-components";

type ContentType = "text" | "grid" | "media";
type VerticalPaddingSize = "full" | "half";

export type ContentProps = {
  type?: ContentType;
  children: React.ReactNode;
  className?: string;
  verticalPadding?: boolean;
  verticalPaddingSize?: VerticalPaddingSize;
};

const ContentContainer = styled.div<{
  $contentType: ContentType;
  $verticalPadding: boolean;
  $verticalPaddingSize: VerticalPaddingSize;
}>`
  width: 100%;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.gutters.mobile};
  padding-right: ${({ theme }) => theme.gutters.mobile};

  ${({ theme, $verticalPadding, $verticalPaddingSize }) =>
    $verticalPadding &&
    `
    padding-top: ${
      $verticalPaddingSize === "half" ? theme.spacing.xxl : theme.spacing.xxxxxl
    };
    padding-bottom: ${
      $verticalPaddingSize === "half" ? theme.spacing.xxl : theme.spacing.xxxxxl
    };
  `}

  /* Mobile */
  max-width: ${({ theme, $contentType }) =>
    theme.layout.content[$contentType].mobile};

  /* Mobile Wide breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileWide.start}px) {
    padding-left: ${({ theme }) => theme.gutters.mobileWide};
    padding-right: ${({ theme }) => theme.gutters.mobileWide};
  }

  /* Tablet breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.start}px) {
    max-width: ${({ theme, $contentType }) =>
      theme.layout.content[$contentType].tablet};
    padding-left: ${({ theme }) => theme.gutters.tablet};
    padding-right: ${({ theme }) => theme.gutters.tablet};
  }

  /* Desktop breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.start}px) {
    max-width: ${({ theme, $contentType }) =>
      theme.layout.content[$contentType].desktop};
    padding-left: ${({ theme }) => theme.gutters.desktop};
    padding-right: ${({ theme }) => theme.gutters.desktop};
  }

  /* Desktop Large breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge.start}px) {
    padding-left: ${({ theme }) => theme.gutters.desktopLarge};
    padding-right: ${({ theme }) => theme.gutters.desktopLarge};
  }

  /* Widescreen breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.widescreen.start}px) {
    padding-left: ${({ theme }) => theme.gutters.widescreen};
    padding-right: ${({ theme }) => theme.gutters.widescreen};
  }

  /* FHD breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.fhd.start}px) {
    padding-left: ${({ theme }) => theme.gutters.fhd};
    padding-right: ${({ theme }) => theme.gutters.fhd};
  }
`;

export const Content: React.FC<ContentProps> = ({
  type = "text",
  children,
  className,
  verticalPadding = false,
  verticalPaddingSize = "full",
}) => {
  return (
    <ContentContainer
      $contentType={type}
      $verticalPadding={verticalPadding}
      $verticalPaddingSize={verticalPaddingSize}
      className={className}
    >
      {children}
    </ContentContainer>
  );
};
