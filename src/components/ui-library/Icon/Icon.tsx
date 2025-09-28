import styled from "styled-components";
import type { IconTypography } from "@/styles/theme/defaultTheme/typography";
import {
  iconRegistry,
  type IconName,
} from "@/components/ui-library/Icon/registry";

export type { IconName } from "@/components/ui-library/Icon/registry";
export type IconStyleVariant = "ghost" | "solid" | "navigation";

type IconProps = {
  name: IconName;
  variant?: keyof IconTypography;
  styleVariant?: IconStyleVariant;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const StyledIcon = styled.div<{
  $variant?: keyof IconTypography;
  $styleVariant?: IconStyleVariant;
  $color?: string;
  $clickable: boolean;
  $disabled: boolean;
}>`
  ${({ theme, $variant }) => $variant && theme.iconTypography[$variant]}
  color: ${({ theme, $color }) => $color || theme.colors.palette.onSurface};
  cursor: ${({ $clickable, $disabled }) =>
    $disabled ? "not-allowed" : $clickable ? "pointer" : "default"};
  transition: all ${({ theme }) => theme.layout.animation.speed.smooth}
    ${({ theme }) => theme.layout.animation.easing.ease};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  opacity: ${({ $disabled, theme }) =>
    $disabled ? theme.layout.opacity.disabled : theme.layout.opacity.visible};

  ${({ theme, $styleVariant, $disabled }) => {
    if ($disabled) return "";

    switch ($styleVariant) {
      case "ghost":
        return `
          padding: ${theme.controls.icon.padding};
          border-radius: 50%;
          background: transparent;
          font-size: ${theme.controls.icon.fontSize};
          transition: all ${theme.layout.animation.speed.quick} ${theme.layout.animation.easing.ease};

          &:hover {
            background: ${theme.colors.palette.secondary};
            transform: scale(${theme.layout.animation.scale.hoverLarge});
            box-shadow: ${theme.shadows.icon.hover};
          }

          &:active {
            transform: scale(${theme.layout.animation.scale.press});
          }
        `;
      case "solid":
        return `
          padding: ${theme.controls.icon.padding};
          border-radius: 50%;
          background: ${theme.colors.palette.surface};
          font-size: ${theme.controls.icon.fontSize};

          &:hover {
            background: ${theme.colors.palette.surfaceVariant};
            transform: scale(${theme.layout.animation.scale.hover});
          }

          &:active {
            transform: scale(${theme.layout.animation.scale.press});
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

          &:hover {
            background: ${theme.colors.palette.tertiary};
            color: ${theme.colors.palette.onTertiary};
            transform: scale(${theme.layout.animation.scale.hoverLarge});
          }

          &:active {
            transform: scale(${theme.layout.animation.scale.press});
          }
        `;
      default:
        return "";
    }
  }}
`;

export const Icon: React.FC<IconProps> = ({
  name,
  variant,
  styleVariant,
  color,
  onClick,
  disabled = false,
}) => {
  const IconComponent = iconRegistry[name];

  if (!IconComponent) return null;

  return (
    <StyledIcon
      $variant={variant}
      $styleVariant={styleVariant}
      $color={color}
      $clickable={!!onClick}
      $disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      <IconComponent />
    </StyledIcon>
  );
};
