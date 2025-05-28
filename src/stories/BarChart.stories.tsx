import type { Meta, StoryObj } from '@storybook/react'

import { ChartsTooltip, BarChart as MuiBarChart } from '@mui/x-charts'

import { BarChart, type BarChartProps } from '../components/BarChart'

const dataset = [
  { software: 86, hardware: 57, services: 59, cloud: 91, month: 'January' },
  { software: 78, hardware: 52, services: 50, cloud: 85, month: 'February' },
  { software: 106, hardware: 53, services: 47, cloud: 93, month: 'March' },
  { software: 92, hardware: 56, services: 54, cloud: 97, month: 'April' },
  { software: 92, hardware: 69, services: 57, cloud: 104, month: 'May' },
  { software: 103, hardware: 63, services: 60, cloud: 112, month: 'June' },
  { software: 105, hardware: 60, services: 59, cloud: 118, month: 'July' },
  { software: 106, hardware: 60, services: 65, cloud: 125, month: 'August' },
  { software: 95, hardware: 51, services: 51, cloud: 110, month: 'September' },
  { software: 97, hardware: 65, services: 60, cloud: 117, month: 'October' },
  { software: 76, hardware: 64, services: 67, cloud: 105, month: 'November' },
  { software: 103, hardware: 70, services: 61, cloud: 128, month: 'December' },
]

const valueFormatter = (value: number | null) => `$${value}M`

const meta: Meta<BarChartProps> = {
  title: 'Components/Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    series1: {
      control: 'boolean',
      name: 'Series 1',
      defaultValue: true,
    },
    series2: {
      control: 'boolean',
      name: 'Series 2',
      defaultValue: true,
    },
    series3: {
      control: 'boolean',
      name: 'Series 3',
      defaultValue: true,
    },
    series4: {
      control: 'boolean',
      name: 'Series 4',
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
    hideLegend: {
      control: 'boolean',
      name: 'Hide Legend',
      defaultValue: false,
    },
    legendPositionVertical: {
      control: 'select',
      options: ['top', 'bottom'],
      name: 'Legend Position (Vertical)',
      description: 'Vertical alignment of the legend.',
      if: { arg: 'hideLegend', truthy: false },
      defaultValue: 'top',
    },
    height: {
      control: { type: 'range', min: 200, max: 600, step: 50 },
      name: 'Chart Height',
      defaultValue: 300,
    },
    width: {
      control: { type: 'range', min: 400, max: 1000, step: 50 },
      name: 'Chart Width',
      defaultValue: 800,
    },
  },
}

export default meta

type Story = StoryObj<typeof BarChart>

function RenderBarChart(args: BarChartProps) {
  const {
    series1 = true,
    series2 = true,
    series3 = true,
    series4 = true,
    gridHorizontal = true,
    showTooltip = true,
    hideLegend = false,
    legendPositionVertical = 'bottom',
    height = 300,
    width = 800,
  } = args

  const series = [
    series1 && {
      dataKey: 'software',
      label: 'Software Revenue',
      color: 'var(--mui-palette-chartSeries-0-main)',
      valueFormatter,
    },
    series2 && {
      dataKey: 'hardware',
      label: 'Hardware Revenue',
      color: 'var(--mui-palette-chartSeries-1-main)',
      valueFormatter,
    },
    series3 && {
      dataKey: 'services',
      label: 'Services Revenue',
      color: 'var(--mui-palette-chartSeries-2-main)',
      valueFormatter,
    },
    series4 && {
      dataKey: 'cloud',
      label: 'Cloud Revenue',
      color: 'var(--mui-palette-chartSeries-3-main)',
      valueFormatter,
    },
  ].filter(Boolean)

  const xAxisConfig = [
    {
      scaleType: 'band' as const,
      dataKey: 'month',
      valueFormatter: (month: string, context: { location: string }) =>
        context.location === 'tick' ? `${month.slice(0, 3)} \n2025` : `${month} 2025`,
      height: 60,
    },
  ]

  const yAxisConfig = [{ label: 'Revenue (Millions USD)', width: 80 }]

  const slotPropsConfig: any = {
    legend: !hideLegend
      ? { position: { vertical: legendPositionVertical, horizontal: 'center' as const } }
      : undefined,
  }

  const slotsConfig: any = showTooltip ? { tooltip: ChartsTooltip } : undefined

  return (
    <MuiBarChart
      dataset={dataset}
      xAxis={xAxisConfig}
      series={series as any}
      height={height}
      width={width}
      yAxis={yAxisConfig}
      grid={{ horizontal: gridHorizontal }}
      hideLegend={hideLegend}
      slotProps={slotPropsConfig}
      slots={slotsConfig}
    />
  )
}

export const Default: Story = {
  args: {
    series1: true,
    series2: true,
    series3: true,
    series4: true,
    gridHorizontal: true,
    showTooltip: true,
    hideLegend: false,
    legendPositionVertical: 'top',
    height: 300,
    width: 800,
  },
  render: RenderBarChart,
}
