import type { ThemeOptions, TypographyOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyOptions {
    fontFamilyCondensed: string
  }

  interface Typography {
    fontFamilyCondensed: string
  }

  interface TypographyVariants {
    appTitle: React.CSSProperties
    body3: React.CSSProperties
    condensed: React.CSSProperties
    dataCell: React.CSSProperties
    dataHeader: React.CSSProperties
    hero: React.CSSProperties
    input: React.CSSProperties
    navTab: React.CSSProperties
    pageTitle: React.CSSProperties
    tableTitle: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    appTitle: React.CSSProperties
    body3: React.CSSProperties
    condensed: React.CSSProperties
    dataCell: React.CSSProperties
    dataHeader: React.CSSProperties
    hero: React.CSSProperties
    input: React.CSSProperties
    navTab: React.CSSProperties
    pageTitle: React.CSSProperties
    tableTitle: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    appTitle: true
    body3: true
    condensed: true
    dataCell: true
    dataHeader: true
    hero: true
    input: true
    navTab: true
    pageTitle: true
    tableTitle: true
  }
}

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'var(--font-roboto)',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '2rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.125,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.167,
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.25,
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.25,
  },
  h6: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.286,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1.125rem',
    letterSpacing: '0.15px',
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '1rem',
    letterSpacing: '0.15px',
    lineHeight: 1.425,
  },
  body3: {
    fontSize: '0.875rem',
    letterSpacing: '0.15px',
    lineHeight: 1.429,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '0.4px',
    lineHeight: 1.5,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 2.5,
  },
  input: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: 1.286,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    textTransform: 'none',
  },
  dataCell: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: 1.071,
  },
  dataHeader: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.071,
  },
  navTab: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: 1.286,
  },
  hero: {
    fontSize: '2.2rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.5,
  },
  pageTitle: {
    fontFamily: 'var(--font-roboto-condensed)',
    fontSize: '2rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.125,
  },
  appTitle: {
    fontFamily: 'var(--font-roboto-condensed)',
    fontSize: '2rem',
    fontWeight: 500,
    letterSpacing: '0.15px',
    lineHeight: 1.25,
  },
  condensed: {
    fontFamily: 'var(--font-roboto-condensed)',
  },
  tableTitle: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.2,
  },
}
