import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'

type CustomArgs = {
  controlType: 'checkbox' | 'radio'
  label: string
}

const meta: Meta<CustomArgs> = {
  title: 'Components/FormControl',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11011-143217&t=njdQUyzVttt456w5-11',
    },
  },
  argTypes: {
    controlType: {
      control: 'select',
      options: ['checkbox', 'radio'],
    },
    label: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<CustomArgs>

const getControl = (type: 'checkbox' | 'radio') => {
  switch (type) {
    case 'checkbox':
      return <Checkbox />
    case 'radio':
      return <Radio />
    default:
      return <Checkbox />
  }
}

export const Checkboxes: Story = {
  args: {
    label: 'Yes',
    controlType: 'checkbox',
  },
  render: (args) => (
    <FormControl>
      <FormLabel required id="demo-checkbox-group-label">
        Participate
      </FormLabel>

      <FormControlLabel value="yes" control={getControl(args.controlType)} label="Yes" />
      <FormControlLabel value="no" control={getControl(args.controlType)} label="No" />
      <FormControlLabel
        value="undecided"
        control={getControl(args.controlType)}
        label="Undecided"
      />
    </FormControl>
  ),
}
export const Radios: Story = {
  args: {
    label: 'Yes',
    controlType: 'radio',
  },
  render: (args) => (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Participate</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="yes"
          control={getControl(args.controlType)}
          label="Yes"
        />
        <FormControlLabel value="no" control={getControl(args.controlType)} label="No" />
        <FormControlLabel
          value="undecided"
          control={getControl(args.controlType)}
          label="Undecided"
        />
      </RadioGroup>
    </FormControl>
  ),
}
