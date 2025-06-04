import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { FileDownloadOutlined } from '@mui/icons-material'
import { Button as ButtonComponent } from '@mui/material'

const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    // docs: {
    //   page: null,
    // },
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11011-143217&t=njdQUyzVttt456w5-11',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    startIcon: {
      control: 'boolean',
    },
    endIcon: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'large',
    startIcon: false,
    endIcon: false,
  },
}

export default meta
type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  args: {
    variant: 'contained',
    children: 'Contained',
  },
  render: (args) => (
    <ButtonComponent
      {...args}
      startIcon={args.startIcon ? <FileDownloadOutlined /> : undefined}
      endIcon={args.endIcon ? <FileDownloadOutlined /> : undefined}
    />
  ),
}
