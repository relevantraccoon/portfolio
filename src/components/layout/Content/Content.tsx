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

  /* Mobile first - all types start at mobile width */
  max-width: ${({ theme, $contentType }) =>
    theme.layout.content[$contentType].mobile};

  /* Tablet breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.start}px) {
    max-width: ${({ theme, $contentType }) =>
      theme.layout.content[$contentType].tablet};
  }

  /* Desktop breakpoint */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.start}px) {
    max-width: ${({ theme, $contentType }) =>
      theme.layout.content[$contentType].desktop};
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
