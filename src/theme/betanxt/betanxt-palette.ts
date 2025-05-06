import { PaletteOptions, ThemeOptions } from '@mui/material/styles'
import { bnblue, bnteal, neutral, nxtBlue } from '../base/palette-tokens/brand-tokens'

import { baseTheme } from '../baseTheme'

export const betanxtPaletteLight: PaletteOptions = {
  mode: 'light',
  primary: {
    contrastText: '#ffffff',
    main: nxtBlue[700],
    dark: nxtBlue[800],
    light: nxtBlue[600],
  },
  secondary: {
    contrastText: '#000000',
    main: bnteal[400],
    dark: bnteal[700],
    light: bnteal[300],
  },
  tertiary: {
    main: bnblue[500],
    dark: bnblue[800],
    light: bnblue[300],
    contrastText: '#ffffff',
  },
  neutral: {
    main: neutral[300],
    dark: neutral[700],
    light: neutral[100],
    contrastText: neutral[900],
  },
  text: {
    primary: '#1f1e1c',
  },
  tableCellRow: {
    fill: '#ffffff',
  },
  tableHeaderRow: {
    restingFill: neutral[400],
    border: neutral[500],
  },
  dataGridHeaderRow: {
    restingFill: neutral[400],
    border: neutral[500],
  },
  dataGridCellRow: {
    border: 'rgba(31, 30, 28, 0.12)',
  },
  dataGridPagination: {
    backgroundFill: neutral[200],
    border: baseTheme.palette.divider,
  },
  footer: {
    background: nxtBlue[800],
  },
  background: {
    default: neutral[50],
    paper: neutral[200],
  },
}

export const betanxtPaletteDark: PaletteOptions = {
  mode: 'dark',
  neutral: {
    main: nxtBlue[700],
    dark: nxtBlue[900],
    light: nxtBlue[500],
    contrastText: '#ffffff',
  },
  tableCellRow: {
    fill: '#000000',
  },
  tableHeaderRow: {
    restingFill: '#053b50',
    border: '#125b76',
  },
  appBarPrimary: {
    hover: nxtBlue[300],
    defaultFill: nxtBlue[800],
    tabIndicator: nxtBlue[300],
    defaultContrast: '#ffffff',
  },
  appBarSecondary: {
    defaultFill: nxtBlue[800],
    defaultContrast: '#ffffff',
    tabIndicator: nxtBlue[300],
    hover: nxtBlue[300],
  },
  dataGridHeaderRow: {
    restingFill: 'rgba(4, 46, 62, 0.8)',
    border: '#0d4459',
  },
  dataGridPagination: {
    backgroundFill: '#042e3e',
    border: '#0d4459',
  },
  dataGridDefaultFill: 'rgba(0, 0, 0, 0.5)',
  footer: {
    background: nxtBlue[800],
  },
  background: {
    default: '#011218',
    paper: '#021d27',
  },
}
