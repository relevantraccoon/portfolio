// src/types/styled.d.ts
import "styled-components";
import type { DefaultThemeProps } from "../styles/theme/defaultTheme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends DefaultThemeProps {}
}
