import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { Box, Divider, Typography } from '@mui/material'
import type { TypographyProps } from '@mui/material/Typography'

import { BNTypographyPair as BNTypographyPairComponent } from '../components/BNTypographyPair'

type TypographyVariant = NonNullable<TypographyProps['variant']>

interface FlatTypographyPairArgs {
  direction?: 'row' | 'column'
  spacing?: number
  alignItems?: string
  justifyContent?: string
  split?: boolean
  fullWidth?: boolean
  primary?: {
    text: React.ReactNode
    variant?: string
    fontWeight?: string | number
    color?: string
    gutterBottom?: boolean
    component?: string
  }
  primaryText: React.ReactNode
  primaryVariant?: string
  primaryFontWeight?: string | number
  primaryColor?: string
  primaryGutterBottom?: boolean
  secondary?: {
    text: React.ReactNode
    variant?: string
    fontWeight?: string | number
    color?: string
    gutterBottom?: boolean
    component?: string
  }
  secondaryText?: React.ReactNode
  secondaryVariant?: string
  secondaryFontWeight?: string | number
  secondaryColor?: string
  secondaryGutterBottom?: boolean
}

type CustomMeta = Meta<FlatTypographyPairArgs>

const meta = {
  title: 'Custom Components/BNTypographyPair',
  component: BNTypographyPairComponent,
  argTypes: {
    split: {
      control: 'boolean',
      description:
        'Split the text elements into two columns, align secondary text to the right',
    },
    fullWidth: {
      control: 'boolean',
      description:
        'Make the text elements take the full width of the container (default: true)',
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Layout direction of the text elements',
    },
    spacing: {
      control: 'select',
      options: [0, 0.5, 1, 2, 3, 4],
      description: 'Spacing between primary and secondary text',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: 'Vertical alignment of items',
    },
    justifyContent: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Horizontal distribution of items',
    },
    primaryText: {
      control: 'text',
      description: 'Primary text content',
    },
    primaryVariant: {
      control: 'select',
      options: [
        'body3',
        'body2',
        'body1',
        'subtitle2',
        'subtitle1',
        'h6',
        'h5',
        'h4',
        'h3',
        'h2',
        'h1',
        'pageTitle',
        'tableTitle',
        'dataCell',
        'dataHeader',
        'hero',
        'input',
        'navTab',
        'appTitle',
      ],
      description: 'Typography variant for primary text',
    },
    primaryFontWeight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Font weight for primary text',
    },
    primaryColor: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'text.primary',
        'text.secondary',
      ],
      description: 'Text color for primary text',
    },
    primaryGutterBottom: {
      control: 'boolean',
      description: 'Adds bottom margin to primary text',
      name: 'Primary Gutter Bottom',
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text content',
    },
    secondaryVariant: {
      control: 'select',
      options: [
        'body3',
        'body2',
        'body1',
        'subtitle2',
        'subtitle1',
        'h6',
        'h5',
        'h4',
        'h3',
        'h2',
        'h1',
        'pageTitle',
        'tableTitle',
        'dataCell',
        'dataHeader',
        'hero',
        'input',
        'navTab',
        'appTitle',
      ],
      description: 'Typography variant for secondary text',
    },
    secondaryFontWeight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Font weight for secondary text',
    },
    secondaryColor: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'text.primary',
        'text.secondary',
      ],
      description: 'Text color for secondary text',
    },
    secondaryGutterBottom: {
      control: 'boolean',
      description: 'Adds bottom margin to secondary text',
      name: 'Secondary Gutter Bottom',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component for displaying related text pairs with configurable typography styles.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=16545-5049&t=xDjojHY8OQPYiujl-11',
    },
    layout: 'centered',
  },
} as CustomMeta

export default meta

type Story = StoryObj<typeof meta>

// Helper function to convert flat args to the component's expected structure
const createBNTypographyPairProps = (args: FlatTypographyPairArgs) => {
  const {
    primaryText,
    primaryVariant,
    primaryFontWeight,
    primaryColor,
    primaryGutterBottom,
    secondaryText,
    secondaryVariant,
    secondaryFontWeight,
    secondaryColor,
    secondaryGutterBottom,
    split,
    fullWidth,
    ...rest
  } = args

  // Valid MUI Typography variants
  const validVariants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'inherit',
    // Custom variants
    'body3',
    'pageTitle',
    'tableTitle',
    'dataCell',
    'dataHeader',
    'hero',
    'input',
    'navTab',
    'appTitle',
    'condensed',
  ]

  // Safe variant casting
  const getPrimaryVariant = () => {
    return validVariants.includes(primaryVariant as string)
      ? (primaryVariant as TypographyVariant)
      : undefined
  }

  const getSecondaryVariant = () => {
    return validVariants.includes(secondaryVariant as string)
      ? (secondaryVariant as TypographyVariant)
      : undefined
  }

  const result = {
    ...rest,
    split,
    fullWidth,
    primary: {
      text: primaryText,
      variant: getPrimaryVariant(),
      fontWeight: primaryFontWeight,
      color: primaryColor,
      gutterBottom: primaryGutterBottom,
    },
    secondary: secondaryText
      ? {
          text: secondaryText,
          variant: getSecondaryVariant(),
          fontWeight: secondaryFontWeight,
          color: secondaryColor,
          gutterBottom: secondaryGutterBottom,
        }
      : undefined,
  }

  return result
}

export const BNTypographyPair: Story = {
  name: 'BNTypographyPair',
  args: {
    direction: 'column',
    spacing: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    primaryText: 'Primary Text',
    primaryVariant: 'subtitle1',
    primaryFontWeight: 'medium',
    primaryColor: 'text.primary',
    primaryGutterBottom: false,
    fullWidth: true,
    secondaryText: 'Secondary Text',
    secondaryVariant: 'body1',
    secondaryFontWeight: 'regular',
    secondaryColor: 'text.secondary',
    secondaryGutterBottom: false,
  },
  render: (args: any) => {
    const props = createBNTypographyPairProps(args as FlatTypographyPairArgs)
    return <BNTypographyPairComponent {...props} />
  },
}

export const BNTypographyPairSplit: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  name: 'BNTypographyPair Split',
  args: {
    direction: 'row',
    spacing: 0,
    split: true,
    fullWidth: true,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    primaryText: 'Primary Text',
    primaryVariant: 'body2',
    primaryFontWeight: 'medium',
    primaryColor: 'text.primary',
    primaryGutterBottom: false,
    secondaryText: 'Secondary Text',
    secondaryVariant: 'body2',
    secondaryFontWeight: 'regular',
    secondaryColor: 'text.secondary',
    secondaryGutterBottom: false,
  },
  render: (args: any) => {
    const props = createBNTypographyPairProps(args as FlatTypographyPairArgs)
    return (
      <Box sx={{ width: '100%', p: 8 }}>
        <Typography variant="body1" gutterBottom>
          Demo <code>split</code> and <code>fullwidth</code> functionality
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <BNTypographyPairComponent {...props} />
        <BNTypographyPairComponent {...props} />
      </Box>
    )
  },
}

export const PageTitle: Story = {
  name: 'Page Title',
  args: {
    direction: 'column',
    spacing: 0.5,
    primaryText: 'Page Title',
    primaryVariant: 'pageTitle',
    primaryColor: 'text.primary',
    primaryGutterBottom: false,
    secondaryText:
      'This is a description that provides additional context about the page content.',
    secondaryVariant: 'body2',
    secondaryFontWeight: 'regular',
    secondaryColor: 'text.primary',
    secondaryGutterBottom: true,
  },
  render: (args: any) => {
    const props = createBNTypographyPairProps(args as FlatTypographyPairArgs)
    return (
      <Box sx={{ width: '100%', p: 8 }}>
        <BNTypographyPairComponent {...props} />
      </Box>
    )
  },
}
