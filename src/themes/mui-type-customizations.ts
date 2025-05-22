import type {} from '@mui/lab/themeAugmentation'
import type { PaletteColor, PaletteColorOptions } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import type { LayoutVars } from './base/layout'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: PaletteColorOptions
    tertiary: PaletteColorOptions
    micGrey: PaletteColorOptions
    inputOutlinedEnabledFill: string
    appBarPrimary: {
      defaultFill: string
      defaultContrast: string
      tabIndicator: string
      hover: string
    }
    appBarSecondary: {
      defaultFill: string
      defaultContrast: string
      tabIndicator: string
      hover: string
    }
    logoFill: string
    logoPoweredBy: string
    tableHeaderRow: {
      restingFill: string
      border: string
    }
    tableCellRow: {
      fill: string
      zebraFill: string
    }
    dataGridDefaultFill: string
    link: string
    dataGridHeaderRow: {
      restingFill: string
      border: string
    }
    dataGridSubHeader: {
      backgroundFill: string
    }
    dataGridCellRow: {
      border: string
    }
    dataGridPagination: {
      backgroundFill: string
      border: string
    }
    values: {
      negative: string
      positive: string
      positiveOnDark: string
      negativeOnDark: string
    }
    footer: {
      background: string
    }
    chartSeries: [
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
    ]
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions
    micGrey?: PaletteColorOptions
    tertiary?: PaletteColorOptions
    inputOutlinedEnabledFill?: string
    inputOutlinedEnabledBorder?: string
    inputOutlinedHoverBorder?: string
    footer?: {
      background?: string
    }
    appBarPrimary?: {
      defaultContrast?: string
      hover?: string
      defaultFill?: string
      tabIndicator?: string
    }
    appBarSecondary?: {
      defaultFill?: string
      defaultContrast?: string
      tabIndicator?: string
      hover?: string
    }
    appswitcher?: {
      background?: string
      hover?: string
      contrastText?: string
    }
    tableHeaderRow?: {
      restingFill?: string
      border?: string
    }
    tableCellRow?: {
      fill?: string
      zebraFill?: string
    }
    link?: string
    dataGridHeaderRow?: {
      restingFill?: string
      border?: string
    }
    dataGridSubHeader?: {
      backgroundFill?: string
    }
    dataGridCellRow?: {
      border?: string
    }
    dataGridPagination?: {
      backgroundFill?: string
      border?: string
    }
    dataGridDefaultFill?: string
    footerBackground?: string
    logoFill?: string
    logoPoweredBy?: string
    values?: {
      negative?: string
      positive?: string
      positiveOnDark?: string
      negativeOnDark?: string
    }
    chartSeries?: [
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
      PaletteColor,
    ]
  }

  interface Theme {
    layout?: LayoutVars
  }

  interface ThemeOptions {
    layout?: LayoutVars
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

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    standard?: true;
    filled?: true;
    outlined?: true;
  }
  interface AlertProps {
    bordertop?: string | boolean;
    centertext?: string | boolean;
    showicon?: string | boolean;
}

  interface AlertOwnProps {
    bordertop?: string;
    centertext?: string;
    showicon?: string;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    neutral: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsVariantOverrides {
    report: true
  }

  interface ToggleButtonOwnProps {
    variant?: 'report'
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsVariantOverrides {
    tall: true
  }

  interface ToggleButtonGroupProps {
    variant?: 'tall'
  }
}
