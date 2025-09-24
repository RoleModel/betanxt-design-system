import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'

import BNNumberField, { Currency } from '../components/BNNumberField'

const meta: Meta<typeof BNNumberField> = {
  title: 'Custom Components/BNNumberField',
  component: BNNumberField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currency: {
      control: {
        type: 'select',
        labels: {
          false: 'None',
          true: 'Auto (USD)',
          USD: 'US Dollar ($)',
          EUR: 'Euro (€)',
          GBP: 'British Pound (£)',
          JPY: 'Japanese Yen (¥)',
          CAD: 'Canadian Dollar (C$)',
          CHF: 'Swiss Franc (CHF)',
          AUD: 'Australian Dollar (A$)',
          CNY: 'Chinese Yuan (¥)',
          SEK: 'Swedish Krona (kr)',
          NOK: 'Norwegian Krone (kr)',
        },
      },
      options: [
        false,
        true,
        'USD',
        'EUR',
        'GBP',
        'JPY',
        'CAD',
        'CHF',
        'AUD',
        'CNY',
        'SEK',
        'NOK',
      ],
      description: 'Enable currency formatting. If true, defaults to USD.',
    },
    value: {
      control: { type: 'number' },
      description: 'The controlled numeric value. Can be number or null for empty state.',
    },
    prefix: {
      control: { type: 'text' },
      description:
        'Custom prefix to display instead of currency symbol. Overrides any currency symbol when provided.',
    },
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    thousandSeparator: {
      control: { type: 'boolean' },
      description: 'Enable thousands separators',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum allowed value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum allowed value',
    },
  },
  args: {
    label: 'Amount',
    variant: 'outlined',
    size: 'small',
    thousandSeparator: false,
  },
}

export default meta
type Story = StoryObj<typeof BNNumberField>

// Default number field without currency
export const Default: Story = {
  args: {
    label: 'Number Field',
    placeholder: 'Enter a number',
    currency: true,
    value: 34419.9,
    fixedDecimalPlaces: 2,
    thousandSeparator: true,
  },
  render: (args) => {
    const [value, setValue] = useState<number | null>(args.value ?? null)
    return <BNNumberField {...args} value={value} onValueChange={setValue} />
  },
}

// Edge cases: 0 values, null/empty states
export const EdgeCases: Story = {
  render: () => {
    const [zeroValue, setZeroValue] = useState<number | null>(0)
    const [nullValue, setNullValue] = useState<number | null>(null)
    const [negativeValue, setNegativeValue] = useState<number | null>(-250.75)

    return (
      <Stack spacing={3} sx={{ width: '300px' }}>
        <Typography variant="h6">Edge Cases</Typography>

        <BNNumberField
          label="Zero Value"
          currency="USD"
          value={zeroValue}
          onValueChange={setZeroValue}
          helperText="Value is exactly 0"
        />

        <BNNumberField
          label="Null/Empty Value"
          currency="EUR"
          value={nullValue}
          onValueChange={setNullValue}
          helperText="Value is null (empty)"
        />

        <BNNumberField
          label="Negative Value"
          currency="GBP"
          value={negativeValue}
          onValueChange={setNegativeValue}
          helperText="Negative values allowed"
        />

        <BNNumberField
          label="Min/Max Constraints"
          currency="CAD"
          value={50}
          min={0}
          max={100}
          helperText="Value must be between 0-100"
        />
      </Stack>
    )
  },
}

// Large numbers with millions/billions
export const LargeNumbers: Story = {
  render: () => {
    const [millionValue, setMillionValue] = useState<number | null>(1250000.99)
    const [billionValue, setBillionValue] = useState<number | null>(3400000000)
    const [trillionValue, setTrillionValue] = useState<number | null>(1200000000000)

    return (
      <Stack spacing={3} sx={{ width: '300px' }}>
        <Typography variant="h6">Large Numbers</Typography>

        <BNNumberField
          label="Millions"
          currency="USD"
          value={millionValue}
          onValueChange={setMillionValue}
          helperText="1.25 million dollars"
        />

        <BNNumberField
          label="Billions"
          currency="EUR"
          value={billionValue}
          onValueChange={setBillionValue}
          helperText="3.4 billion euros"
        />

        <BNNumberField
          label="Trillions"
          currency="JPY"
          value={trillionValue}
          onValueChange={setTrillionValue}
          helperText="1.2 trillion yen"
        />
      </Stack>
    )
  },
}

// Currencies showcase
export const Currencies: Story = {
  render: () => {
    const currencies: Currency[] = [
      'USD',
      'EUR',
      'GBP',
      'JPY',
      'CAD',
      'CHF',
      'AUD',
      'CNY',
      'SEK',
      'NOK',
    ]
    const [values, setValues] = useState<Record<Currency, number | null>>(
      currencies.reduce(
        (acc, currency) => ({
          ...acc,
          [currency]: currency === 'JPY' ? 150000 : 1234.56,
        }),
        {} as Record<Currency, number | null>
      )
    )

    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          width: '600px',
        }}
      >
        {currencies.map((currency) => (
          <BNNumberField
            key={currency}
            label={`${currency} Amount`}
            currency={currency}
            value={values[currency]}
            onValueChange={(value) =>
              setValues((prev) => ({ ...prev, [currency]: value }))
            }
          />
        ))}
      </Box>
    )
  },
}

// Variant showcase
export const Variants: Story = {
  render: () => {
    const [outlinedValue, setOutlinedValue] = useState<number | null>(1000)
    const [filledValue, setFilledValue] = useState<number | null>(2000)
    const [standardValue, setStandardValue] = useState<number | null>(3000)

    return (
      <Stack spacing={3} sx={{ width: '300px' }}>
        <Typography variant="h6">Field Variants</Typography>

        <BNNumberField
          label="Outlined (Default)"
          variant="outlined"
          currency="USD"
          value={outlinedValue}
          onValueChange={setOutlinedValue}
        />

        <BNNumberField
          label="Filled"
          variant="filled"
          currency="EUR"
          value={filledValue}
          onValueChange={setFilledValue}
        />

        <BNNumberField
          label="Standard"
          variant="standard"
          currency="GBP"
          value={standardValue}
          onValueChange={setStandardValue}
        />
      </Stack>
    )
  },
}

// Prefix examples
export const PrefixExamples: Story = {
  render: () => {
    const [dollarValue, setDollarValue] = useState<number | null>(123456789.9)
    const [yenValue, setYenValue] = useState<number | null>(150000)
    const [poundValue, setPoundValue] = useState<number | null>(999.99)

    return (
      <Stack spacing={3} sx={{ width: '350px' }}>
        <Typography variant="h6">Prefix Examples</Typography>
        <Typography variant="body2" color="text.secondary">
          Currency symbol prefixes without adornments
        </Typography>

        <BNNumberField
          label="Dollar with prefix"
          prefix="$"
          value={dollarValue}
          onValueChange={setDollarValue}
          helperText="$ as prefix instead of adornment"
        />

        <BNNumberField
          label="Yen with prefix"
          prefix="¥"
          value={yenValue}
          onValueChange={setYenValue}
          allowDecimals={false}
          helperText="¥ as prefix (no decimals)"
        />

        <BNNumberField
          label="Pound with prefix"
          prefix="£"
          value={poundValue}
          onValueChange={setPoundValue}
          helperText="£ as prefix instead of adornment"
        />
      </Stack>
    )
  },
}

// Error states and validation
export const ErrorStates: Story = {
  render: () => {
    const [errorValue, setErrorValue] = useState<number | null>(150)
    const [requiredValue, setRequiredValue] = useState<number | null>(null)

    return (
      <Stack spacing={3} sx={{ width: '300px' }}>
        <Typography variant="h6">Error States</Typography>

        <BNNumberField
          label="Error State"
          currency="USD"
          value={errorValue}
          onValueChange={setErrorValue}
          error
          helperText="This field has an error"
        />

        <BNNumberField
          label="Required Field"
          currency="EUR"
          value={requiredValue}
          onValueChange={setRequiredValue}
          required
          error={requiredValue === null}
          helperText={
            requiredValue === null ? 'This field is required' : 'Valid value entered'
          }
        />
      </Stack>
    )
  },
}
