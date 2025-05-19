import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Typography as TypographyComponent } from '@mui/material'
import type { TypographyProps } from '@mui/material/Typography'

// Force the correct displayName for Typography component
(TypographyComponent as any).displayName = 'Typography';

const meta = {
  title: 'Components/Typography',
  component: TypographyComponent,
  args: {
    children: 'Typography Component',
    variant: 'body1',
    fontWeight: 'normal',
    gutterBottom: false,
    textAlign: 'left',
    color: 'text.primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
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
        'body3',
        'button',
        'caption',
        'overline',
        'appTitle',
        'condensed',
        'hero',
        'pageTitle',
        'stat',
        'tableTitle',
      ],
    },
    fontFamily: {
      control: 'select',
      options: ['Roboto', 'Roboto Condensed'],
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    component: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
    fontWeight: {
      control: 'select',
      options: [300, 400, 500, 700],
    },
    color: {
      control: { type: 'select' },
      options: [
        'text.primary',
        'text.secondary',
        'primary.main',
        'secondary.main',
        'error.main',
        'warning.main',
        'info.main',
        'success.main',
        'inherit',
      ],
      table: {
        type: { summary: 'string' },
      },
    },
    gutterBottom: {
      control: 'boolean',
    },
  },
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Light',
    },
  },
} satisfies Meta<TypographyProps>

export default meta
type Story = StoryObj<TypographyProps>

export const Typography: Story = {
  name: 'Typography',
  render: (args) => <TypographyComponent {...args} />
}
