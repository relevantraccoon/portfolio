import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/theme/defaultTheme'
import { GlobalStyles } from '../src/styles/GlobalStyles'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;