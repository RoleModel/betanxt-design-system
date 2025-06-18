/**
 * Mock data for BNFilterSearch stories
 *
 * This file contains comprehensive mock financial account data and filter options
 * to demonstrate BNFilterSearch functionality in Storybook stories.
 */

export interface MockFinancialAccount {
  id: number
  name: string
  type: string
  rep: string
  scope: string
  balance?: number
  lastActivity?: string
  status?: 'active' | 'inactive' | 'pending'
}

// Enhanced mock data for financial accounts
export const financialAccounts: MockFinancialAccount[] = [
  {
    id: 1,
    name: 'John Smith Retirement Account',
    type: 'retirement',
    rep: 'Jane Wilson',
    scope: 'individual',
    balance: 450000,
    lastActivity: '2024-12-15',
    status: 'active',
  },
  {
    id: 2,
    name: 'ABC Corp 401(k) Plan',
    type: 'corporate',
    rep: 'Mike Johnson',
    scope: 'corporate',
    balance: 2500000,
    lastActivity: '2024-12-14',
    status: 'active',
  },
  {
    id: 3,
    name: 'Maria Garcia Investment Portfolio',
    type: 'investment',
    rep: 'Jane Wilson',
    scope: 'individual',
    balance: 125000,
    lastActivity: '2024-12-13',
    status: 'active',
  },
  {
    id: 4,
    name: 'Tech Startup LLC Business Account',
    type: 'business',
    rep: 'Sarah Davis',
    scope: 'business',
    balance: 75000,
    lastActivity: '2024-12-12',
    status: 'pending',
  },
  {
    id: 5,
    name: 'Robert Chen Trust Fund',
    type: 'trust',
    rep: 'Mike Johnson',
    scope: 'trust',
    balance: 800000,
    lastActivity: '2024-12-11',
    status: 'active',
  },
  {
    id: 6,
    name: 'Global Holdings Investment Fund',
    type: 'investment',
    rep: 'Sarah Davis',
    scope: 'corporate',
    balance: 5000000,
    lastActivity: '2024-12-10',
    status: 'active',
  },
  {
    id: 7,
    name: 'Smith Family Emergency Fund',
    type: 'savings',
    rep: 'Jane Wilson',
    scope: 'individual',
    balance: 50000,
    lastActivity: '2024-12-09',
    status: 'active',
  },
  {
    id: 8,
    name: 'Manufacturing Corp Pension Plan',
    type: 'retirement',
    rep: 'Mike Johnson',
    scope: 'corporate',
    balance: 3200000,
    lastActivity: '2024-12-08',
    status: 'active',
  },
  {
    id: 9,
    name: 'Lisa Park Personal Portfolio',
    type: 'investment',
    rep: 'Sarah Davis',
    scope: 'individual',
    balance: 180000,
    lastActivity: '2024-12-07',
    status: 'active',
  },
  {
    id: 10,
    name: 'Non-Profit Foundation Endowment',
    type: 'endowment',
    rep: 'Jane Wilson',
    scope: 'institutional',
    balance: 1500000,
    lastActivity: '2024-12-06',
    status: 'active',
  },
  {
    id: 11,
    name: 'Healthcare Provider Pension Fund',
    type: 'retirement',
    rep: 'Mike Johnson',
    scope: 'corporate',
    balance: 4500000,
    lastActivity: '2024-12-05',
    status: 'active',
  },
  {
    id: 12,
    name: 'Young Professional Roth IRA',
    type: 'retirement',
    rep: 'Sarah Davis',
    scope: 'individual',
    balance: 35000,
    lastActivity: '2024-12-04',
    status: 'active',
  },
  {
    id: 13,
    name: 'Family Estate Planning Trust',
    type: 'trust',
    rep: 'Jane Wilson',
    scope: 'trust',
    balance: 650000,
    lastActivity: '2024-12-03',
    status: 'inactive',
  },
  {
    id: 14,
    name: 'University Research Endowment',
    type: 'endowment',
    rep: 'Mike Johnson',
    scope: 'institutional',
    balance: 8500000,
    lastActivity: '2024-12-02',
    status: 'active',
  },
  {
    id: 15,
    name: 'Small Business Growth Fund',
    type: 'business',
    rep: 'Sarah Davis',
    scope: 'business',
    balance: 95000,
    lastActivity: '2024-12-01',
    status: 'pending',
  },
]

// Filter options for account types
export const accountFilterOptions = [
  { label: 'All Types', value: 'all' },
  { label: 'Retirement', value: 'retirement' },
  { label: 'Investment', value: 'investment' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Business', value: 'business' },
  { label: 'Trust', value: 'trust' },
  { label: 'Savings', value: 'savings' },
  { label: 'Endowment', value: 'endowment' },
]

// Filter options for representatives
export const repFilterOptions = [
  { label: 'All Reps', value: 'all' },
  { label: 'Jane Wilson', value: 'Jane Wilson' },
  { label: 'Mike Johnson', value: 'Mike Johnson' },
  { label: 'Sarah Davis', value: 'Sarah Davis' },
]

// Filter options for account scope
export const scopeFilterOptions = [
  { label: 'All Scopes', value: 'all' },
  { label: 'Individual', value: 'individual' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Business', value: 'business' },
  { label: 'Trust', value: 'trust' },
  { label: 'Institutional', value: 'institutional' },
]

// Filter options for account status
export const statusFilterOptions = [
  { label: 'All Status', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
]

// Utility function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Utility function to format date
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Simulate async search (for advanced stories)
export const simulateAsyncSearch = (
  query: string,
  delay: number = 800
): Promise<MockFinancialAccount[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query.trim()) {
        resolve(financialAccounts)
        return
      }

      const filtered = financialAccounts.filter(
        (account) =>
          account.name.toLowerCase().includes(query.toLowerCase()) ||
          account.type.toLowerCase().includes(query.toLowerCase()) ||
          account.rep.toLowerCase().includes(query.toLowerCase()) ||
          account.scope.toLowerCase().includes(query.toLowerCase())
      )
      resolve(filtered)
    }, delay)
  })
}
