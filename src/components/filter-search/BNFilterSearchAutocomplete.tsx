'use client'

import React from 'react'

import { Autocomplete, type AutocompleteProps, TextField } from '@mui/material'

export interface BNFilterSearchAutocompleteProps<
  T extends { name: string } = { name: string },
> extends Omit<
    AutocompleteProps<T | string, false, false, true>,
    'renderInput' | 'onInputChange'
  > {
  placeholder?: string
  inputValue?: string
  onInputChange?: (value: string) => void
  renderOptionLink?: (option: T) => React.ReactNode
  textFieldProps?: React.ComponentProps<typeof TextField>
}
export function getOptionLabelSafe<T extends { name: string }>(
  option: T | string | any
): string {
  if (typeof option === 'string') return option
  if (option && typeof option === 'object' && 'name' in option) return option.name
  return ''
}

export const BNFilterSearchAutocomplete = <
  T extends { name: string } = { name: string },
>({
  options = [],
  placeholder = 'Search',
  inputValue = '',
  onInputChange,
  renderOptionLink,
  textFieldProps,
  ...autocompleteProps
}: BNFilterSearchAutocompleteProps<T>) => {
  return (
    <Autocomplete
      {...autocompleteProps}
      id="bn-filter-search"
      freeSolo
      includeInputInList
      clearOnEscape
      filterOptions={(options, { inputValue }) => {
        if (!inputValue) return []
        return options.filter((option) => {
          const label = getOptionLabelSafe(option)
          return label.toLowerCase().includes(inputValue.toLowerCase())
        })
      }}
      options={options}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue) => onInputChange?.(newInputValue)}
      onChange={(_event, newValue) => {
        const newLabel = getOptionLabelSafe(newValue)
        onInputChange?.(newLabel)
      }}
      getOptionLabel={getOptionLabelSafe}
      isOptionEqualToValue={(option, value) => {
        return getOptionLabelSafe(option) === getOptionLabelSafe(value)
      }}
      renderOption={(props, option, state) => {
        const { key, ...otherProps } = props
        if (renderOptionLink && typeof option !== 'string') {
          return (
            <li key={key || state.index} {...otherProps}>
              {renderOptionLink(option)}
            </li>
          )
        }
        return (
          <li key={key || state.index} {...otherProps}>
            {getOptionLabelSafe(option)}
          </li>
        )
      }}
      sx={{
        minWidth: 200,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          {...textFieldProps}
          variant="standard"
          placeholder={placeholder}
          sx={{
            '.MuiInputBase-input': {
              marginLeft: 1,
            },
            '& .MuiInputBase-root': {
              fontSize: 14,
            },
            ...textFieldProps?.sx,
          }}
          slotProps={{
            input: {
              ...params.InputProps,
              disableUnderline: true,
              ...textFieldProps?.slotProps?.input,
            },
            ...textFieldProps?.slotProps,
          }}
        />
      )}
    />
  )
}

export default BNFilterSearchAutocomplete
