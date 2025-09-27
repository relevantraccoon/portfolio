import React from "react";
import styled from "styled-components";

export type LinkVariant = "default" | "subtle" | "bold" | "button";
export type LinkEffect = "none" | "spark";

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: LinkVariant;
  effect?: LinkEffect;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledLink = styled.a<{
  $variant: LinkVariant;
  $effect: LinkEffect;
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

  ${({ theme, $effect, $variant }) => {
    if ($variant === "button") return ""; // Skip effects for button variant

    switch ($effect) {
      case "spark":
        return `
          position: relative;

          &:hover {
            animation: sparkle ${theme.layout.animation.speed.sparkle} ease-out forwards;
            transform: translateX(${theme.layout.animation.movement.sparkSlide}) rotate(${theme.layout.animation.rotation.sparkTilt});
            -webkit-font-smoothing: subpixel-antialiased;
            backface-visibility: hidden;
            will-change: transform;
            user-select: text;
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
          }


          &:hover::before {
            content: '✨';
            position: absolute;
            top: ${theme.layout.animation.movement.sparkOffset};
            right: ${theme.layout.animation.movement.sparkOffset};
            pointer-events: none;
            animation: sparkFloat ${theme.layout.animation.speed.sparkFloat} ease-out forwards;
            font-size: ${theme.fontSize.caption};
          }

          @keyframes sparkle {
            0% { transform: translateX(0) rotate(0deg); }
            50% { transform: translateX(8px) rotate(4deg); }
            100% { transform: translateX(6px) rotate(3deg); }
          }

          @keyframes sparkFloat {
            0% {
              opacity: 0;
              transform: translateY(0px) translateX(0px) scale(0.2);
            }
            20% {
              opacity: 0.8;
              transform: translateY(-8px) translateX(2px) scale(0.9);
            }
            35% {
              opacity: 1;
              transform: translateY(-15px) translateX(3px) scale(1);
            }
            50% {
              opacity: 0.3;
              transform: translateY(-20px) translateX(4px) scale(0.7);
            }
            100% {
              opacity: 0;
              transform: translateY(-25px) translateX(5px) scale(0.1);
            }
          }

        `;
      case "none":
      default:
        return "";
    }
  }}
`;

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  variant = "default",
  effect = "none",
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
      $effect={effect}
      $disabled={disabled}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={handleClick}
    >
      {children}
    </StyledLink>
  );
};