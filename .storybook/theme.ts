import { create } from '@storybook/theming'

export const light = create({
  base: 'light',
  brandTitle: 'BetaNXT Connected Design System',
  brandImage: '/betanxt-logo-light.svg',

  // Color palette
  colorPrimary: '#032f3f',
  colorSecondary: '#032f3f',

  // UI colors
  appBg: '#f7f5f0',
  appContentBg: '#fdfbf5',
  appPreviewBg: '#f7f5f0',
  appBorderColor: 'rgba(31, 30, 28, 0.12)',
  appBorderRadius: 5,

  // Text colors
  textColor: '#1e1e1e',
  textInverseColor: '#FFFFFF',

  buttonBg: '#032f3f',
  buttonBorder: '#032f3f',

  // Toolbar default and active colors
  barTextColor: '#d8f3fd',
  barSelectedColor: '#34c0f3',
  barHoverColor: '#34c0f3',
  barBg: '#021d27',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(31, 30, 28, 0.12)',
  inputTextColor: '#1e1e1e',
  inputBorderRadius: 4,

  // Typography
  fontBase:
    'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
})

export const dark = create({
  base: 'dark',
  brandTitle: 'BetaNXT Connected Design System',
  brandTarget: '_self',
  brandImage: '/betanxt-logo-dark.svg',

  // Color palette
  colorPrimary: '#34c0f3',
  colorSecondary: '#34c0f3',

  // UI colors
  appBg: '#021d27',
  appContentBg: '#011218',
  appPreviewBg: '#011218',
  appBorderColor: 'rgba(243, 243, 243, 0.12)',
  appBorderRadius: 4,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#FFFFFF',

  buttonBg: '#34c0f3',
  buttonBorder: '#34c0f3',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#34c0f3',
  barHoverColor: '#34c0f3',
  barBg: '#011218',

  // Form colors
  inputBg: '#333333',
  inputBorder: '#333333',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  // Typography
  fontBase:
    'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
})
