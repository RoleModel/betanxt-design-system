'use client'

import React, { useState } from 'react'

import { ArrowForward, Search as SearchIcon } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Collapse,
  Divider,
  IconButton,
  TextField,
} from '@mui/material'
import type { AutocompleteProps } from '@mui/material/Autocomplete'
import type { } from '@mui/material/themeCssVarsAugmentation'

import CollapseContentIcon from './icon-collapse-content'
import type { Theme } from '@mui/material/styles'

export interface BNFilterSearchProps<T extends { name: string } = { name: string }>
  extends Omit<AutocompleteProps<T, false, false, true>, 'renderInput'> {
  children?: React.ReactNode
  /** Callback fired when the search input value changes */
  onSearchChange?: (value: string) => void
  /** Placeholder text for the search input */
  placeholder?: string
  /** Controlled search value */
  searchValue?: string
  /** Enable submit search functionality with search icon button */
  useSubmitSearch?: boolean
  /** Display variant - expandable with collapsible filters or static layout */
  variant?: 'expandable' | 'static'
  /** Callback fired when search is submitted via submit button */
  onSubmitSearch?: (value: string) => void
  /** Custom render function for option links in the dropdown */
  renderOptionLink?: (option: T) => React.ReactNode
}

// If the option is a string, return the string (useful for freeSolo or plain string options).
// If the option is an object with a name property, returns the value of option.name.
// If neither,  returns an empty string (as a fallback to avoid errors).
function getOptionLabelSafe<T extends { name: string }>(
  option: T | string | any
): string {
  if (typeof option === 'string') return option
  if (option && typeof option === 'object' && 'name' in option) return option.name
  return ''
}

// Internal component to render the Autocomplete logic
const InternalSearchAutocomplete = <T extends { name: string } = { name: string }>({
  options = [],
  onSearchChange,
  placeholder = 'Search',
  renderOptionLink,
  currentSearchValue,
  internalSetSearchValue,
  onChange: propOnChange,
  ...autocompleteProps
}: Omit<
  BNFilterSearchProps<T>,
  'children' | 'variant' | 'useSubmitSearch' | 'onSubmitSearch' | 'searchValue'
> & {
  currentSearchValue: string
  internalSetSearchValue: (value: string) => void
}) => {
  return (
    <Autocomplete<T, false, false, true>
      {...autocompleteProps}
      freeSolo
      openOnFocus
      clearOnEscape
      options={options}
      getOptionLabel={getOptionLabelSafe}
      sx={{ minWidth: 200, ...autocompleteProps.sx }}
      filterOptions={(filterOptionsParams, { inputValue }) => {
        if (!inputValue) return filterOptionsParams
        return filterOptionsParams.filter((option) => {
          const label = getOptionLabelSafe(option)
          return label.toLowerCase().includes(inputValue.toLowerCase())
        })
      }}
      renderOption={(props, option, state) => {
        const { key, ...otherProps } = props
        const label = getOptionLabelSafe(option)
        if (renderOptionLink && typeof option !== 'string') {
          return (
            <li key={key || state.index} {...otherProps}>
              {renderOptionLink(option)}
            </li>
          )
        }
        return (
          <li key={key || state.index} {...otherProps}>
            {label}
          </li>
        )
      }}
      inputValue={currentSearchValue}
      onInputChange={(_, newInputValue) => {
        if (onSearchChange) {
          onSearchChange(newInputValue)
        }
        internalSetSearchValue(newInputValue)
      }}
      value={currentSearchValue}
      onChange={(_, newValue) => {
        if (typeof newValue === 'string') {
          internalSetSearchValue(newValue)
        } else if (newValue) {
          internalSetSearchValue(newValue.name ?? '')
        } else {
          internalSetSearchValue('')
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          placeholder={placeholder}
          sx={{
            '.MuiInputBase-input': {
              marginLeft: 1,
            },
            '& .MuiInputBase-root': {
              fontSize: 14,
            },
          }}
          slotProps={{
            input: {
              ...params.InputProps,
              disableUnderline: true,
              startAdornment: (
                <SearchIcon
                  fontSize="small"
                  sx={(theme: Theme) => ({ color: theme.vars.palette.action.active })}
                />
              ),
            },
            htmlInput: {
              ...params.inputProps,
              'aria-label': placeholder,
            },
          }}
        />
      )}
    />
  )
}

// forwardRef is used to pass the ref to the Autocomplete component.
// pass the props to the Autocomplete component.
const BNFilterSearch = React.forwardRef(function BNFilterSearch<
  T extends { name: string } = { name: string },
>(
  props: BNFilterSearchProps<T>,
  ref: React.ForwardedRef<HTMLDivElement> // This ref is for the root Box
) {
  const {
    options = [],
    children,
    onSearchChange,
    placeholder = 'Search',
    renderOptionLink,
    searchValue,
    useSubmitSearch = false,
    variant = 'expandable',
    onSubmitSearch,
    onChange,
    ...autocompleteProps
  } = props

  // State for search and autocomplete
  const [searchExpanded, setSearchExpanded] = useState(variant === 'static')
  const [internalSearchValue, setInternalSearchValue] = useState('')

  // Use controlled or uncontrolled pattern for the input value
  const currentSearchValue = searchValue !== undefined ? searchValue : internalSearchValue

  // Expand search field
  const expandSearch = () => {
    setSearchExpanded(true)
  }

  const collapseSearch = () => {
    setSearchExpanded(false)
  }

  const submitSearchHandler = (value: string) => {
    if (onSubmitSearch) {
      onSubmitSearch(value)
    } else {
      console.log('submitSearch', value)
    }
  }

  const internalAutocompleteSharedProps = {
    options,
    onSearchChange, // Custom prop for input value changes
    placeholder,
    renderOptionLink,
    currentSearchValue,
    internalSetSearchValue: setInternalSearchValue,
    onChange, // Autocomplete's onChange for selection
    ...autocompleteProps, // Pass down other Autocomplete-specific props
  };

  return (
    <Box
      ref={ref}
      sx={(theme) => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'start',
        height: 40,
        borderRadius: 1000,
        paddingInline: theme.spacing(1),
        backgroundColor: theme.vars.palette.inputOutlinedEnabledFill,
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.short,
        }),
        boxShadow: variant === 'expandable' && searchExpanded
          ? `0px 0px 0px 1px rgba(${theme.vars.palette.primary.mainChannel} / 0.32)`
          : `0px 0px 0px 1px ${theme.vars.palette.divider}`,
        '&:hover': {
          boxShadow: `0px 0px 0px 1px rgba(${theme.vars.palette.primary.mainChannel} / 0.82)`,
          '&:focus-within': {
            boxShadow: `0px 0px 0px 1px ${theme.vars.palette.primary.main}`,
          },
        },
      })}
    >

      {variant === 'static' ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingInline: 1,
            gap: 2,
            width: '100%',
          }}
        >
          {children && (
            <>
              {children}
              <Divider orientation="vertical" flexItem />
            </>
          )}
          <InternalSearchAutocomplete {...internalAutocompleteSharedProps} />
          {useSubmitSearch && (
            <Collapse
              orientation="horizontal"
              in={searchExpanded}
              mountOnEnter
              unmountOnExit
            >
              <IconButton
                size="small"
                aria-label="Search"
                onClick={() => {
                  submitSearchHandler(currentSearchValue)
                }}
              >
                <ArrowForward fontSize="small" />
              </IconButton>
            </Collapse>
          )}
        </Box>
      ) : (
        <>
          <Collapse
            orientation="horizontal"
            in={searchExpanded}
          >
            <IconButton
              tabIndex={0}
              size="small"
              aria-label="Close Search"
              color="default"
              onClick={collapseSearch}
            >
              <CollapseContentIcon fontSize="small" />
            </IconButton>
          </Collapse>
          <Collapse
            orientation="horizontal"
            in={!searchExpanded}
          >
            <IconButton
              tabIndex={0}
              size="small"
              aria-label="Open Search"
              onClick={expandSearch}
            >
              <SearchIcon fontSize="small" />
            </IconButton>
          </Collapse>

          <Collapse
            orientation="horizontal"
            in={searchExpanded}
            timeout={300}
            easing={{
              enter: 'ease-in-out',
              exit: 'ease-in-out',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                minWidth: 0,
              }}
            >
              {children && (
                <>
                  {children}
                  <Divider orientation="vertical" flexItem />
                </>
              )}
              <InternalSearchAutocomplete {...internalAutocompleteSharedProps} />
            </Box>
          </Collapse>

          {useSubmitSearch && (
            <Collapse
              orientation="horizontal"
              in={searchExpanded}
              mountOnEnter
              unmountOnExit
            >
              <IconButton
                size="small"
                aria-label="Search"
                onClick={() => {
                  submitSearchHandler(currentSearchValue)
                }}
              >
                <ArrowForward fontSize="small" />
              </IconButton>
            </Collapse>
          )}
        </>
      )}
    </Box>
  )
})

export default BNFilterSearch
