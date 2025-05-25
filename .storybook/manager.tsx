import { global } from '@storybook/global'
import { addons } from '@storybook/manager-api'

import { dark, light } from './theme'

const { window: globalWindow } = global
export const getPreferredColorScheme = () => {
  if (!globalWindow || !globalWindow.matchMedia) return 'light'

  const isDarkThemePreferred = globalWindow.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  if (isDarkThemePreferred) return 'dark'

  return 'light'
}

addons.setConfig({
  theme: getPreferredColorScheme() === 'dark' ? dark : light,
})
