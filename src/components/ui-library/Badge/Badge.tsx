import React from "react";
import styled from "styled-components";

export type BadgeVariant = "primary" | "secondary" | "tech" | "role";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

const StyledBadge = styled.span<{ $variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case "primary":
        return `
          background-color: ${theme.colors.palette.primary};
          color: ${theme.colors.palette.onPrimary};
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.palette.secondary};
          color: ${theme.colors.palette.onSecondary};
        `;
      case "tech":
        return `
          background-color: ${theme.colors.palette.tertiary};
          color: ${theme.colors.palette.onTertiary};
        `;
      case "role":
        return `
          background-color: ${theme.colors.palette.info};
          color: ${theme.colors.palette.onInfo};
        `;
      default:
        return `
          background-color: ${theme.colors.palette.secondary};
          color: ${theme.colors.palette.onSecondary};
        `;
    }
  }}
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "secondary",
}) => {
  return <StyledBadge $variant={variant}>{children}</StyledBadge>;
};
