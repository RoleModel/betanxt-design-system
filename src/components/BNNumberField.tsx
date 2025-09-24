import React from 'react'
import { NumericFormat } from 'react-number-format'
import type { NumericFormatProps } from 'react-number-format'

import { InputAdornment, TextField } from '@mui/material'
import type { TextFieldProps } from '@mui/material'

// Major world currencies for FX support
export type Currency =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'CAD'
  | 'CHF'
  | 'AUD'
  | 'CNY'
  | 'SEK'
  | 'NOK'

// Currency configuration mapping with locale-specific formatting
export const currencyConfig: Record<
  Currency,
  {
    symbol: string
    decimalPlaces: number
    locale: string
    thousandSeparator: string // Character used to group thousands
    decimalSeparator: string // Radix character - separates integer from fractional part
  }
> = {
  USD: {
    symbol: '$',
    decimalPlaces: 2,
    locale: 'en-US',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  EUR: {
    symbol: '€',
    decimalPlaces: 2,
    locale: 'de-DE',
    thousandSeparator: '.',
    decimalSeparator: ',',
  },
  GBP: {
    symbol: '£',
    decimalPlaces: 2,
    locale: 'en-GB',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  JPY: {
    symbol: '¥',
    decimalPlaces: 0,
    locale: 'ja-JP',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  CAD: {
    symbol: 'C$',
    decimalPlaces: 2,
    locale: 'en-CA',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  CHF: {
    symbol: 'CHF',
    decimalPlaces: 2,
    locale: 'de-CH',
    thousandSeparator: "'",
    decimalSeparator: '.',
  },
  AUD: {
    symbol: 'A$',
    decimalPlaces: 2,
    locale: 'en-AU',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  CNY: {
    symbol: '¥',
    decimalPlaces: 2,
    locale: 'zh-CN',
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  SEK: {
    symbol: 'kr',
    decimalPlaces: 2,
    locale: 'sv-SE',
    thousandSeparator: '\u2009', // Thin space (U+2009)
    decimalSeparator: ',', // Radix character
  },
  NOK: {
    symbol: 'kr',
    decimalPlaces: 2,
    locale: 'nb-NO',
    thousandSeparator: '\u2009', // Thin space (U+2009)
    decimalSeparator: ',', // Radix character
  },
}

export interface BNNumberFieldProps
  extends Omit<TextFieldProps, 'value' | 'onChange' | 'type' | 'defaultValue' | 'size'> {
  /**
   * Enable currency formatting. If true, defaults to USD.
   * If a specific currency is provided, uses that currency's configuration.
   */
  currency?: boolean | Currency
  /**
   * The controlled numeric value. Can be number for values or null for empty state.
   */
  value?: number | null
  /**
   * Callback fired when the value changes.
   * Provides the numeric value (number) or null for empty state.
   */
  onValueChange?: (value: number | null) => void
  /**
   * Custom prefix to display as part of the input value.
   * When provided with a currency, the currency symbol will not be shown.
   * This is passed directly to NumericFormat component.
   */
  prefix?: string
  /**
   * The size of the text field.
   * @default 'small'
   */
  size?: 'small' | 'medium'
  /**
   * Allow decimal numbers. If false, only integers are allowed.
   * @default true for most currencies, false for JPY
   */
  allowDecimals?: boolean
  /**
   * Custom thousands separator. When currency is set, this will be overridden by the currency's locale-specific separator.
   * @default "," for USD/GBP, "." for EUR, etc.
   */
  thousandSeparator?: string | boolean
  /**
   * Custom decimal separator (radix character). When currency is set, this will be overridden by the currency's locale-specific separator.
   * @default "." for USD/GBP, "," for EUR, etc.
   */
  decimalSeparator?: string
  /**
   * Maximum number of decimal places allowed
   */
  decimalScale?: number
  /**
   * Force a fixed number of decimal places to always display.
   * When provided, this sets both decimalScale and fixedDecimalScale to keep trailing zeros.
   */
  fixedDecimalPlaces?: number
  /**
   * Minimum value allowed
   */
  min?: number
  /**
   * Maximum value allowed
   */
  max?: number
  /**
   * The default value for uncontrolled mode
   */
  defaultValue?: string | number | null
  /**
   * Additional props to pass to NumericFormat
   */
  numericFormatProps?: Partial<NumericFormatProps>
}

const BNNumberField = React.forwardRef<HTMLDivElement, BNNumberFieldProps>(
  (
    {
      currency,
      value,
      prefix,
      onValueChange,
      allowDecimals,
      thousandSeparator = true,
      decimalSeparator = '.',
      decimalScale,
      fixedDecimalPlaces,
      min,
      max,
      numericFormatProps,
      defaultValue,
      slotProps,
      color,
      size = 'small',
      variant,
      ...textFieldProps
    },
    ref
  ) => {
    // Determine the currency to use
    const activeCurrency: Currency | null = React.useMemo(() => {
      if (currency === true) return 'USD'
      if (typeof currency === 'string') return currency
      return null
    }, [currency])

    // Get currency configuration
    const config = activeCurrency ? currencyConfig[activeCurrency] : null

    // Determine decimal settings
    const shouldAllowDecimals =
      allowDecimals ?? (config ? config.decimalPlaces > 0 : true)
    const finalDecimalScale =
      fixedDecimalPlaces ?? decimalScale ?? (config ? config.decimalPlaces : undefined)

    // Ensure trailing zeros are displayed when appropriate
    const finalFixedDecimalScale = React.useMemo(() => {
      // If consumer explicitly requests fixed decimal places, enforce regardless of currency rules
      if (fixedDecimalPlaces !== undefined) return true

      // If decimals are not allowed by config/prop, do not fix decimal scale
      if (!shouldAllowDecimals) return false

      // When a currency with decimal places is active, always fix to that scale
      if (config && config.decimalPlaces > 0) return true

      // If a specific decimalScale is provided, respect it by fixing the scale
      if (decimalScale !== undefined) return true

      // Otherwise, leave it unset (defaults to false in NumericFormat)
      return undefined as unknown as boolean
    }, [shouldAllowDecimals, fixedDecimalPlaces, config, decimalScale])

    // Determine separators based on currency or use defaults/props
    const finalThousandSeparator = React.useMemo(() => {
      if (config) {
        // If currency is set, always use currency's separator when thousandSeparator is true or not explicitly set to false
        if (thousandSeparator === false) {
          return false
        }
        return config.thousandSeparator
      }
      // Otherwise use the provided value or default
      return thousandSeparator
    }, [config, thousandSeparator])

    const finalDecimalSeparator = React.useMemo(() => {
      if (config) {
        // If currency is set, always use currency's decimal separator (radix)
        return config.decimalSeparator
      }
      // Otherwise use the provided value
      return decimalSeparator
    }, [config, decimalSeparator])

    // Handle value changes from NumericFormat
    const handleValueChange = React.useCallback(
      (values: { floatValue?: number }) => {
        const { floatValue } = values
        const newValue = floatValue !== undefined ? floatValue : null
        onValueChange?.(newValue)
      },
      [onValueChange]
    )

    // Create the start adornment for currency symbol only
    const startAdornment = React.useMemo(() => {
      if (config && !prefix) {
        return <InputAdornment position="start">{config.symbol}</InputAdornment>
      }
      return undefined
    }, [config, prefix])

    // When fixedDecimalPlaces is set, supply value as a numeric string with trailing zeros preserved
    const { numericFormatValue, valueIsNumericString } = React.useMemo(() => {
      if (fixedDecimalPlaces !== undefined) {
        if (value === null || value === undefined) {
          return { numericFormatValue: '', valueIsNumericString: false }
        }
        const strValue = typeof value === 'number' ? value.toFixed(fixedDecimalPlaces) : String(value)
        return { numericFormatValue: strValue, valueIsNumericString: true }
      }
      return { numericFormatValue: value ?? '', valueIsNumericString: false }
    }, [value, fixedDecimalPlaces])

    // Merge slot props to include the start adornment
    const mergedSlotProps = React.useMemo(() => {
      const inputSlotProps = slotProps?.input || {}
      const currentStartAdornment =
        typeof inputSlotProps === 'object' && 'startAdornment' in inputSlotProps
          ? inputSlotProps.startAdornment
          : undefined

      return {
        ...slotProps,
        input: {
          ...inputSlotProps,
          startAdornment: startAdornment || currentStartAdornment,
        },
      }
    }, [slotProps, startAdornment])

    return (
      <NumericFormat
        {...numericFormatProps}
        value={numericFormatValue}
        valueIsNumericString={valueIsNumericString}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        thousandSeparator={finalThousandSeparator}
        decimalSeparator={finalDecimalSeparator}
        prefix={!startAdornment ? prefix : undefined}
        allowNegative={min !== undefined ? min < 0 : true}
        decimalScale={finalDecimalScale}
        fixedDecimalScale={finalFixedDecimalScale}
        allowLeadingZeros={false}
        getInputRef={ref}
        isAllowed={(values) => {
          const { floatValue } = values

          // Allow empty values (null case)
          if (floatValue === undefined) return true

          // Check min/max constraints
          if (min !== undefined && floatValue < min) return false
          if (max !== undefined && floatValue > max) return false

          return true
        }}
        customInput={TextField}
        {...textFieldProps}
        color={color}
        size={size}
        variant={variant}
        slotProps={mergedSlotProps}
      />
    )
  }
)

BNNumberField.displayName = 'BNNumberField'

export default BNNumberField
