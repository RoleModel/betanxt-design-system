import { create } from 'storybook/theming'

export const light = create({
  base: 'light',
  brandTitle: 'BetaNXT Connected Design System',
  brandImage: '/betanxt-logo-light.svg',
  brandTarget: '_self',

  // Color palette
  colorPrimary: '#032f3f',
  colorSecondary: '#032f3f',

  // UI colors
  appBg: '#f7f5f0',
  appContentBg: '#fdfbf5',
  appPreviewBg: '#fdfbf5',
  appBorderColor: 'rgba(31, 30, 28, 0.12)',
  appBorderRadius: 4,

  // Text colors
  textColor: '#1e1e1e',
  textInverseColor: '#FFFFFF',

  buttonBg: '#0d5a7d',
  buttonBorder: '#0d5a7d',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#34c0f3',
  barHoverColor: '#229fd3',
  barBg: '#021d27',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(31, 30, 28, 0.12)',
  inputTextColor: '##1f1e1c',
  inputBorderRadius: 4,

  // Typography
  fontBase:
    'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
})

export const dark = create({
  base: 'dark',
  brandTitle: 'BetaNXT Connected Design System',
  brandImage: '/betanxt-logo-dark.svg',
  brandTarget: '_self',
  // Color palette
  colorPrimary: '#34c0f3',
  colorSecondary: '#34c0f3',

  // UI colors
  appBg: '#021d27',
  appContentBg: '#011218',
  appPreviewBg: '#011218',
  appBorderColor: 'rgba(2, 29, 39, 0.5)',
  appBorderRadius: 4,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#000000',

  buttonBg: '#0d5a7d',
  buttonBorder: '#0d5a7d',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#34c0f3',
  barHoverColor: '#229fd3',
  barBg: '#021d27',

  // Form colors
  inputBg: 'rgba(0, 0, 0, 0.56)',
  inputBorder: 'rgba(255, 255, 255, 0.25)',
  inputTextColor: '#1f1e1c',
  inputBorderRadius: 4,

  // Typography
  fontBase:
    'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
})
