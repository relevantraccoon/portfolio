import { css } from "styled-components";

export const iconTypography = {
  iconMini: css`
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 8px;
  `,
  iconSmall: css`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
  `,
  iconMedium: css`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
  `,
  iconLarge: css`
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 36px;
  `,
};

export type IconTypography = typeof iconTypography;
