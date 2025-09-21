import React from "react";
import styled, { css } from "styled-components";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "title"
  | "subtitle"
  | "body"
  | "bodyLarge"
  | "caption"
  | "overline";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "onBackground"
  | "onPrimary"
  | "onSecondary"
  | "onSurface"
  | "onTertiary"
  | "inherit";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export type FontFamily =
  | "varela"
  | "inter"
  | "roboto"
  | "sourceSans"
  | "openSans"
  | "lato"
  | "montserrat";

export type TypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  fontFamily?: FontFamily;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
};

const getSemanticElement = (
  variant: TypographyVariant
): keyof React.JSX.IntrinsicElements => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "display":
    case "title":
    case "subtitle":
    case "body":
    case "bodyLarge":
    case "caption":
    case "overline":
    default:
      return "p";
  }
};

const getFontFamily = (font: FontFamily): string => {
  switch (font) {
    case "varela":
      return "'Varela Round', sans-serif";
    case "inter":
      return "'Inter', sans-serif";
    case "roboto":
      return "'Roboto', sans-serif";
    case "sourceSans":
      return "'Source Sans Pro', sans-serif";
    case "openSans":
      return "'Open Sans', sans-serif";
    case "lato":
      return "'Lato', sans-serif";
    case "montserrat":
      return "'Montserrat', sans-serif";
    default:
      return "'Varela Round', sans-serif";
  }
};

const getVariantStyles = (variant: TypographyVariant) => {
  switch (variant) {
    case "display":
      return css`
        font-size: ${({ theme }) => theme.fontSize.display};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.tight};
      `;
    case "h1":
      return css`
        font-size: ${({ theme }) => theme.fontSize.h1};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.tight};
      `;
    case "h2":
      return css`
        font-size: ${({ theme }) => theme.fontSize.h2};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.tight};
      `;
    case "h3":
      return css`
        font-size: ${({ theme }) => theme.fontSize.h3};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        line-height: ${({ theme }) => theme.lineHeight.tight};
      `;
    case "h4":
      return css`
        font-size: ${({ theme }) => theme.fontSize.h4};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        line-height: ${({ theme }) => theme.lineHeight.normal};
      `;
    case "h5":
      return css`
        font-size: ${({ theme }) => theme.fontSize.h5};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: ${({ theme }) => theme.lineHeight.normal};
      `;
    case "h6":
      return css`
        font-size: ${({ theme }) => theme.fontSize.h6};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: ${({ theme }) => theme.lineHeight.normal};
      `;
    case "title":
      return css`
        font-size: 1.5rem;
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        line-height: ${({ theme }) => theme.lineHeight.tight};
      `;
    case "subtitle":
      return css`
        font-size: ${({ theme }) => theme.fontSize.body};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        line-height: ${({ theme }) => theme.lineHeight.tight};
        opacity: 0.8;
      `;
    case "body":
      return css`
        font-size: ${({ theme }) => theme.fontSize.body};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        line-height: ${({ theme }) => theme.lineHeight.normal};
      `;
    case "bodyLarge":
      return css`
        font-size: ${({ theme }) => theme.fontSize.bodyLarge};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        line-height: ${({ theme }) => theme.lineHeight.normal};
      `;
    case "caption":
      return css`
        font-size: ${({ theme }) => theme.fontSize.caption};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        line-height: ${({ theme }) => theme.lineHeight.tight};
      `;
    case "overline":
      return css`
        font-size: ${({ theme }) => theme.fontSize.caption};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        line-height: ${({ theme }) => theme.lineHeight.tight};
        text-transform: uppercase;
        letter-spacing: 0.1em;
      `;
    default:
      return css`
        font-size: ${({ theme }) => theme.fontSize.body};
        font-weight: ${({ theme }) => theme.fontWeight.normal};
        line-height: ${({ theme }) => theme.lineHeight.normal};
      `;
  }
};

const getColorStyles = (color: TypographyColor) => {
  switch (color) {
    case "primary":
      return css`
        color: ${({ theme }) => theme.colors.palette.primary};
      `;
    case "secondary":
      return css`
        color: ${({ theme }) => theme.colors.palette.secondary};
      `;
    case "onBackground":
      return css`
        color: ${({ theme }) => theme.colors.palette.onBackground};
      `;
    case "onPrimary":
      return css`
        color: ${({ theme }) => theme.colors.palette.onPrimary};
      `;
    case "onSecondary":
      return css`
        color: ${({ theme }) => theme.colors.palette.onSecondary};
      `;
    case "onSurface":
      return css`
        color: ${({ theme }) => theme.colors.palette.onSurface};
      `;
    case "onTertiary":
      return css`
        color: ${({ theme }) => theme.colors.palette.onTertiary};
      `;
    case "inherit":
      return css`
        color: inherit;
      `;
    default:
      return css`
        color: ${({ theme }) => theme.colors.palette.onBackground};
      `;
  }
};

const StyledTypography = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "color", "align", "fontFamily"].includes(prop),
})<{
  variant: TypographyVariant;
  color: TypographyColor;
  align: TypographyAlign;
  fontFamily: FontFamily;
}>`
  font-family: ${({ fontFamily, theme }) =>
    fontFamily ? getFontFamily(fontFamily) : theme.fontFamily.primary};
  margin: 0;
  text-align: ${({ align }) => align};

  ${({ variant }) => getVariantStyles(variant)}
  ${({ color }) => getColorStyles(color)}
`;

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  color = "onBackground",
  align = "left",
  fontFamily = "varela",
  className,
  as,
  style,
  ...props
}) => {
  const element = as || getSemanticElement(variant);

  return (
    <StyledTypography
      as={element}
      variant={variant}
      color={color}
      align={align}
      fontFamily={fontFamily}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
