import type { Meta, StoryObj } from '@storybook/react'
import React, { useMemo, useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

interface ColorVars {
  [category: string]: {
    [key: string]: string
  }
}

// Define types for color handling
type ColorObject = {
  main?: string
  light?: string
  dark?: string
  [key: string]: any
}

type ColorValue = string | ColorObject | undefined | null

/**
 * Converts a color value to a usable string format
 * Handles different color formats including:
 * - Direct color strings (hex, rgb, hsl)
 * - MUI theme color objects (with main, light, dark properties)
 * - CSS variables
 * - Undefined/null values with fallbacks
 */
const getColorString = (color: ColorValue): string => {
  // Handle null or undefined
  if (color === null || color === undefined) {
    return '#000000' // Default fallback
  }

  // If the color is from the theme object, it will have a CSS variable reference
  if (typeof color === 'string' && color.startsWith('var(')) {
    return color
  }

  // For theme palette objects, extract the CSS variable name
  if (typeof color === 'object') {
    // The theme object should contain the CSS variable reference
    if (color.cssVariable) {
      return `var(${color.cssVariable})`
    }
    // If no CSS variable is found but there's a color value, use that as fallback
    if (color.main) {
      return color.main
    }
  }

  // For direct string values (like hex colors)
  if (typeof color === 'string') {
    return color
  }

  return '#000000'
}

interface ColorSwatchProps {
  color: string
  label: string
}

const ColorSwatch = ({ color, label }: ColorSwatchProps) => {
  const processedColor = getColorString(color)
  const isVariable = processedColor.startsWith('var(--')
  const variableName = isVariable ? processedColor.match(/var\((.*?)\)/)?.[1] : null

  // For displaying a useful color value
  const [computedColor, setComputedColor] = React.useState<string>('')

  React.useEffect(() => {
    // Skip in non-browser environments
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    // Create a temporary element to compute the actual color
    const tempEl = document.createElement('div')
    tempEl.style.display = 'none'
    tempEl.style.backgroundColor = processedColor
    document.body.appendChild(tempEl)

    // Get the computed style
    const computedStyle = window.getComputedStyle(tempEl)
    const rgbColor = computedStyle.backgroundColor

    // Remove the temporary element
    document.body.removeChild(tempEl)

    setComputedColor(rgbColor)
  }, [processedColor])

  return (
    <Box sx={{ width: '20%', minWidth: 120, padding: 1 }}>
      <Paper variant="outlined" sx={{ p: 1 }}>
        <Stack spacing={0}>
          <Box
            sx={{
              width: '100%',
              height: 120,
              backgroundColor: processedColor,
              borderRadius: 1,
            }}
          />
          <Stack spacing={0} sx={{ p: 0.5 }}>
            <Typography
              variant="caption"
              fontWeight="medium"
              sx={{ wordWrap: 'break-word' }}
            >
              {label}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                wordWrap: 'break-word',
                fontSize: '0.65rem',
                color: 'text.secondary',
              }}
            >
              {computedColor || processedColor}
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
  colors: Record<string, string>
}

const ColorGroup = ({ title, subtitle, colors }: ColorGroupProps) => {
  const preferredShadeOrder = ['main', 'dark', 'light', 'contrastText']

  const sortedColorEntries = Object.entries(colors).sort(([keyA], [keyB]) => {
    // Extract the shade part of the key (e.g., 'main' from 'primary.main')
    const shadeA = keyA.substring(keyA.lastIndexOf('.') + 1)
    const shadeB = keyB.substring(keyB.lastIndexOf('.') + 1)

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
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        {subtitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: -1, // Negative margin to counteract the padding in ColorSwatch
        }}
      >
        {sortedColorEntries.map(([fullKey, colorValue]) => {
          const shadeLabel = fullKey.substring(fullKey.lastIndexOf('.') + 1)
          return <ColorSwatch key={fullKey} color={colorValue} label={shadeLabel} />
        })}
      </Box>
    </Box>
  )
}

const ColorGuide = () => {
  const theme = useTheme()
  const [cssVars, setCssVars] = useState<ColorVars>({})

  const getPaletteColors = (palette: any, prefix: string = '') => {
    const colors: Record<string, string> = {}

    Object.entries(palette).forEach(([key, value]) => {
      // Skip if value is null/undefined, key contains "Channel", or key is "mode"
      if (!value || key.includes('Channel') || key === 'mode') return

      // Special handling for action and common palette values
      if (key === 'action' || key === 'common') {
        Object.entries(value).forEach(([actionKey, actionValue]) => {
          if (!actionKey.includes('Channel')) {
            colors[`${key}.${actionKey}`] = `var(--mui-palette-${key}-${actionKey})`
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
              colors[`${key}.${shade}`] = `var(--mui-palette-${key}-${shade})`
            }
          })
        } else {
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            if (
              (typeof nestedValue === 'string' || typeof nestedValue === 'number') &&
              !nestedKey.includes('Channel')
            ) {
              colors[`${key}.${nestedKey}`] = `var(--mui-palette-${key}-${nestedKey})`
            }
          })
        }
      } else if (typeof value === 'string') {
        // Handle direct color values
        colors[key] = `var(--mui-palette-${key})`
      }
    })

    return colors
  }

  // Group colors by category
  const sortedColorGroupEntries = useMemo(() => {
    const allColors = getPaletteColors(theme.palette)
    const prefixGroups: Record<string, Record<string, string>> = {}

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
      'common',
      'error',
      'warning',
      'info',
      'success',
      'action',
      'grey',
      'text',
      'background',
      'divider',
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
    <Box sx={{ p: 3, bgcolor: 'background.default', color: 'text.primary' }}>
      <Typography variant="pageTitle" component="h1" gutterBottom>
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

      {Object.keys(cssVars).length > 0 && (
        <>
          <Typography variant="h4" sx={{ my: 4 }}>
            CSS Variables
          </Typography>
          {Object.entries(cssVars).map(([category, colors]) => (
            <ColorGroup
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              subtitle={`MUI ${category} variables`}
              colors={colors}
            />
          ))}
        </>
      )}
    </Box>
  )
}

const meta = {
  title: '1. Foundation/Color',
  component: ColorGuide,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
    options: {
      showPanel: false,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/bzKBQnSJutd64yHqyIJvj3/%E2%9D%96-MUI-Variables---Styles?node-id=32-6908&t=459c8TBlbE118Lpj-11',
    },
    previewTabs: {
      canvas: { hidden: false },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
} satisfies Meta<typeof ColorGuide>

export default meta
type Story = StoryObj<typeof meta>

export const Color: Story = {}
