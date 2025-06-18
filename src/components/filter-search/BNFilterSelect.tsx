'use client'

import React from 'react'

import { MenuItem, Select, type SelectProps } from '@mui/material'

export interface FilterOption {
  value: string
  label: string
}

export interface BNFilterSelectProps extends Omit<SelectProps, 'onChange' | 'children'> {
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  'aria-label'?: string
}

const BNFilterSelect = React.forwardRef<HTMLDivElement, BNFilterSelectProps>(
  ({ options, value, onChange, 'aria-label': ariaLabel, ...selectProps }, ref) => {
    return (
      <Select
        ref={ref}
        {...selectProps}
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        variant="standard"
        disableUnderline
        inputProps={{ 'aria-label': ariaLabel }}
        sx={{
          minWidth: 110,
          '.MuiSelect-select': {
            fontSize: 14,
            paddingBottom: '0px',
            '&:focus-visible': {
              boxShadow: (theme) => `0px 1px 0px 0px ${theme.vars.palette.primary.main}`,
            },
          },
          ...selectProps.sx,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    )
  }
)

BNFilterSelect.displayName = 'BNFilterSelect'

export default BNFilterSelect
