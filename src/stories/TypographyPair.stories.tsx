import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import type { TypographyProps } from '@mui/material/Typography'

import { TypographyPair as TypographyPairComponent } from '../components/TypographyPair'

type TypographyVariant = NonNullable<TypographyProps['variant']>

interface FlatTypographyPairArgs {
  direction?: 'row' | 'column'
  spacing?: number
  alignItems?: string
  justifyContent?: string

  primaryText: React.ReactNode
  primaryVariant?: string
  primaryFontWeight?: string | number
  primaryColor?: string
  primaryGutterBottom?: boolean

  secondaryText?: React.ReactNode
  secondaryVariant?: string
  secondaryFontWeight?: string | number
  secondaryColor?: string
  secondaryGutterBottom?: boolean
}

type CustomMeta = Meta<FlatTypographyPairArgs>

const meta = {
  title: 'Components/TypographyPair',
  component: TypographyPairComponent,
  argTypes: {
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
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=14686-97372&t=nNrQpChNXPORG1Z5-4',
    },
    layout: 'centered',
  },
} as CustomMeta

export default meta

type Story = StoryObj<typeof meta>

// Helper function to convert flat args to the component's expected structure
const createTypographyPairProps = (args: FlatTypographyPairArgs) => {
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

  return {
    ...rest,
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
}

export const TypographyPair: Story = {
  name: 'TypographyPair',
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
    secondaryText: 'Secondary Text',
    secondaryVariant: 'body1',
    secondaryFontWeight: 'regular',
    secondaryColor: 'text.secondary',
    secondaryGutterBottom: false,
  },
  render: (args: any) => {
    const props = createTypographyPairProps(args as FlatTypographyPairArgs)
    return <TypographyPairComponent {...props} />
  },
}

export const PageTitle: Story = {
  name: 'Example Usage',
  args: {
    direction: 'column',
    spacing: 0.5,
    primaryText: 'Page Title',
    primaryVariant: 'pageTitle',
    component: 'h1',
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
    const props = createTypographyPairProps(args as FlatTypographyPairArgs)
    return <TypographyPairComponent {...props} />
  },
}
