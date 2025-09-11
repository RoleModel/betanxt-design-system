import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box, ListItemButton } from '@mui/material'

import { BNDataList } from '../components/data-list/BNDataList'
import { BNDataListItem } from '../components/data-list/BNDataListItem'
import '../themes/mui-type-customizations'
import { financialAccounts, formatCurrency } from './mockData/financialAccounts'

const meta: Meta<typeof BNDataListItem> = {
  title: 'Custom Components/BNDataList',
  component: BNDataListItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A custom ListItem component that wraps MUI ListItem and uses BNTypographyPair by default for consistent split-layout text display.',
      },
      controls: {
        sort: 'alpha',
      },
    },
  },
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Whether to use dense spacing (reduces padding)',
    },
    disableGutters: {
      control: 'boolean',
      description: 'Whether to disable gutters (removes horizontal padding)',
    },
    divider: {
      control: 'boolean',
      description: 'Whether to show a divider below the item',
    },
    children: {
      table: { disable: true },
    },
    primary: {
      table: { disable: true },
    },
    secondary: {
      table: { disable: true },
    },
    ContainerComponent: {
      table: { disable: true },
    },
    ContainerProps: {
      table: { disable: true },
    },
    secondaryAction: {
      table: { disable: true },
    },
    typographyPairProps: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    alignItems: {
      table: { disable: true },
    },
    style: {
      table: { disable: true },
    },
    classes: {
      table: { disable: true },
    },
    component: {
      table: { disable: true },
    },
    components: {
      table: { disable: true },
    },
    componentsProps: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof BNDataListItem>

export const Dense: Story = {
  name: 'Default',
  args: {
    dense: false,
    divider: true,

    primary: {
      text: 'John Smith',
      variant: 'body3',
    },

    secondary: {
      text: '$450,000',
      variant: 'body3',
      fontWeight: 500,
    },

    disableGutters: true,
    disablePadding: false,
    alignItems: 'center',
  },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <BNDataList dense={args.dense} disablePadding>
        <BNDataListItem {...args} key="list-item-0" />
        <BNDataListItem
          {...args}
          key="list-item-1"
          primary={{ text: 'ABC Corp', variant: 'body3' }}
          secondary={{ text: '$2,500,000', variant: 'body3', fontWeight: 500 }}
        />
        <BNDataListItem
          {...args}
          key="list-item-2"
          divider={false}
          primary={{ text: 'Maria Garcia', variant: 'body3' }}
          secondary={{ text: '$125,000', variant: 'body3', fontWeight: 500 }}
        />
      </BNDataList>
    </Box>
  ),
}

export const ListItemButtonStory: Story = {
  name: 'Interactive ListItemButton',
  args: {
    primary: {
      text: 'Primary Text',
      variant: 'body3',
    },
    secondary: {
      text: 'Secondary Value',
      variant: 'body3',
      fontWeight: 500,
    },
    disableGutters: true,
    disablePadding: false,
    dense: false,
    button: true,
    divider: true,
  },
  render: (args) => {
    const [selectedAccountId, setSelectedAccountId] = React.useState<number | null>(null)

    const accountList = financialAccounts.slice(0, 6)

    const handleAccountClick = (accountId: number) => {
      setSelectedAccountId(selectedAccountId === accountId ? null : accountId)
    }

    return (
      <Box sx={{ width: 400 }}>
        <BNDataList>
          {accountList.map((account, index) => (
            <BNDataListItem
              key={`list-item-${index}`}
              divider={index < accountList.length - 1}
              listItemButtonProps={{
                onClick: () => handleAccountClick(account.id),
              }}
              {...args}
              primary={{
                text: account.name,
                variant: 'body3',
                color: selectedAccountId === account.id ? 'primary.main' : 'text.primary',
              }}
              secondary={{
                text: `${account.balance ? formatCurrency(account.balance) : 'N/A'}`,
                variant: 'body3',
                fontWeight: 500,
                color:
                  selectedAccountId === account.id ? 'primary.main' : 'text.secondary',
              }}
            />
          ))}
        </BNDataList>
      </Box>
    )
  },
}
