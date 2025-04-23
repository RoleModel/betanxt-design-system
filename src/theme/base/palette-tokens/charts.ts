import { deepPurple, pink } from '@mui/material/colors'
import { PaletteOptions } from '@mui/material/styles'

import { bnteal, gold, nxtBlue, orangered, persimmon, seagrass } from './brand-tokens'

declare module '@mui/material/styles' {
  interface Palette {
    chartSeries1: Palette['primary']
    chartSeries2: Palette['primary']
    chartSeries3: Palette['primary']
    chartSeries4: Palette['primary']
    chartSeries5: Palette['primary']
    chartSeries6: Palette['primary']
    chartSeries7: Palette['primary']
    chartSeries8: Palette['primary']
    chartSeries9: Palette['primary']
  }

  interface PaletteOptions {
    chartSeries1?: PaletteOptions['primary']
    chartSeries2?: PaletteOptions['primary']
    chartSeries3?: PaletteOptions['primary']
    chartSeries4?: PaletteOptions['primary']
    chartSeries5?: PaletteOptions['primary']
    chartSeries6?: PaletteOptions['primary']
    chartSeries7?: PaletteOptions['primary']
    chartSeries8?: PaletteOptions['primary']
    chartSeries9?: PaletteOptions['primary']
  }
}

export const chartsLight: PaletteOptions = {
  chartSeries1: {
    main: nxtBlue[700],
    dark: nxtBlue[800],
    light: nxtBlue[600],
    contrastText: '#ffffff',
  },
  chartSeries2: {
    main: seagrass[500],
    dark: seagrass[600],
    light: seagrass[400],
    contrastText: '#ffffff',
  },
  chartSeries3: {
    main: bnteal[400],
    dark: bnteal[500],
    light: bnteal[300],
    contrastText: '#000000',
  },
  chartSeries4: {
    main: persimmon[600],
    dark: persimmon[700],
    light: persimmon[500],
    contrastText: '#000000',
  },
  chartSeries5: {
    main: nxtBlue[500],
    dark: nxtBlue[600],
    light: nxtBlue[400],
    contrastText: '#000000',
  },
  chartSeries6: {
    main: orangered[400],
    dark: orangered[500],
    light: orangered[300],
    contrastText: '#ffffff',
  },
  chartSeries7: {
    main: deepPurple[400],
    dark: deepPurple[500],
    light: deepPurple[300],
    contrastText: '#000000',
  },
  chartSeries8: {
    main: seagrass[600],
    dark: seagrass[700],
    light: seagrass[500],
    contrastText: '#ffffff',
  },
  chartSeries9: {
    main: pink[400],
    dark: pink[500],
    light: pink[300],
    contrastText: '#ffffff',
  },
}

export const chartsDark: PaletteOptions = {
  chartSeries1: {
    main: nxtBlue[300],
    dark: nxtBlue[400],
    light: nxtBlue[200],
    contrastText: '#000000',
  },
  chartSeries2: {
    main: seagrass[500],
    dark: seagrass[600],
    light: seagrass[400],
    contrastText: '#000000',
  },
  chartSeries3: {
    main: gold[500],
    dark: gold[600],
    light: gold[400],
    contrastText: '#000000',
  },
  chartSeries4: {
    main: bnteal[400],
    dark: bnteal[500],
    light: bnteal[300],
    contrastText: '#000000',
  },
  chartSeries5: {
    main: persimmon[500],
    dark: persimmon[600],
    light: persimmon[400],
    contrastText: '#000000',
  },
  chartSeries6: {
    main: nxtBlue[500],
    dark: nxtBlue[600],
    light: nxtBlue[400],
    contrastText: '#000000',
  },
  chartSeries7: {
    main: orangered[400],
    dark: orangered[500],
    light: orangered[300],
    contrastText: '#000000',
  },
  chartSeries8: {
    main: deepPurple[300],
    dark: deepPurple[400],
    light: deepPurple[200],
    contrastText: '#ffffff',
  },
  chartSeries9: {
    main: seagrass[300],
    dark: seagrass[400],
    light: seagrass[200],
    contrastText: '#ffffff',
  },
}
