import React from "react";
import styled from "styled-components";

export type BadgeVariant = "primary" | "secondary" | "tertiary" | "info";
export type BadgeSize = "small" | "medium" | "large";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const StyledBadge = styled.span<{ $variant: BadgeVariant; $size: BadgeSize }>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  text-shadow: ${({ theme }) => theme.textShadow.dark};

  ${({ theme, $size }) => {
    switch ($size) {
      case "small":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.sm};
          font-size: 0.75rem;
        `;
      case "medium":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 0.875rem;
        `;
      case "large":
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: 1rem;
        `;
      default:
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 0.875rem;
        `;
    }
  }}

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
      case "tertiary":
        return `
          background-color: ${theme.colors.palette.tertiary};
          color: ${theme.colors.palette.onTertiary};
        `;
      case "info":
        return `
          background-color: ${theme.colors.palette.info};
          color: ${theme.colors.palette.onInfo};
        `;
      default:
        return `
          background-color: ${theme.colors.palette.primary};
          color: ${theme.colors.palette.onPrimary};
        `;
    }
  }}
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "medium",
}) => {
  return <StyledBadge $variant={variant} $size={size}>{children}</StyledBadge>;
};
