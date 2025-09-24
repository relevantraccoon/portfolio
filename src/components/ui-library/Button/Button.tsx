import React from "react";
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "navigation";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const StyledButton = styled.button<{ 
  $variant: ButtonVariant; 
  $size: ButtonSize; 
  $disabled: boolean;
}>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all ${({ theme }) => theme.layout.animation.speed.smooth}
    ${({ theme }) => theme.layout.animation.easing.ease};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;

  ${({ theme, $size }) => {
    switch ($size) {
      case "small":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSize.sm || "0.875rem"};
        `;
      case "large":
        return `
          padding: ${theme.spacing.lg} ${theme.spacing.xl};
          font-size: ${theme.fontSize.lg || "1.125rem"};
        `;
      case "medium":
      default:
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSize.button || theme.fontSize.body};
        `;
    }
  }}

  ${({ theme, $variant, $disabled }) => {
    if ($disabled) {
      return `
        background: ${theme.colors.palette.surface};
        color: ${theme.colors.palette.onSurface};
        opacity: 0.5;
      `;
    }

    switch ($variant) {
      case "primary":
        return `
          background: ${theme.colors.palette.primary};
          color: ${theme.colors.palette.onPrimary};

          &:hover:not(:disabled) {
            background: ${theme.colors.palette.tertiary};
            color: ${theme.colors.palette.onTertiary};
            transform: translateY(${theme.layout.animation.movement.lift});
          }

          &:active:not(:disabled) {
            transform: translateY(${theme.layout.animation.movement.press});
          }
        `;
      case "secondary":
        return `
          background: ${theme.colors.palette.secondary};
          color: ${theme.colors.palette.onSecondary};

          &:hover:not(:disabled) {
            background: ${theme.colors.palette.surfaceContainerHigh};
            color: ${theme.colors.palette.onSurfaceContainerHigh};
            transform: translateY(${theme.layout.animation.movement.lift});
          }

          &:active:not(:disabled) {
            transform: translateY(${theme.layout.animation.movement.press});
          }
        `;
      case "navigation":
        return `
          background: ${theme.colors.palette.primary};
          color: ${theme.colors.palette.onPrimary};
          border-radius: 50%;
          width: ${theme.controls.navButton.width};
          height: ${theme.controls.navButton.height};
          padding: 0;
          font-size: 20px;
          font-weight: ${theme.fontWeight.bold};

          &:hover:not(:disabled) {
            background: ${theme.colors.palette.tertiary};
            color: ${theme.colors.palette.onTertiary};
            transform: scale(1.1);
          }

          &:active:not(:disabled) {
            transform: scale(0.95);
          }
        `;
      default:
        return "";
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};