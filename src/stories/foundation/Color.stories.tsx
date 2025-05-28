import { addons } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useMemo, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Import brand tokens
import {
  bnblue,
  orangered,
  persimmon,
  seagrass,
} from '../../themes/base/palette-tokens/brand-tokens'

interface ColorVars {
  [category: string]: {
    [key: string]: string
  }
}

// Define types for color handling
type ColorDef = {
  type: 'token' | 'var' | 'literal'
  value: string
  displayValue?: string
}

interface ColorSwatchProps {
  colorDef: ColorDef
  label: string
}

const ColorSwatch = ({ colorDef, label }: ColorSwatchProps) => {
  const theme = useTheme()
  const [textForValueDisplay, setTextForValueDisplay] = useState<string>('')
  const [actualMuiMode, setActualMuiMode] = React.useState(theme.palette.mode)

  useEffect(() => {
    const channel = addons.getChannel()
    const handleModeChange = (newMode: string) => {
      if (newMode === 'light' || newMode === 'dark') {
        if (actualMuiMode !== newMode) {
          setActualMuiMode(newMode)
        }
      }
    }
    channel.on('mui-theme-mode-changed', handleModeChange)
    return () => {
      channel.off('mui-theme-mode-changed', handleModeChange)
    }
  }, [label, actualMuiMode])

  useEffect(() => {
    if (colorDef.type === 'token') {
      setTextForValueDisplay(colorDef.displayValue || colorDef.value)
    } else if (colorDef.type === 'literal') {
      setTextForValueDisplay(colorDef.displayValue || colorDef.value)
    } else if (colorDef.type === 'var') {
      const variableName = colorDef.value.match(/var\((.*?)\)/)?.[1]
      if (variableName && typeof window !== 'undefined' && document?.documentElement) {
        const rootStyle = window.getComputedStyle(document.documentElement)
        const resolvedValue = rootStyle.getPropertyValue(variableName).trim()
        setTextForValueDisplay(resolvedValue || colorDef.value)
      } else {
        setTextForValueDisplay(colorDef.value)
      }
    } else {
      setTextForValueDisplay(colorDef.value)
    }
  }, [colorDef, actualMuiMode, theme.palette.mode])

  return (
    <Box sx={{ width: '20%', minWidth: 180 }}>
      <Paper variant="outlined" sx={{ p: 0.5, borderRadius: 2.5 }}>
        <Stack spacing={0}>
          <Box
            sx={{
              width: '100%',
              height: 140,
              position: 'relative',
              borderRadius: 2,
              backgroundColor: colorDef.value,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography
              variant="caption"
              fontWeight={500}
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                paddingInline: 0.5,
                paddingBlock: 0.25,
                borderRadius: 1,
                backgroundColor: 'common.black',
                wordWrap: 'break-word',
                color: 'common.white',
              }}
            >
              {textForValueDisplay}
            </Typography>
          </Box>
          <Stack spacing={0} sx={{ px: 2, py: 2 }}>
            <Typography
              variant="caption"
              fontWeight="medium"
              sx={{ wordWrap: 'break-word' }}
            >
              {label}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}

interface ColorGroupProps {
  title: string
  subtitle: string
  colors: Record<string, ColorDef>
}

const ColorGroup = ({ title, subtitle, colors }: ColorGroupProps) => {
  const preferredShadeOrder = ['main', 'dark', 'light', 'contrastText']

  const sortedColorEntries = Object.entries(colors).sort(([keyA], [keyB]) => {
    // Extract the shade part of the key (e.g., 'main' from 'primary.main')
    // For Alert group, keyA/keyB will be the full variable name like "Alert.--mui-palette-Alert-errorColor"
    const shadeA = title === 'Alert' ? keyA : keyA.substring(keyA.lastIndexOf('.') + 1)
    const shadeB = title === 'Alert' ? keyB : keyB.substring(keyB.lastIndexOf('.') + 1)

    const indexA = preferredShadeOrder.indexOf(shadeA)
    const indexB = preferredShadeOrder.indexOf(shadeB)

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB // Both are in preferred order
    }
    if (indexA !== -1) {
      return -1 // A is preferred, B is not
    }
    if (indexB !== -1) {
      return 1 // B is preferred, A is not
    }
    return shadeA.localeCompare(shadeB) // Alphabetical for others
  })

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {subtitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {sortedColorEntries.map(([fullKey, colorValue]) => {
          let labelForSwatch: string
          if (title === 'Alert') {
            // For Alert group, fullKey is "Alert.--mui-palette-Alert-errorColor", extract the var name
            labelForSwatch = fullKey.substring(fullKey.indexOf('.') + 1)
          } else {
            // For other groups, colorValue is "var(--mui-palette-primary-main)". Extract the var name.
            const match = (colorValue.value as string).match(/var\((.*?)\)/)
            labelForSwatch = match && match[1] ? match[1] : fullKey // Fallback to fullKey if not a var string
          }

          return (
            <ColorSwatch key={fullKey} colorDef={colorValue} label={labelForSwatch} />
          )
        })}
      </Box>
    </Box>
  )
}

const ColorGuide = () => {
  const theme = useTheme()

  const getPaletteColors = (palette: any, prefix: string = '') => {
    const colors: Record<string, ColorDef> = {}

    // Define Alert CSS variables to be documented, mirroring MuiAlert.ts light mode definitions.
    const alertColorDefinitions: Record<string, ColorDef> = {
      // Standard Variants (from MuiAlert.ts, light mode)
      '--mui-palette-Alert-successStandardBg': {
        type: 'token',
        value: seagrass[100],
        displayValue: 'seagrass[100]',
      },
      '--mui-palette-Alert-successColor': {
        type: 'token',
        value: seagrass[600],
        displayValue: 'seagrass[600]',
      },
      '--mui-palette-Alert-errorStandardBg': {
        type: 'token',
        value: orangered[100],
        displayValue: 'orangered[100]',
      },
      '--mui-palette-Alert-errorColor': {
        type: 'token',
        value: orangered[700],
        displayValue: 'orangered[700]',
      },
      '--mui-palette-Alert-warningStandardBg': {
        type: 'token',
        value: persimmon[100],
        displayValue: 'persimmon[100]',
      },
      '--mui-palette-Alert-warningColor': {
        type: 'token',
        value: persimmon[800],
        displayValue: 'persimmon[800]',
      },
      '--mui-palette-Alert-infoStandardBg': {
        type: 'token',
        value: bnblue[100],
        displayValue: 'bnblue[100]',
      },
      '--mui-palette-Alert-infoColor': {
        type: 'token',
        value: bnblue[600],
        displayValue: 'bnblue[600]',
      },

      // Filled Variants (from MuiAlert.ts, light mode)
      '--mui-palette-Alert-successFilledBg': {
        type: 'var',
        value: 'var(--mui-palette-success-main)',
      },
      '--mui-palette-Alert-successFilledColor': {
        type: 'var',
        value: 'var(--mui-palette-success-contrastText)',
      },
      '--mui-palette-Alert-errorFilledBg': {
        type: 'var',
        value: 'var(--mui-palette-error-main)',
      },
      '--mui-palette-Alert-errorFilledColor': {
        type: 'var',
        value: 'var(--mui-palette-error-contrastText)',
      },
      '--mui-palette-Alert-warningFilledBg': {
        type: 'var',
        value: 'var(--mui-palette-warning-main)',
      },
      '--mui-palette-Alert-warningFilledColor': {
        type: 'var',
        value: 'var(--mui-palette-warning-contrastText)',
      },
      '--mui-palette-Alert-infoFilledBg': {
        type: 'var',
        value: 'var(--mui-palette-info-main)',
      },
      '--mui-palette-Alert-infoFilledColor': {
        type: 'var',
        value: 'var(--mui-palette-info-contrastText)',
      },
    }

    Object.entries(alertColorDefinitions).forEach(([varName, def]) => {
      // If the user wants to skip icon colors, filter them here
      if (!varName.includes('IconColor')) {
        colors[`Alert.${varName}`] = def
      }
    })

    // Handling for general palette colors
    Object.entries(palette).forEach(([key, value]) => {
      if (!value || key.includes('Channel') || key === 'mode' || key === 'Alert') return

      if (key === 'action' || key === 'common') {
        Object.entries(value).forEach(([actionKey, actionValue]) => {
          if (!actionKey.includes('Channel')) {
            colors[`${key}.${actionKey}`] = {
              type: 'var',
              value: `var(--mui-palette-${key}-${actionKey})`,
            }
          }
        })
        return
      }

      if (key === 'chartSeries') {
        Object.entries(value).forEach(([seriesKey, seriesValue]) => {
          if (typeof seriesValue === 'object' && seriesValue !== null) {
            Object.entries(seriesValue).forEach(([shadeKey, shadeValue]) => {
              // Only process the 'main' shade for chart series colors
              if (
                shadeKey === 'main' &&
                shadeValue &&
                typeof shadeValue === 'string' &&
                !shadeKey.includes('Channel')
              ) {
                colors[`${key}.${seriesKey}.${shadeKey}`] = {
                  type: 'var',
                  value: `var(--mui-palette-${key}-${seriesKey}-${shadeKey})`,
                }
              }
            })
          }
        })
        return
      }

      if (typeof value === 'object') {
        if (
          'main' in value ||
          'light' in value ||
          'dark' in value ||
          'contrastText' in value
        ) {
          Object.entries(value).forEach(([shade, shadeValue]) => {
            if (shadeValue && !shade.includes('Channel')) {
              colors[`${key}.${shade}`] = {
                type: 'var',
                value: `var(--mui-palette-${key}-${shade})`,
              }
            }
          })
        } else {
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            if (
              (typeof nestedValue === 'string' || typeof nestedValue === 'number') &&
              !nestedKey.includes('Channel')
            ) {
              colors[`${key}.${nestedKey}`] = {
                type: 'var',
                value: `var(--mui-palette-${key}-${nestedKey})`,
              }
            }
          })
        }
      } else if (typeof value === 'string') {
        colors[key] = { type: 'var', value: `var(--mui-palette-${key})` }
      }
    })

    return colors
  }

  // Group colors by category
  const sortedColorGroupEntries = useMemo(() => {
    const allColors = getPaletteColors(theme.palette)
    const prefixGroups: Record<string, Record<string, ColorDef>> = {}

    Object.entries(allColors).forEach(([key, value]) => {
      const dotIndex = key.indexOf('.')
      const prefix = dotIndex > -1 ? key.substring(0, dotIndex) : key
      if (!prefixGroups[prefix]) {
        prefixGroups[prefix] = {}
      }
      prefixGroups[prefix][key] = value
    })

    const muiSortOrder = [
      'primary',
      'secondary',
      'tertiary',
      'error',
      'warning',
      'info',
      'success',
      'text',
      'background',
      'divider',
      'common',
      'action',
      'grey',
    ]

    return Object.entries(prefixGroups).sort(([prefixA], [prefixB]) => {
      const indexA = muiSortOrder.indexOf(prefixA)
      const indexB = muiSortOrder.indexOf(prefixB)

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB // Both are in predefined order
      }
      if (indexA !== -1) {
        return -1 // A is predefined, B is not
      }
      if (indexB !== -1) {
        return 1 // B is predefined, A is not
      }
      return prefixA.localeCompare(prefixB) // Neither is predefined, sort alphabetically
    })
  }, [theme])

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" fontWeight="700" component="h1" gutterBottom>
        BetaNXT UI Colors
      </Typography>

      {sortedColorGroupEntries.map(([prefix, colors]) => (
        <ColorGroup
          key={prefix}
          title={prefix}
          subtitle={`${Object.keys(colors).length} color variant${Object.keys(colors).length > 1 ? 's' : ''}`}
          colors={colors}
        />
      ))}
    </Box>
  )
}

const meta = {
  title: 'Foundation/Color',
  component: ColorGuide,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/bzKBQnSJutd64yHqyIJvj3/%E2%9D%96-MUI-Variables---Styles?node-id=32-6908&t=459c8TBlbE118Lpj-11',
    },
  },
} satisfies Meta<typeof ColorGuide>

export default meta
type Story = StoryObj<typeof meta>

export const Color: Story = {}
