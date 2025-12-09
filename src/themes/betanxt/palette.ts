import type { PaletteOptions } from '@mui/material/styles'

import { bnblue, bnteal, neutral, nxtBlue } from '../base/palette-tokens/brand-tokens'
import baseTheme from '../baseTheme'

export const betanxtPaletteLight: PaletteOptions = {
  mode: 'light',
  primary: {
    contrastText: '#ffffff',
    main: nxtBlue[700],
    dark: nxtBlue[800],
    light: nxtBlue[600],
  },
  secondary: {
    contrastText: '#FFFFFF',
    main: bnteal[500],
    dark: bnteal[600],
    light: bnteal[400],
  },
  tertiary: {
    main: bnblue[500],
    dark: bnblue[800],
    light: bnblue[300],
    contrastText: '#ffffff',
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
  text: {
    primary: '#f3f3f3',
  },
  secondary: {
    main: bnteal[400],
    dark: bnteal[500],
    light: bnteal[300],
    contrastText: '#000000',
  },
  neutral: {
    main: neutral[700],
    dark: neutral[900],
    light: neutral[500],
    contrastText: '#ffffff',
  },
  tableCellRow: {
    fill: '#000000',
  },
  tableHeaderRow: {
    restingFill: '#053b50',
    border: '#125b76',
  },
  appBar: {
    hover: nxtBlue[300],
    background: nxtBlue[800],
    defaultContrast: '#ffffff',
    bottomBorder: 'transparent',
  },
  dataGridHeaderRow: {
    restingFill: '#042e3e',
    border: '#0d4459',
  },
  dataGridPagination: {
    backgroundFill: '#042e3e',
    border: '#0d4459',
  },
  dataGridDefaultFill: '#010b0f',
  footer: {
    background: nxtBlue[800],
  },
  background: {
    default: '#011218',
    paper: '#021d27',
  },
}
