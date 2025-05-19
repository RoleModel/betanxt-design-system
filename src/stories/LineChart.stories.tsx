import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ChartsTooltip } from '@mui/x-charts'
import type { LineChartProps } from '@mui/x-charts/LineChart'
import { LineChart } from '@mui/x-charts/LineChart'

// Define a type for the story arguments that includes our custom controls
interface LineChartStoryArgs extends LineChartProps {
  hideLegend?: boolean
  legendPositionVertical?: 'top' | 'middle' | 'bottom'
  showTooltip?: boolean
  showArea?: boolean
  showMark?: boolean
  gridHorizontal?: boolean
  gridVertical?: boolean
  scaleType?: 'point' | 'band'
  color1?: string
  color2?: string
  color3?: string
}

const colorOptions = [
  'var(--mui-palette-chartSeries-0-main)',
  'var(--mui-palette-chartSeries-1-main)',
  'var(--mui-palette-chartSeries-2-main)',
  'var(--mui-palette-chartSeries-3-main)',
  'var(--mui-palette-chartSeries-4-main)',
  'var(--mui-palette-chartSeries-5-main)',
  'var(--mui-palette-chartSeries-6-main)',
  'var(--mui-palette-chartSeries-7-main)',
  'var(--mui-palette-chartSeries-8-main)',
  'var(--mui-palette-chartSeries-9-main)',
];

const meta: Meta<LineChartStoryArgs> = {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  parameters: {
    component: LineChart,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...?node-id=...', // Replace with actual Figma link if available
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    color1: {
      control: {
        type: 'select',
        description: 'Color of the first series.',
        labels: {
          'var(--mui-palette-chartSeries-0-main)': 'Series 0',
          'var(--mui-palette-chartSeries-1-main)': 'Series 1',
          'var(--mui-palette-chartSeries-2-main)': 'Series 2',
          'var(--mui-palette-chartSeries-3-main)': 'Series 3',
          'var(--mui-palette-chartSeries-4-main)': 'Series 4',
          'var(--mui-palette-chartSeries-5-main)': 'Series 5',
          'var(--mui-palette-chartSeries-6-main)': 'Series 6',
          'var(--mui-palette-chartSeries-7-main)': 'Series 7',
          'var(--mui-palette-chartSeries-8-main)': 'Series 8',
          'var(--mui-palette-chartSeries-9-main)': 'Series 9',
        },
      },
      options: colorOptions,
      name: 'Color 1',
      description: 'Color of the first series.',
      defaultValue: 'var(--mui-palette-chartSeries-0-main)',
    },
    color2: {
      control: {
        type: 'select',
        description: 'Color of the second series.',
        labels: {
          'var(--mui-palette-chartSeries-0-main)': 'Series 0',
          'var(--mui-palette-chartSeries-1-main)': 'Series 1',
          'var(--mui-palette-chartSeries-2-main)': 'Series 2',
          'var(--mui-palette-chartSeries-3-main)': 'Series 3',
          'var(--mui-palette-chartSeries-4-main)': 'Series 4',
          'var(--mui-palette-chartSeries-5-main)': 'Series 5',
          'var(--mui-palette-chartSeries-6-main)': 'Series 6',
          'var(--mui-palette-chartSeries-7-main)': 'Series 7',
          'var(--mui-palette-chartSeries-8-main)': 'Series 8',
          'var(--mui-palette-chartSeries-9-main)': 'Series 9',
        },
      },
      options: colorOptions,
      name: 'Color 2',
      description: 'Color of the second series.',
      defaultValue: 'var(--mui-palette-chartSeries-2-main)',
    },
    color3: {
      control: {
        type: 'select',
        labels: {
          'var(--mui-palette-chartSeries-0-main)': 'Series 0',
          'var(--mui-palette-chartSeries-1-main)': 'Series 1',
          'var(--mui-palette-chartSeries-2-main)': 'Series 2',
          'var(--mui-palette-chartSeries-3-main)': 'Series 3',
          'var(--mui-palette-chartSeries-4-main)': 'Series 4',
          'var(--mui-palette-chartSeries-5-main)': 'Series 5',
          'var(--mui-palette-chartSeries-6-main)': 'Series 6',
          'var(--mui-palette-chartSeries-7-main)': 'Series 7',
          'var(--mui-palette-chartSeries-8-main)': 'Series 8',
          'var(--mui-palette-chartSeries-9-main)': 'Series 9',
        },
      },
      options: colorOptions,
      name: 'Color 3',
      description: 'Color of the third series.',
      defaultValue: 'var(--mui-palette-chartSeries-3-main)',
    },
    showMark: {
      control: 'boolean',
      name: 'Show Series Mark',
      description: 'Toggle the visibility of the chart mark.',
      defaultValue: true,
    },
    gridHorizontal: {
      control: 'boolean',
      name: 'Show Horizontal Grid',
      description: 'Toggle the visibility of the horizontal grid.',
      defaultValue: true,
    },
    gridVertical: {
      control: 'boolean',
      name: 'Show Vertical Grid',
      description: 'Toggle the visibility of the vertical grid.',
      defaultValue: true,
    },
    scaleType: {
      control: 'select',
      options: ['point', 'band'],
      name: 'Scale Type',
      description: 'Type of scale to use for the chart.',
      defaultValue: 'point',
    },
    hideLegend: {
      control: 'boolean',
      name: 'Hide Legend',
      description: 'Controls the visibility of the chart legend.',
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
    showTooltip: {
      control: 'boolean',
      name: 'Show Tooltip',
      description: 'Toggle the visibility of tooltips.',
      defaultValue: true,
    },
    showArea: {
      control: 'boolean',
      name: 'Show Area Plot',
      description: 'Toggle the visibility of the area fill under lines.',
      defaultValue: true,
    },
  },
}

export default meta

type Story = StoryObj<LineChartStoryArgs>

const uData = [1500, 2300, 2800, 3100, 2600, 3000, 3900, 3600, 4200, 4800, 5300, 5100]
const pData = [900, 1800, 2200, 2500, 3200, 2600, 3400, 4100, 3500, 4300, 4700, 5800]
const fData = [400, 1200, 700, 2000, 4700, 2100, 2900, 3300, 3000, 3700, 4200, 4600]
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

LineChart.displayName = 'LineChart'

export const DefaultLineChart: Story = {
  name: 'Line Chart',
  args: {
    width: 800,
    height: 300,
    showMark: false,
    hideLegend: false,
    scaleType: 'point',
    legendPositionVertical: 'top',
    showTooltip: true,
    showArea: true,
    gridHorizontal: false,
    gridVertical: false,
  },
  render: function RenderLineChart(storyArgs: LineChartStoryArgs) {
    const color1 = storyArgs.color1 || 'var(--mui-palette-chartSeries-0-main)'
    const color2 = storyArgs.color2 || 'var(--mui-palette-chartSeries-1-main)'
    const color3 = storyArgs.color3 || 'var(--mui-palette-chartSeries-2-main)'

    const {
      showMark,
      hideLegend,
      legendPositionVertical,
      showTooltip,
      showArea,
      scaleType,
      gridHorizontal,
      gridVertical,
      ...restArgs
    } = storyArgs

    const chartSeries = [
      {
        data: pData,
        showMark,
        label: 'S&P 500',
        area: showArea,
        yAxisKey: 'one',
        color: color1,
        labelMarkType: 'circle',
      },
      {
        data: fData,
        showMark,
        label: 'FTSE 100',
        area: showArea,
        yAxisKey: 'two',
        grid: true,
        color: color2,
        labelMarkType: 'circle',
      },
      {
        data: uData,
        showMark,
        label: 'Dow Jones',
        area: showArea,
        yAxisKey: 'three',
        grid: true,
        color: color3,
        labelMarkType: 'circle',
      },
    ]

    const xAxisConfig = [{ scaleType, data: xLabels }]
    const yAxisConfig = [{ id: 'one' }, { id: 'two' }, { id: 'three' }]

    const slotPropsConfig = {
      legend: !hideLegend
        ? {
            position: {
              vertical: legendPositionVertical,
            },
          }
        : undefined,
      tooltip: {
        trigger: showTooltip ? 'axis' : 'none',
      },
    }

    const chartProps = {
      ...restArgs,
      xAxis: xAxisConfig,
      yAxis: yAxisConfig,
      series: chartSeries,
      hideLegend: hideLegend,
      slots: {
        tooltip: ChartsTooltip,
      },
      slotProps: slotPropsConfig,
      grid: {
        horizontal: gridHorizontal,
        vertical: gridVertical,
      },
    } as LineChartProps

    return <LineChart {...chartProps} />
  },
}
