import reactLogo from './react.svg';
import typescriptLogo from './typescript.svg';
import cssLogo from './css.svg';
import htmlLogo from './html.svg';
import styledComponentsLogo from './styled-components.svg';
import graphqlLogo from './graphql.svg';
import gitLogo from './git.svg';
import figmaLogo from './figma.svg';
import storybookLogo from './storybook.svg';

export type LogoName =
  | 'react'
  | 'typescript'
  | 'css'
  | 'html'
  | 'styled-components'
  | 'graphql'
  | 'git'
  | 'figma'
  | 'storybook';

export const logoRegistry: Record<LogoName, string> = {
  react: reactLogo,
  typescript: typescriptLogo,
  css: cssLogo,
  html: htmlLogo,
  'styled-components': styledComponentsLogo,
  graphql: graphqlLogo,
  git: gitLogo,
  figma: figmaLogo,
  storybook: storybookLogo,
};
