import React from "react";
import styled from "styled-components";

export type LinkVariant = "default" | "subtle" | "bold" | "button";

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: LinkVariant;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledLink = styled.a<{
  $variant: LinkVariant;
  $disabled: boolean;
}>`
  font-family: inherit;
  font-size: inherit;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all ${({ theme }) => theme.layout.animation.speed.smooth} ${({ theme }) => theme.layout.animation.easing.ease};
  text-decoration: none;
  position: relative;
  display: inline-block;
  opacity: ${({ $disabled, theme }) => ($disabled ? theme.layout.opacity.disabled : theme.layout.opacity.visible)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case "subtle":
        return `
          color: ${theme.colors.palette.onSurfaceVariant};
          &:hover { color: ${theme.colors.palette.primary}; }
        `;
      case "bold":
        return `
          color: ${theme.colors.palette.primary};
          font-weight: ${theme.fontWeight.semiBold};
          &:hover { color: ${theme.colors.palette.tertiary}; }
        `;
      case "button":
        return `
          color: ${theme.colors.palette.onPrimary};
          background: ${theme.colors.palette.primary};
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          border-radius: ${theme.borderRadius.md};
          &:hover {
            background: ${theme.colors.palette.tertiary};
            transform: translateY(${theme.layout.animation.movement.lift});
          }
        `;
      case "default":
      default:
        return `
          color: ${theme.colors.palette.primary};
          &:hover { color: ${theme.colors.palette.secondary}; }
        `;
    }
  }}
`;

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  variant = "default",
  external = false,
  disabled = false,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <StyledLink
      href={disabled ? "#" : href}
      $variant={variant}
      $disabled={disabled}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={handleClick}
    >
      {children}
    </StyledLink>
  );
};