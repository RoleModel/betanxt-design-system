import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { fn } from 'storybook/test'

import { Box } from '@mui/material'

import BNFilterSearch from '../components/filter-search/BNFilterSearch2'
import BNFilterSelect from '../components/filter-search/BNFilterSelect'

const dummyFinancialAccounts = [
  { name: 'Johnson Family Trust', type: 'trust', rep: 'advisor1', scope: 'aa-01' },
  { name: 'Miller Family Trust', type: 'trust', rep: 'advisor2', scope: 'aa-02' },
  { name: 'Caterpillar Inc. 401k', type: 'corporate', rep: 'advisor3', scope: 'aa-03' },
  { name: 'Dell Corporation 401k', type: 'corporate', rep: 'advisor4', scope: 'aa-04' },
  {
    name: 'Microsoft Corporation 401k',
    type: 'corporate',
    rep: 'advisor1',
    scope: 'aa-05',
  },
  { name: 'Sarah & John Joint Account', type: 'joint', rep: 'advisor2', scope: 'aa-06' },
  { name: 'Apple Inc. Pension Fund', type: 'corporate', rep: 'advisor3', scope: 'aa-07' },
  { name: 'Smith Investment Trust', type: 'trust', rep: 'advisor4', scope: 'aa-08' },
  { name: 'Global Growth Fund', type: 'corporate', rep: 'advisor2', scope: 'aa-01' },
  { name: 'Williams Family Trust', type: 'trust', rep: 'advisor3', scope: 'aa-02' },
  { name: 'Brown Joint Account', type: 'joint', rep: 'advisor4', scope: 'aa-03' },
  { name: 'Johnson IRA', type: 'retirement', rep: 'advisor1', scope: 'aa-04' },
  { name: 'Tech Innovators 401k', type: 'corporate', rep: 'advisor2', scope: 'aa-05' },
  { name: 'Legacy Trust', type: 'trust', rep: 'advisor3', scope: 'aa-06' },
  { name: 'Future Fund', type: 'retirement', rep: 'advisor4', scope: 'aa-07' },
  { name: 'Equity Partners Joint', type: 'joint', rep: 'advisor1', scope: 'aa-08' },
  { name: 'College Fund', type: 'individual', rep: 'advisor2', scope: 'aa-09' },
  { name: 'Blue Chip Trust', type: 'trust', rep: 'advisor1', scope: 'aa-09' },
  { name: 'Vanguard Corporate', type: 'corporate', rep: 'advisor3', scope: 'aa-02' },
  {
    name: 'Personal Wealth Individual',
    type: 'individual',
    rep: 'advisor2',
    scope: 'aa-03',
  },
]

const accountFilterOptions = [
  { value: 'all', label: 'All Accounts' },
  { value: 'individual', label: 'Individual' },
  { value: 'joint', label: 'Joint' },
  { value: 'retirement', label: 'Retirement' },
  { value: 'trust', label: 'Trust' },
]
const repFilterOptions = [
  { value: 'all', label: 'All Reps' },
  { value: 'advisor1', label: 'Smith, J.' },
  { value: 'advisor2', label: 'Johnson, M.' },
  { value: 'advisor3', label: 'Williams, S.' },
  { value: 'advisor4', label: 'Brown, K.' },
]
const scopeFilterOptions = [
  { value: 'all', label: 'All Scopes' },
  { value: 'aa-01', label: 'AA-01' },
  { value: 'aa-02', label: 'AA-02' },
  { value: 'aa-03', label: 'AA-03' },
  { value: 'aa-04', label: 'AA-04' },
  { value: 'aa-05', label: 'AA-05' },
  { value: 'aa-06', label: 'AA-06' },
  { value: 'aa-07', label: 'AA-07' },
  { value: 'aa-08', label: 'AA-08' },
  { value: 'aa-09', label: 'AA-09' },
]

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
    options: dummyFinancialAccounts,
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
      description:
        'Callback when search is submitted (triggered by Enter key press or option selection with mouse/keyboard)',
    },
    onClose: {
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
    return (
      <BNFilterSearch
        {...args}
        options={args.options || dummyFinancialAccounts}
      />
    )
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
    const [scopeFilter, setScopeFilter] = React.useState('all')
    const filteredAccounts = React.useMemo(() => {
      return dummyFinancialAccounts.filter((account) => {
        const accountMatch = accountFilter === 'all' || account.type === accountFilter
        const repMatch = repFilter === 'all' || account.rep === repFilter
        const scopeMatch = scopeFilter === 'all' || account.scope === scopeFilter
        return accountMatch && repMatch && scopeMatch
      })
    }, [accountFilter, repFilter, scopeFilter])

    return (
      <BNFilterSearch
        {...args}
        options={filteredAccounts}
      >
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
        <BNFilterSelect
          options={scopeFilterOptions}
          value={scopeFilter}
          onChange={setScopeFilter}
          aria-label="Scope filter"
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
    const renderOptionLink = (option: {
      name: string
      type?: string
      rep?: string
      scope?: string
    }) => (
      <Box
        component="a"
        href={`/details/${(option as any).scope || 'unknown'}`}
        onClick={(e) => {
          e.preventDefault()
          alert(`Clicked option: ${option.name} (${(option as any).scope || 'unknown'})`)
        }}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        {option.name}
      </Box>
    )
    return (
      <BNFilterSearch
        {...args}
        options={args.options || dummyFinancialAccounts}
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
        options={args.options || dummyFinancialAccounts}
        slotProps={{
          search: {
            submitOnOptionClick: true,
          }
        }}
      />
    )
  }
}
