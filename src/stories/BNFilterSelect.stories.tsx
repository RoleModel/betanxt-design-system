import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import BNFilterSelect, { BNFilterSelectProps } from '../components/filter-search/BNFilterSelect'

const filterOptions = [
  { value: 'all', label: 'All Items' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
]

type Story = StoryObj<typeof BNFilterSelect>

const meta: Meta<typeof BNFilterSelect> = {
  title: 'Custom Components/BNFilterSelect',
  component: BNFilterSelect,
  parameters: {
    layout: 'padded',
  },
  args: {
    options: filterOptions,
    value: 'all',
  },
}

export default meta

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value)

    return (
      <BNFilterSelect
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
        aria-label="Status filter"
      />
    )
  },
}

export const WithCustomStyling: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value)

    return (
      <BNFilterSelect
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
        aria-label="Custom styled filter"
        sx={{
          minWidth: 150,
          '.MuiSelect-select': {
            fontWeight: 'bold',
            color: 'primary.main',
          },
        }}
      />
    )
  },
}

export const InFilterSearchContext: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value)

    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: 40,
          borderRadius: 1000,
          padding: '0 8px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #e0e0e0',
          gap: 16,
        }}
      >
        <BNFilterSelect
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
            args.onChange?.(newValue)
          }}
          aria-label="Filter in context"
        />
        <div style={{ borderLeft: '1px solid #e0e0e0', height: 24 }} />
        <span style={{ fontSize: 14, color: '#666' }}>Search...</span>
      </div>
    )
  },
}
