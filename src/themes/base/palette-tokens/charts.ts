import { deepPurple, pink } from '@mui/material/colors'
import type { PaletteOptions } from '@mui/material/styles'

import { bnteal, gold, nxtBlue, orangered, persimmon, seagrass } from './brand-tokens'

export const chartsLight: PaletteOptions = {
  chartSeries: {
    0: {
      main: nxtBlue[700],
      dark: nxtBlue[800],
      light: nxtBlue[600],
      contrastText: '#ffffff',
    },
    1: {
      main: seagrass[500],
      dark: seagrass[600],
      light: seagrass[400],
      contrastText: '#ffffff',
    },
    2: {
      main: bnteal[400],
      dark: bnteal[500],
      light: bnteal[300],
      contrastText: '#000000',
    },
    3: {
      main: persimmon[600],
      dark: persimmon[700],
      light: persimmon[500],
      contrastText: '#000000',
    },
    4: {
      main: nxtBlue[500],
      dark: nxtBlue[600],
      light: nxtBlue[400],
      contrastText: '#000000',
    },
    5: {
      main: orangered[400],
      dark: orangered[500],
      light: orangered[300],
      contrastText: '#ffffff',
    },
    6: {
      main: deepPurple[400],
      dark: deepPurple[500],
      light: deepPurple[300],
      contrastText: '#000000',
    },
    7: {
      main: seagrass[600],
      dark: seagrass[700],
      light: seagrass[500],
      contrastText: '#ffffff',
    },
    8: {
      main: pink[400],
      dark: pink[500],
      light: pink[300],
      contrastText: '#ffffff',
    },
  },
}

export const chartsDark: PaletteOptions = {
  chartSeries: {
    0: {
      main: nxtBlue[300],
      dark: nxtBlue[400],
      light: nxtBlue[200],
      contrastText: '#000000',
    },
    1: {
      main: seagrass[500],
      dark: seagrass[600],
      light: seagrass[400],
      contrastText: '#000000',
    },
    2: {
      main: gold[500],
      dark: gold[600],
      light: gold[400],
      contrastText: '#000000',
    },
    3: {
      main: bnteal[400],
      dark: bnteal[500],
      light: bnteal[300],
      contrastText: '#000000',
    },
    4: {
      main: persimmon[500],
      dark: persimmon[600],
      light: persimmon[400],
      contrastText: '#000000',
    },
    5: {
      main: nxtBlue[500],
      dark: nxtBlue[600],
      light: nxtBlue[400],
      contrastText: '#000000',
    },
    6: {
      main: orangered[400],
      dark: orangered[500],
      light: orangered[300],
      contrastText: '#000000',
    },
    7: {
      main: deepPurple[300],
      dark: deepPurple[400],
      light: deepPurple[200],
      contrastText: '#ffffff',
    },
    8: {
      main: seagrass[300],
      dark: seagrass[400],
      light: seagrass[200],
      contrastText: '#ffffff',
    },
  },
}
