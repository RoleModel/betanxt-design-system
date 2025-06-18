import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box } from '@mui/material'

import BNFilterSearch from '../components/filter-search/BNFilterSearch'
import BNFilterSelect from '../components/filter-search/BNFilterSelect'
import {
  type MockFinancialAccount,
  accountFilterOptions,
  financialAccounts,
  formatCurrency,
  formatDate,
  repFilterOptions,
  scopeFilterOptions,
  simulateAsyncSearch,
} from './mockData/financialAccounts'

const meta = {
  title: 'Custom Components/BNFilterSearch',
  component: BNFilterSearch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible search and filter component that primarily submits on Enter key press. Supports autocompletion, custom rendering, and toggle behavior.',
      },
    },
  },
  args: {
    placeholder: 'Search',
    disableToggle: false,
    options: financialAccounts,
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    open: {
      control: false, // Hide this from controls as it's redundant with disableToggle
      description:
        'Initial open state when not using disableToggle (component manages its state thereafter)',
      table: {
        disable: true,
      },
    },
    disableToggle: {
      control: 'boolean',
      description: 'Always keep search open without toggle button',
    },
    options: {
      control: false,
      description: 'Array of options to search through',
      table: {
        disable: true,
      },
    },
    onInputChange: {
      table: {
        disable: true,
      },
    },
    onSubmit: {
      action: 'onSubmit',
      table: {
        disable: true,
      },
    },
    onClose: {
      action: 'onClose',
      table: {
        disable: true,
      },
    },
    slots: {
      control: false,
      description: 'Custom slots for rendering different parts of the component',
      table: {
        disable: true,
      },
    },
    slotProps: {
      control: false,
      description: 'Props for custom slots',
      table: {
        disable: true,
      },
    },
    onOpen: {
      action: 'onOpen',
      table: {
        disable: true,
      },
    },
    inputValue: {
      table: {
        disable: true,
      },
    },
    renderOptionLink: {
      control: false,
      description: 'Custom render function for option links',
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof BNFilterSearch>
type Story = StoryObj<typeof BNFilterSearch>

export default meta

export const Default: Story = {
  render: (args) => {
    return <BNFilterSearch {...args} options={args.options || financialAccounts} />
  },
}

export const ToggleDisabled: Story = {
  name: 'Toggle Disabled',
  args: {
    disableToggle: true,
  },
  render: (args) => {
    const [accountFilter, setAccountFilter] = React.useState('all')
    const [repFilter, setRepFilter] = React.useState('all')
    const filteredAccounts = React.useMemo(() => {
      return financialAccounts.filter((account) => {
        const accountMatch = accountFilter === 'all' || account.type === accountFilter
        const repMatch = repFilter === 'all' || account.rep === repFilter
        return accountMatch && repMatch
      })
    }, [accountFilter, repFilter])

    return (
      <BNFilterSearch {...args} options={filteredAccounts}>
        <BNFilterSelect
          options={accountFilterOptions}
          value={accountFilter}
          onChange={setAccountFilter}
          aria-label="Account filter"
        />
        <BNFilterSelect
          options={repFilterOptions}
          value={repFilter}
          onChange={setRepFilter}
          aria-label="Rep filter"
        />
      </BNFilterSearch>
    )
  },
}

export const WithLink: Story = {
  args: {
    placeholder: 'Search accounts',
  },
  render: (args) => {
    const renderOptionLink = (
      option: { name: string } & Partial<MockFinancialAccount>
    ) => (
      <Box
        component="a"
        href={`/details/${option.scope}/${option.id}`}
        onClick={(e) => {
          e.preventDefault()
          const balance = option.balance ? ` - ${formatCurrency(option.balance)}` : ''
          const lastActivity = option.lastActivity
            ? ` - Last activity: ${formatDate(option.lastActivity)}`
            : ''
          alert(`Clicked: ${option.name} (${option.scope})${balance}${lastActivity}`)
        }}
      >
        {option.name}
      </Box>
    )
    return (
      <BNFilterSearch
        {...args}
        options={args.options || financialAccounts}
        renderOptionLink={renderOptionLink}
      />
    )
  },
}

export const SubmitOnClick: Story = {
  render: (args) => {
    return (
      <BNFilterSearch
        {...args}
        options={args.options || financialAccounts}
        submitOnOptionClick={true} // Enable submission on option click
        onSubmit={(value) => {
          alert(`Submitted search: ${value}`)
        }}
        slotProps={{
          search: {
            options: args.options || financialAccounts,
            textFieldProps: {
              sx: {
                backgroundColor: 'red',
              },
            },
          },
        }}
      />
    )
  },
}

export const AdvancedInteraction: Story = {
  name: 'Advanced Interaction Demo',
  render: (args) => {
    const [searchResults, setSearchResults] = React.useState<MockFinancialAccount[]>([])
    const [isSearching, setIsSearching] = React.useState(false)

    const handleSubmit = async (value: string) => {
      setIsSearching(true)
      try {
        const results = await simulateAsyncSearch(value, 800)
        setSearchResults(results)
        console.log(`Search completed for: "${value}" - ${results.length} results found`)
      } catch (error) {
        console.error('Search failed:', error)
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }

    return (
      <Box>
        <BNFilterSearch
          {...args}
          placeholder="Search accounts (simulates async search)"
          options={financialAccounts}
          onSubmit={handleSubmit}
          disabled={isSearching}
          submitOnOptionClick={true}
          slotProps={{
            search: {
              options: financialAccounts,
              loading: isSearching,
            },
          }}
        />

        {searchResults.length > 0 && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: 'var(--mui-palette-background-paper',
              borderRadius: 1,
            }}
          >
            <Box sx={{ fontWeight: 'bold', mb: 1 }}>
              Search Results ({searchResults.length}):
            </Box>
            {searchResults.map((account) => (
              <Box key={account.id} sx={{ mb: 1, p: 1, borderRadius: 0.5 }}>
                <Box sx={{ fontWeight: 'medium' }}>{account.name}</Box>
                <Box
                  sx={{
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <span>
                    {account.type} • {account.rep}
                  </span>
                  {account.balance && <span>• {formatCurrency(account.balance)}</span>}
                  {account.status && (
                    <Box
                      component="span"
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: 0.5,
                        fontSize: '0.75rem',
                        bgcolor:
                          account.status === 'active'
                            ? 'success.light'
                            : account.status === 'pending'
                              ? 'warning.light'
                              : 'grey.300',
                        color:
                          account.status === 'active'
                            ? 'success.dark'
                            : account.status === 'pending'
                              ? 'warning.dark'
                              : 'grey.700',
                      }}
                    >
                      {account.status}
                    </Box>
                  )}
                </Box>
                {account.lastActivity && (
                  <Box sx={{ fontSize: '0.75rem', mt: 0.25 }}>
                    Last activity: {formatDate(account.lastActivity)}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    )
  },
}
