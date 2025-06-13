import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import BNFilterSearch, { BNFilterSearchProps } from '../components/filter-search/BNFilterSearch'
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

type Story = StoryObj<typeof BNFilterSearch>

const meta: Meta<typeof BNFilterSearch> = {
  title: 'Custom Components/BNFilterSearch',
  component: BNFilterSearch,
  parameters: {
    layout: 'padded',
    // Note: This component extends MUI Autocomplete and inherits all its props.
    // Storybook's automatic prop extraction has limitations with complex generic types.
    // All MUI Autocomplete props are available when using the component in code.
  },
  args: {
    variant: 'expandable',
    options: dummyFinancialAccounts,
    placeholder: 'Search',
    id: 'bn-filter-search',
    useSubmitSearch: false,
  },
  argTypes: {
    // Component-specific props
    variant: {
      control: 'radio',
      options: ['expandable', 'static'],
      description: 'Component display variant - expandable with collapsible filters or static layout',
    },
    useSubmitSearch: {
      control: 'boolean',
      description: 'Enable submit search functionality with search icon button',
    },
    children: {
      control: false,
      description: 'Filter components to display inside the search container',
    },
    renderOptionLink: {
      control: false,
      description: 'Custom render function for option links in the dropdown',
    },

    // Common MUI Autocomplete props for convenience
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the search input',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'If true, the component is in a loading state',
    },
    autoHighlight: {
      control: 'boolean',
      description: 'If true, the first option is automatically highlighted',
    },
    clearOnEscape: {
      control: 'boolean',
      description: 'If true, clear all values when the user presses escape and the popup is closed',
    },
    freeSolo: {
      control: 'boolean',
      description: 'If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options',
    },

    // Event handlers as actions
    onSearchChange: { action: 'searchChanged' },
    onSubmitSearch: { action: 'searchSubmitted' },
    onChange: { action: 'changed' },
    onClose: { action: 'closed' },
    onHighlightChange: { action: 'highlightChanged' },
    onInputChange: { action: 'inputChanged' },
    onOpen: { action: 'opened' },
  },
}

export default meta

export const ExpandableFilterWithOnClick: Story = {
  args: {
    placeholder: 'Search...',
  },
  render: (args) => {
    const [accountFilter, setAccountFilter] = React.useState('all')
    const filteredAccounts = dummyFinancialAccounts.filter(
      (account) => accountFilter === 'all' || account.type === accountFilter
    )
    // Demo function to render each option as a link
    const renderOptionLink = (option: any) => {
      return (
        <li
          onClick={() => {
            // This is where you can add your action logic
            alert(`Navigating to account: ${option.name}`)
            // For example, you could use a router to navigate to a specific account page
            // or perform any other action you need
            // If using React Router, you might do something like:
            // navigate(`/account/${option.scope}`)
            // You could also trigger a navigation action here instead of using href
            // For example: navigate(`/account/${option.scope}`)
          }}
        >
          {option.name}
        </li>
      )
    }
    return (
      <BNFilterSearch
        {...args}
        options={filteredAccounts}
        selectOnFocus
        noOptionsText="No Accounts Match Your Filters"
        id="bn-filter-search-with-single-filter"
        renderOptionLink={renderOptionLink}
        filterSelectedOptions
      >
        <BNFilterSelect
          options={accountFilterOptions}
          value={accountFilter}
          onChange={setAccountFilter}
          aria-label="Account filter"
        />
      </BNFilterSearch>
    )
  },
}

export const ExpandableWithMultipleFilters: Story = {
  name: 'Expandable With Filters',
  args: {},
  render: (args) => {
    const [accountFilter, setAccountFilter] = React.useState('all')
    const [repFilter, setRepFilter] = React.useState('all')
    const [scopeFilter, setScopeFilter] = React.useState('all')
    const filteredAccounts = dummyFinancialAccounts.filter((account) => {
      const accountMatch = accountFilter === 'all' || account.type === accountFilter
      const repMatch = repFilter === 'all' || account.rep === repFilter
      const scopeMatch = scopeFilter === 'all' || account.scope === scopeFilter
      return accountMatch && repMatch && scopeMatch
    })
    return (
      <BNFilterSearch
        {...args}
        options={filteredAccounts}
        id="bn-filter-search-with-multiple-filters"
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

export const ExpandableWithSubmitSearch: Story = {
  name: 'Expandable With Submit Search',
  args: {},
  render: (args) => {
    const [accountFilter, setAccountFilter] = React.useState('all')
    const [repFilter, setRepFilter] = React.useState('all')
    const [scopeFilter, setScopeFilter] = React.useState('all')
    const filteredAccounts = dummyFinancialAccounts.filter((account) => {
      const accountMatch = accountFilter === 'all' || account.type === accountFilter
      const repMatch = repFilter === 'all' || account.rep === repFilter
      const scopeMatch = scopeFilter === 'all' || account.scope === scopeFilter
      return accountMatch && repMatch && scopeMatch
    })
    return (
      <BNFilterSearch
        {...args}
        options={filteredAccounts}
        id="bn-filter-search-with-multiple-filters"
        useSubmitSearch
        onSubmitSearch={(value) => alert(`You searched for: ${value}`)}
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

export const Static: Story = {
  args: {
    autoHighlight: true,
  },
  render: (args) => {
    const [accountFilter, setAccountFilter] = React.useState('all')
    const filteredAccounts = dummyFinancialAccounts.filter((account) => {
      const accountMatch = accountFilter === 'all' || account.type === accountFilter
      return accountMatch
    })
    return (
      <BNFilterSearch {...args} options={filteredAccounts} variant="static">
        <BNFilterSelect
          options={accountFilterOptions}
          value={accountFilter}
          onChange={setAccountFilter}
          aria-label="Account filter"
        />
      </BNFilterSearch>
    )
  },
}

export const StaticWithSubmit: Story = {
  args: {
    autoHighlight: true,
    placeholder: 'Search...',
  },
  render: (args) => {
    const [accountFilter, setAccountFilter] = React.useState('all')
    const filteredAccounts = dummyFinancialAccounts.filter((account) => {
      const accountMatch = accountFilter === 'all' || account.type === accountFilter
      return accountMatch
    })
    return (
      <BNFilterSearch
        {...args}
        options={filteredAccounts}
        variant="static"
        useSubmitSearch
        onSubmitSearch={(value) => alert(`You searched for: ${value}`)}
      >
        <BNFilterSelect
          options={accountFilterOptions}
          value={accountFilter}
          onChange={setAccountFilter}
          aria-label="Account filter"
        />
      </BNFilterSearch>
    )
  },
}
