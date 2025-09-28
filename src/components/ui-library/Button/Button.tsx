import React from "react";
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "navigation" | "outlinePrimary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "default" | "round";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $disabled: boolean;
}>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border: none;
  border-radius: ${({ theme, $shape }) =>
    $shape === "round" ? "50%" : theme.borderRadius.md};
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

  ${({ theme, $size, $shape }) => {
    if ($shape === "round") {
      switch ($size) {
        case "small":
          return `
            width: ${theme.controls.button.small.width};
            height: ${theme.controls.button.small.height};
            padding: 0;
            font-size: ${theme.fontSize.sm || "0.875rem"};
          `;
        case "large":
          return `
            width: ${theme.controls.button.large.width};
            height: ${theme.controls.button.large.height};
            padding: 0;
            font-size: ${theme.fontSize.lg || "1.125rem"};
          `;
        case "medium":
        default:
          return `
            width: ${theme.controls.button.medium.width};
            height: ${theme.controls.button.medium.height};
            padding: 0;
            font-size: ${theme.fontSize.button || theme.fontSize.body};
          `;
      }
    }

    // Default rectangular shape
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
        opacity: ${theme.layout.opacity.disabled};
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
          font-size: ${theme.controls.icon.fontSize};
          font-weight: ${theme.fontWeight.bold};

          &:hover:not(:disabled) {
            background: ${theme.colors.palette.tertiary};
            color: ${theme.colors.palette.onTertiary};
            transform: scale(${theme.layout.animation.scale.hoverLarge});
          }

          &:active:not(:disabled) {
            transform: scale(${theme.layout.animation.scale.press});
          }
        `;
      case "outlinePrimary":
        return `
          background: transparent;
          color: ${theme.colors.palette.primary};
          border: 2px solid ${theme.colors.palette.primary};
          border-radius: ${theme.borderRadius.xl};
          padding: ${theme.spacing.lg};
          font-weight: bold;
          letter-spacing: ${theme.letterSpacing.medium};
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          width: 100%;

          svg {
            font-size: 1.25em;
          }

          &:hover:not(:disabled) {
            background: ${theme.colors.palette.primary};
            color: ${theme.colors.palette.onPrimary};
          }

          &:active:not(:disabled) {
            transform: translateY(${theme.layout.animation.movement.press});
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
  shape = "default",
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $shape={shape}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};