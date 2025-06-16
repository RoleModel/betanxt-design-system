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

import BNFilterSearchAutocomplete from './BNFilterSearchAutocomplete'

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
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  transition: theme.transitions.create(['box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
  boxShadow: `0px 0px 0px 1px ${theme.vars.palette.divider}`,
  '&:hover': {
    boxShadow: `0px 0px 0px 1px rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
  },
  '&:focus-within': {
    boxShadow: `0px 0px 0px 1px ${theme.vars.palette.primary.main}`,
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

function useFilterSearchState(initialOpen: boolean) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [searchOpen, setSearchOpen] = useState(initialOpen)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setSearchOpen((prev) => !prev)
  }, [])

  const toggleFilters = useCallback(() => setFiltersOpen((v) => !v), [])
  return { theme, isSmallScreen, searchOpen, filtersOpen, handleToggle, toggleFilters }
}

export interface BNFilterSearchProps<T extends { name: string } = { name: string }> {
  children?: React.ReactNode
  open?: boolean
  disableToggle?: boolean
  onSubmit?: (value: string) => void
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
    search?: React.ComponentProps<any>
  }
  // Props for the BNFilterSearchAutocomplete
  options?: readonly T[]
  placeholder?: string
  inputValue?: string
  onInputChange?: (value: string) => void
  renderOptionLink?: (option: T) => React.ReactNode
}

export function BNFilterSearch({
  children,
  open = false,
  onOpen,
  onClose,
  disableToggle = false,
  onSubmit,
  slots = {},
  slotProps = {},
  options = [],
  placeholder = 'Search',
  onInputChange: controlledOnInputChange,
  renderOptionLink,
}: BNFilterSearchProps) {
  // Hooks & State
  const classes = useUtilityClasses()
  const { isSmallScreen, searchOpen, filtersOpen, handleToggle, toggleFilters } =
    useFilterSearchState(disableToggle ? true : open)
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

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && onSubmit && inputValue.trim()) {
        event.preventDefault()
        onSubmit(inputValue.trim())
      }
    },
    [onSubmit, inputValue]
  )

  const RootComponent = slots.root ?? RootStyled
  const SearchComponent = slots.search ?? BNFilterSearchAutocomplete

  const rootProps = {
    ...slotProps.root,
    className: clsx(classes.root, slotProps.root?.className),
  }

  let searchSlotProps: Record<string, any> = { ...slotProps.search }

  if (SearchComponent === BNFilterSearchAutocomplete) {
    searchSlotProps = {
      options,
      placeholder,
      renderOptionLink,
      ...slotProps.search,
      inputValue: inputValue,
      onInputChange: handleInputChange,
      onChange: (_event: React.SyntheticEvent, newValue: any) => {
        let newLabel = ''

        if (typeof newValue === 'string') {
          newLabel = newValue
        } else if (newValue) {
          newLabel = newValue.name || String(newValue)
        }

        handleInputChange(newLabel)

        if (onSubmit && newLabel) {
          onSubmit(newLabel)
        }
      },
      textFieldProps: {
        onKeyDown: handleKeyDown,
        ...slotProps.search?.textFieldProps,
      },
    }
  }

  return (
    <RootComponent {...rootProps}>
      {showToggle && (
        <Tooltip
          title={searchOpen ? 'Close Search' : 'Open Search'}
          placement="top"
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
          <SearchIcon
            fontSize="small"
            sx={(theme) => ({
              color: (theme.vars || theme).palette.action.active,
            })}
          />
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
