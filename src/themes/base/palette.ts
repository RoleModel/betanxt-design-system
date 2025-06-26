import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import type { PaletteOptions } from '@mui/material/styles'

import {
  bnblue,
  bnteal,
  micGrey,
  neutral,
  nxtBlue,
  orangered,
  persimmon,
  seagrass,
  turquoise,
} from './palette-tokens/brand-tokens'
import { chartsDark, chartsLight } from './palette-tokens/charts'

const basePaletteThemeOptions = {
  tonalOffset: 0.2,
  contrastThreshold: 4.5,
} as const

const baseTheme = createTheme()

export const basePaletteLight: PaletteOptions = {
  ...basePaletteThemeOptions,
  mode: 'light',
  neutral: {
    main: grey[300],
    dark: grey[500],
    light: grey[100],
    contrastText: '#000000',
  },
  text: {
    primary: '#1e1e1e',
    secondary: 'rgba(30, 30, 30, 0.70)',
    disabled: 'rgba(30, 30, 30, 0.38)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.56)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  error: {
    main: orangered[500],
    dark: orangered[600],
    light: orangered[400],
    contrastText: '#ffffff',
  },
  warning: {
    main: persimmon[500],
    dark: persimmon[800],
    light: persimmon[400],
    contrastText: '#000000',
  },
  info: {
    main: bnblue[500],
    dark: bnblue[700],
    light: bnblue[400],
    contrastText: '#ffffff',
  },
  success: {
    main: seagrass[600],
    dark: seagrass[800],
    light: seagrass[500],
    contrastText: '#ffffff',
  },
  divider: 'rgba(31, 30, 28, 0.12)',
  inputOutlinedEnabledBorder: 'rgba(0, 0, 0, 0.23)',
  inputOutlinedHoverBorder: '#000000',
  inputOutlinedEnabledFill: '#ffffff',
  appBarPrimary: {
    defaultContrast: '#ffffff',
    hover: nxtBlue[300],
    defaultFill: nxtBlue[800],
    tabIndicator: '#ffffff',
  },
  appBarSecondary: {
    defaultFill: '#ffffff',
    defaultContrast: bnteal[700],
    tabIndicator: nxtBlue[700],
    hover: nxtBlue[500],
  },
  appSwitcher: {
    background: micGrey[900],
    hover: nxtBlue[800],
    contrastText: '#FFFFFF',
  },
  link: nxtBlue[600],
  tableCellRow: {
    fill: baseTheme.palette.common.white,
    zebraFill: neutral[200],
  },
  tableHeaderRow: {
    restingFill: '#e5e5e5',
    border: 'rgba(30, 30, 30, 0.12)',
  },
  dataGridHeaderRow: {
    restingFill: '#e5e5e5',
    border: neutral[500],
  },
  dataGridSubHeader: {
    backgroundFill: grey[100],
  },
  dataGridCellRow: {
    border: 'rgba(30, 30, 30, 0.12)',
  },
  dataGridPagination: {
    backgroundFill: '#f3f3f3',
    border: 'rgba(30, 30, 30, 0.12)',
  },
  dataGridDefaultFill: '#ffffff',
  footer: {
    background: '#171717',
  },
  logoPoweredBy: turquoise[500],
  logoFill: '#0D6580',
  micGrey: baseTheme.palette.augmentColor({
    color: {
      main: 'hsla(205, 15%, 25%, 1)',
    },
    name: 'micGrey',
  }),
  background: {
    default: '#f9f9f9',
    paper: '#f3f3f3',
  },
  values: {
    negative: orangered[600],
    positive: seagrass[600],
  },
  ...chartsLight,
}

export const basePaletteDark: PaletteOptions = {
  ...basePaletteThemeOptions,
  mode: 'dark',
  primary: {
    main: nxtBlue[300],
    dark: nxtBlue[400],
    light: nxtBlue[200],
    contrastText: '#000000',
  },
  secondary: {
    main: bnteal[400],
    dark: bnteal[500],
    light: bnteal[300],
    contrastText: '#000000',
  },
  tertiary: {
    main: bnblue[600],
    dark: bnblue[700],
    light: bnblue[200],
    contrastText: '#ffffff',
  },
  text: {
    primary: '#f3f3f3',
    secondary: 'rgba(243, 243, 243, 0.70)',
    disabled: 'rgba(243, 243, 243, 0.38)',
  },
  action: {
    active: 'rgba(243, 243, 243, 0.56)',
    hover: 'rgba(243, 243, 243, 0.08)',
    selected: 'rgba(243, 243, 243, 0.16)',
    disabled: 'rgba(243, 243, 243, 0.38)',
    disabledBackground: 'rgba(243, 243, 243, 0.12)',
  },
  error: {
    main: orangered[400],
    dark: orangered[500],
    light: orangered[300],
    contrastText: '#ffffff',
  },
  warning: {
    main: persimmon[400],
    dark: persimmon[500],
    light: persimmon[300],
    contrastText: '#000000',
  },
  info: {
    main: bnblue[400],
    dark: bnblue[600],
    light: bnblue[300],
    contrastText: '#000000',
  },
  success: {
    main: seagrass[400],
    dark: seagrass[700],
    light: seagrass[300],
    contrastText: '#000000',
  },
  neutral: {
    main: grey[700],
    dark: grey[800],
    light: grey[500],
    contrastText: grey[50],
  },
  divider: 'rgba(243, 243, 243, 0.12)',
  inputOutlinedEnabledBorder: 'rgba(243, 243, 243, 0.3)',
  inputOutlinedHoverBorder: '#ffffff',
  inputOutlinedEnabledFill: 'rgba(0, 0, 0, 0.3)',
  appBarPrimary: {
    defaultContrast: '#ffffff',
    hover: nxtBlue[300],
    defaultFill: '#171717',
    tabIndicator: '#ffffff',
  },
  appBarSecondary: {
    defaultFill: '#171717',
    defaultContrast: '#ffffff',
    tabIndicator: nxtBlue[300],
    hover: nxtBlue[300],
  },
  appSwitcher: {
    background: micGrey[900],
    hover: nxtBlue[800],
    contrastText: '#FFFFFF',
  },
  link: nxtBlue[300],
  tableCellRow: {
    fill: 'rgba(0, 0, 0, 0.5)',
  },
  tableHeaderRow: {
    restingFill: 'rgba(243, 243, 243, 0.15)',
    border: 'rgba(243, 243, 243, 0.8)',
  },
  dataGridDefaultFill: 'rgba(0, 0, 0, 0.5)',
  dataGridHeaderRow: {
    restingFill: 'rgba(55, 55, 55, 0.75)',
    border: 'rgba(243, 243, 243, 0.8)',
  },
  dataGridCellRow: {
    border: 'rgba(243, 243, 243, 0.12)',
  },
  dataGridPagination: {
    backgroundFill: 'rgba(55, 55, 55, 0.6)',
    border: 'rgba(243, 243, 243, 0.12)',
  },
  footer: {
    background: '#171717',
  },
  logoPoweredBy: turquoise[500],
  logoFill: nxtBlue[300],
  background: {
    default: '#0d0d0d',
    paper: '#171717',
  },
  values: {
    negative: orangered[400],
    positive: seagrass[400],
  },
  ...chartsDark,
}
