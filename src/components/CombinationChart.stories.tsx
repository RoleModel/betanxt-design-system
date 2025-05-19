import type { Meta, StoryObj } from '@storybook/react'

import CombinationChart from './CombinationChart'
import type { CombinationChartProps } from './CombinationChart'

const meta: Meta<CombinationChartProps> = {
  component: CombinationChart,
  title: 'Components/Charts/CombinationChart',
  argTypes: {
    showRevenue: {
      control: 'boolean',
      name: 'Show Bar',
      defaultValue: true,
    },
    showNetIncome: {
      control: 'boolean',
      name: 'Show Bar 2',
      defaultValue: true,
    },
    showNetMargin: {
      control: 'boolean',
      name: 'Show Line',
      defaultValue: true,
    },
    gridHorizontal: {
      control: 'boolean',
      name: 'Show Horizontal Grid',
      defaultValue: true,
    },
    showTooltip: {
      control: 'boolean',
      name: 'Show Tooltip',
      defaultValue: true,
    },
    showLegend: {
      control: 'boolean',
      name: 'Show Legend',
      defaultValue: true,
    },
    legendPosition: {
      control: 'radio',
      options: ['top', 'bottom'],
      name: 'Legend Position',
      defaultValue: 'bottom',
    },
  },
}

export default meta

type Story = StoryObj<typeof CombinationChart>

export const Default: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (code: string, storyContext: any) => {
          const { args } = storyContext

          // Build series array based on active options
          const seriesItems = []
          if (args.showRevenue) {
            seriesItems.push(`    {
      type: 'bar',
      dataKey: 'revenue',
      label: 'Total Revenue',
      color: 'var(--mui-palette-chartSeries-0-main)',
      yAxisId: 'leftAxis',
    }`)
          }

          if (args.showNetIncome) {
            seriesItems.push(`    {
      type: 'bar',
      dataKey: 'netIncome',
      label: 'Net Income',
      color: 'var(--mui-palette-chartSeries-1-main)',
      yAxisId: 'leftAxis',
    }`)
          }

          if (args.showNetMargin) {
            seriesItems.push(`    {
      type: 'line',
      dataKey: 'netMargin',
      label: 'Net Margin %',
      color: 'var(--mui-palette-chartSeries-3-main)',
      yAxisId: 'rightAxis',
    }`)
          }

          // Build children elements
          const children = []
          if (args.gridHorizontal) {
            children.push('  <ChartsGrid horizontal />')
          }

          children.push('  <BarPlot />')

          if (args.showNetMargin) {
            children.push('  <LinePlot />')
            children.push('  <MarkPlot />')
          }

          children.push('  <ChartsXAxis />')
          children.push('  <ChartsYAxis axisId="leftAxis" />')
          children.push('  <ChartsYAxis axisId="rightAxis" />')

          if (args.showLegend) {
            children.push(
              `  <ChartsLegend slotProps={{ legend: { position: { vertical: '${args.legendPosition || 'bottom'}', horizontal: 'center' } } }} />`
            )
          }

          if (args.showTooltip) {
            children.push('  <ChartsTooltip />')
          }

          return `<ChartContainer
  series={[
${seriesItems.join(',\n')}
  ]}
  xAxis={[
    {
      scaleType: 'band',
      dataKey: 'quarter',
      label: 'Quarter',
    },
  ]}
  yAxis={[
    { id: 'leftAxis', label: 'Billions (USD)', width: 60 },
    { id: 'rightAxis', position: 'right', label: 'Net margin %', width: 60, min: 30, max: 38 },
  ]}
  dataset={[
    { quarter: "Q3 '24", revenue: 38, netIncome: 27, netMargin: 35.5 },
    { quarter: "Q4 '24", revenue: 42, netIncome: 23, netMargin: 33.0 },
    { quarter: "Q1 '25", revenue: 45, netIncome: 24, netMargin: 37.5 },
    { quarter: "Q2 '25", revenue: 50, netIncome: 25, netMargin: 34.5 },
    { quarter: "Q3 '25", revenue: 41, netIncome: 26, netMargin: 36.5 },
  ]}
  height={400}
  width={800}
>
${children.join('\n')}
</ChartContainer>`
        },
      },
    },
  },
  args: {
    showRevenue: true,
    showNetIncome: true,
    showNetMargin: true,
    gridHorizontal: true,
    showTooltip: true,
    showLegend: true,
    legendPosition: 'bottom',
  },
}
