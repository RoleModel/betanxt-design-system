import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { styled } from '@mui/material/styles'
import {
  ChartsTooltip,
  HighlightScope,
  PieChart as MuiPieChart,
  PieChart,
  PieChartProps,
  useDrawingArea,
} from '@mui/x-charts'

const dataset = [
  { electronic: 86, noticeonly: 57, papermaterials: 59, month: 'January' },
  { electronic: 78, noticeonly: 52, papermaterials: 50, month: 'February' },
  { electronic: 106, noticeonly: 53, papermaterials: 47, month: 'March' },
  { electronic: 92, noticeonly: 56, papermaterials: 54, month: 'April' },
  { electronic: 92, noticeonly: 69, papermaterials: 57, month: 'May' },
  { electronic: 103, noticeonly: 63, papermaterials: 60, month: 'June' },
  { electronic: 105, noticeonly: 60, papermaterials: 59, month: 'July' },
  { electronic: 106, noticeonly: 60, papermaterials: 65, month: 'August' },
  { electronic: 95, noticeonly: 51, papermaterials: 51, month: 'September' },
  { electronic: 97, noticeonly: 65, papermaterials: 60, month: 'October' },
  { electronic: 76, noticeonly: 64, papermaterials: 67, month: 'November' },
  { electronic: 103, noticeonly: 70, papermaterials: 61, month: 'December' },
]

const meta: Meta<PieChartProps> = {
  title: 'Components/Charts/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
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

interface PieCenterLabelProps {
  totalValue: number
  subtitle?: string
}

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.vars?.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'middle',
  fontSize: '300%',
  fontWeight: 'bold',
  marginBottom: '5%',
  lineHeight: 1.6,
}))

const StyledSubText = styled('text')(({ theme }) => ({
  fill: theme.vars?.palette.text.secondary,
  textAnchor: 'middle',
  dominantBaseline: 'hanging',
  fontSize: '110%',
  lineHeight: 1,
  fontWeight: 400,
}))

export default meta

type Story = StoryObj<typeof PieChart>

function RenderPieChart(args: PieChartProps) {
  const { height = 300, width = 800 } = args

  const PieCenterLabel = ({ totalValue, subtitle }: PieCenterLabelProps) => {
    const { width, height, left, top } = useDrawingArea()
    const cx = left + width / 2
    const cy = top + height / 2

    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(totalValue)

    return (
      <g>
        <StyledText x={cx} y={cy - 5}>
          {formattedValue}
        </StyledText>
        <StyledSubText x={cx} y={cy + 20}>
          {subtitle}
        </StyledSubText>
      </g>
    )
  }

  const totalValue = dataset.reduce((sum, item) => sum + item.electronic, 0)

  const pieData = [
    {
      id: 'software',
      value: 86,
      label: 'Electronic Delivery',
      color: 'var(--mui-palette-chartSeries-0-main)',
    },
    {
      id: 'hardware',
      value: 57,
      label: 'Notice Only',
      color: 'var(--mui-palette-chartSeries-1-main)',
    },
    {
      id: 'services',
      value: 59,
      label: 'Paper Materials',
      color: 'var(--mui-palette-chartSeries-2-main)',
    },
  ]

  const series = [
    {
      data: pieData,
      innerRadius: '76%',
      outerRadius: '100%',
      showCenterLabel: true,
      paddingAngle: 1,
      highlightScope: {
        highlight: 'item',
        fade: 'global',
      } as HighlightScope,
    },
  ]

  return (
    <MuiPieChart
      series={series}
      height={height}
      width={width}
      slots={{ tooltip: ChartsTooltip, legend: () => null }}
    >
      <PieCenterLabel totalValue={totalValue} subtitle={'Total Revenue'} />
    </MuiPieChart>
  )
}

export const Default: Story = {
  args: {
    height: 300,
    width: 800,
  },
  render: RenderPieChart,
}
