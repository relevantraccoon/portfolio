import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import styled from "styled-components";
import type { IconTypography } from "../../../styles/theme/defaultTheme/typography";

const allIcons = {
  ...FaIcons,
  ...GiIcons,
};

export type IconName = keyof typeof allIcons;

type IconProps = {
  name: IconName;
  variant: keyof IconTypography;
  color?: string;
};

const StyledIcon = styled.div<{
  $variant: keyof IconTypography;
  $color?: string;
}>`
  ${({ theme, $variant }) => theme.iconTypography[$variant]}
  color: ${({ theme, $color }) => $color || theme.colors.palette.onSurface};
`;

export const Icon: React.FC<IconProps> = ({ name, variant, color }) => {
  const IconComponent = allIcons[name];

  if (!IconComponent) return null;

  return (
    <StyledIcon $variant={variant} $color={color}>
      <IconComponent />
    </StyledIcon>
  );
};
