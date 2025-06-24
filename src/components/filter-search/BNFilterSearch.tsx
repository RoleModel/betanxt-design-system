'use client'

import clsx from 'clsx'
import * as React from 'react'
import { useCallback, useState } from 'react'

import { FilterList as FilterListIcon, Search as SearchIcon } from '@mui/icons-material'
import {
  Collapse,
  Divider,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import composeClasses from '@mui/utils/composeClasses'
import generateUtilityClass from '@mui/utils/generateUtilityClass'

import BNFilterSearchAutocomplete, {
  type BNFilterSearchAutocompleteProps,
} from './BNFilterSearchAutocomplete'

// Styled components
const RootStyled = styled('div', {
  name: 'BNFilterSearch',
  slot: 'Root',
})(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'start',
  height: 40,
  [theme.breakpoints.down('sm')]: {
    height: 48,
  },
  borderRadius: 24,
  paddingInline: theme.spacing(2),
  backgroundColor: (theme.vars || theme).palette.inputOutlinedEnabledFill,
  maxWidth: '100%',
  overflowX: 'auto',
  transition: theme.transitions.create(['border-color'], {
    duration: theme.transitions.duration.short,
  }),
  border: `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)`,
  '&:hover': {
    borderColor: theme.vars.palette.text.primary,
  },
  '&:focus-within': {
    outline: `2px solid ${theme.vars.palette.primary.main}`,
    outlineOffset: -2,
  },
}))

const WrapperInner = styled('div', {
  name: 'BNFilterSearch',
  slot: 'wrapperInner',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

const IconWrapper = styled('div', {
  name: 'BNFilterSearch',
  slot: 'IconWrapper',
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  flex: '0, 0, auto',
  color: theme.vars.palette.action.active,
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  height: 30,
  width: 30,
  [theme.breakpoints.down('sm')]: {
    height: 44,
    width: 44,
  },
}))

export function getBNFilterSearchUtilityClass(slot: string): string {
  return generateUtilityClass('BNFilterSearch', slot)
}

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    wrapperInner: ['wrapperInner'],
    search: ['Search'],
  }
  return composeClasses(slots, getBNFilterSearchUtilityClass, {})
}

function useFilterSearchState(initialOpen: boolean, controlledOpen?: boolean, disableToggle?: boolean) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [searchOpen, setSearchOpen] = useState(initialOpen)
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Sync internal state with controlled prop
  React.useEffect(() => {
    if (!disableToggle && typeof controlledOpen === 'boolean') {
      setSearchOpen(controlledOpen)
    }
  }, [controlledOpen, disableToggle])

  const handleToggle = useCallback(() => {
    setSearchOpen((prev) => !prev)
  }, [])

  const toggleFilters = useCallback(() => setFiltersOpen((v) => !v), [])
  return { theme, isSmallScreen, searchOpen, filtersOpen, handleToggle, toggleFilters }
}

export interface BNFilterSearchProps<T extends { name: string } = { name: string }>
  extends Omit<
    BNFilterSearchAutocompleteProps<T>,
    'inputValue' | 'onInputChange' | 'slots' | 'slotProps'
  > {
  children?: React.ReactNode
  open?: boolean
  disableToggle?: boolean
  onOpen?: () => void
  onClose?: () => void
  slots?: {
    root?: React.ElementType
    wrapperInner?: React.ElementType
    search?: React.ElementType
  }
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>
    wrapperInner?: React.HTMLAttributes<HTMLDivElement>
    search?: BNFilterSearchAutocompleteProps<T>
  }
  // Control props for input value
  inputValue?: string
  onInputChange?: (value: string) => void
}

export function BNFilterSearch({
  children,
  open = false,
  onOpen,
  onClose,
  disableToggle = false,
  slots = {},
  slotProps = {},
  inputValue: controlledInputValue,
  onInputChange: controlledOnInputChange,
  // Extract autocomplete-specific props
  onSubmit,
  options,
  placeholder,
  renderOptionLink,
  submitOnOptionClick,
  textFieldProps,
  ...autocompleteProps
}: BNFilterSearchProps) {
  // Hooks & State
  const classes = useUtilityClasses()
  const { isSmallScreen, searchOpen, filtersOpen, handleToggle, toggleFilters } =
    useFilterSearchState(disableToggle ? true : open, open, disableToggle)
  const [inputValue, setInputValue] = useState('')

  const isSearchOpen = disableToggle ? true : searchOpen
  const showToggle = !disableToggle

  // Event Handlers
  const handleOpen = React.useCallback(() => {
    if (disableToggle) return
    if (searchOpen && onClose) onClose()
    else if (!searchOpen && onOpen) onOpen()
    handleToggle()
  }, [disableToggle, searchOpen, onClose, onOpen, handleToggle])

  const handleInputChange = React.useCallback(
    (value: string) => {
      setInputValue(value)
      if (controlledOnInputChange) {
        controlledOnInputChange(value)
      }
    },
    [controlledOnInputChange]
  )

  const RootComponent = slots.root ?? RootStyled
  const SearchComponent = slots.search ?? BNFilterSearchAutocomplete

  const rootProps = {
    ...slotProps.root,
    className: clsx(classes.root, slotProps.root?.className),
  }

  // Always build searchSlotProps for the search component
  const searchSlotProps: Record<string, any> = {
    ...autocompleteProps, // Forward all other autocomplete props
    options,
    placeholder,
    renderOptionLink,
    submitOnOptionClick,
    textFieldProps,
    inputValue: inputValue,
    onInputChange: handleInputChange,
    onSubmit,
    // Forward autocomplete-specific props from slotProps.search
    ...slotProps.search,
  }

  return (
    <RootComponent {...rootProps}>
      {showToggle && (
        <Tooltip
          title={searchOpen ? 'Close Search' : 'Open Search'}
          disableHoverListener
          placement="bottom"
          arrow
        >
          <IconButton
            size={isSmallScreen ? 'large' : 'small'}
            onClick={handleOpen}
            aria-label={searchOpen ? 'Close Search' : 'Open Search'}
          >
            <SearchIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      {disableToggle && (
        <IconWrapper>
          <SearchIcon fontSize="small" />
        </IconWrapper>
      )}

      <Collapse orientation="horizontal" in={isSearchOpen} mountOnEnter unmountOnExit>
        <WrapperInner
          {...slotProps.wrapperInner}
          className={clsx(classes.wrapperInner, slotProps.wrapperInner?.className)}
        >
          {isSmallScreen && children && (
            <IconButton
              size="large"
              onClick={toggleFilters}
              aria-label={filtersOpen ? 'Hide Filters' : 'Show Filters'}
            >
              <FilterListIcon fontSize="small" />
            </IconButton>
          )}

          {children && (
            <>
              {isSmallScreen ? (
                <Collapse
                  orientation="horizontal"
                  in={filtersOpen}
                  mountOnEnter
                  unmountOnExit
                >
                  <WrapperInner>
                    {children}
                    <Divider orientation="vertical" flexItem />
                  </WrapperInner>
                </Collapse>
              ) : (
                <WrapperInner>
                  {children}
                  <Divider orientation="vertical" flexItem />
                </WrapperInner>
              )}
            </>
          )}

          <SearchComponent {...searchSlotProps} />
        </WrapperInner>
      </Collapse>
    </RootComponent>
  )
}

export default BNFilterSearch
