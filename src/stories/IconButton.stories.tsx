import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { FileDownloadOutlined } from '@mui/icons-material'
import { IconButton as IconButtonComponent } from '@mui/material'

const meta: Meta<typeof IconButtonComponent> = {
  title: 'Components/IconButton',
  component: IconButtonComponent,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=6557-38545&t=3M0Qvar3GoQ4zIgG-4',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'inherit',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
    'aria-label': {
      control: 'text',
    },
  },
  args: {
    'aria-label': 'Icon Button',
    children: 'Icon',
    color: 'default',
    size: 'medium',
  },
}

export default meta
type Story = StoryObj<typeof IconButtonComponent>

export const IconButton: Story = {
  args: {
    'aria-label': 'Icon Button',
    children: '<FileDownloadOutlined />',
    color: 'default',
    size: 'medium',
  },
  render: (args) => (
    <IconButtonComponent
      {...args}
      // edge="end"
      children={args.children ? <FileDownloadOutlined /> : undefined}
    />
  ),
}

export const DefaultColor: Story = {
  name: 'Default Color (action.active)',
  args: {
    color: 'default',
    size: 'large',
  },
  render: (args) => <IconButtonComponent {...args} children={<FileDownloadOutlined />} />,
}
