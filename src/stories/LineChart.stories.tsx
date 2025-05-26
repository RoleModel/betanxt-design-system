import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ChartsTooltip } from '@mui/x-charts'
import type { LineChartProps } from '@mui/x-charts/LineChart'
import { LineChart } from '@mui/x-charts/LineChart'

import ChartGradientFill from '../components/ChartGradientFill'
import { useChartGradients } from '../components/useChartGradients'

const LineChartForStorybook = (props: LineChartProps) => <LineChart {...props} />
Object.defineProperty(LineChartForStorybook, 'name', { value: 'LineChart' })
LineChartForStorybook.displayName = 'LineChart'

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
  useGradientFill?: boolean
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
]

const meta: Meta<LineChartStoryArgs> = {
  title: 'Components/Charts/LineChart',
  component: LineChartForStorybook,
  subcomponents: {
    ChartGradientFill,
  },
  parameters: {
    component: LineChartForStorybook,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-89901&t=nNrQpChNXPORG1Z5-11',
    },
    controls: {
      expanded: true,
    },
    docs: {
      description: {
        component: `
The **LineChart** component from MUI X-Charts.

        `,
      },
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
    useGradientFill: {
      control: 'boolean',
      name: 'Use Gradient Fill',
      description: 'Apply gradient fill to area plots using series colors.',
      defaultValue: false,
      if: { arg: 'showArea', truthy: true },
    },
  },
}

export default meta

type Story = StoryObj<LineChartStoryArgs>

const uData = [800 , 1200, 1700, 2100, 1400, 2900, 3200, 4000, 5700, 4024, 5700, 4100]
const pData = [1800, 2100, 1000, 2100, 3600, 3000, 3900, 3600, 4700, 3024, 5300, 5100]
const fData = [500 , 1000, 2000, 3100, 2600, 3000, 2900, 3600, 3500, 4024, 2300, 4100]
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
    useGradientFill: false,
  },
  render: function RenderLineChart(storyArgs: LineChartStoryArgs) {
    const color1 = storyArgs.color1 || 'var(--mui-palette-chartSeries-2-main)'
    const color2 = storyArgs.color2 || 'var(--mui-palette-chartSeries-0-main)'
    const color3 = storyArgs.color3 || 'var(--mui-palette-chartSeries-1-main)'

    const {
      showMark,
      hideLegend,
      legendPositionVertical,
      showTooltip,
      showArea,
      scaleType,
      gridHorizontal,
      gridVertical,
      useGradientFill,
      ...restArgs
    } = storyArgs

    // Use the reusable gradient hook
    const { gradientSeries } = useChartGradients({
      enabled: Boolean(useGradientFill && showArea),
      series: [
        { id: 'series-1', color: color1 },
        { id: 'series-2', color: color2 },
        { id: 'series-3', color: color3 },
      ],
    })

    const chartSeries = [
      {
        data: pData,
        showMark,
        label: 'S&P 500',
        area: showArea,
        yAxisKey: 'one',
        color: color1,
        labelMarkType: 'circle',
        id: 'series-1',
      },
      {
        data: fData,
        showMark,
        label: 'FTSE 100',
        area: showArea,
        yAxisKey: 'two',
        color: color2,
        labelMarkType: 'circle',
        id: 'series-2',
      },
      {
        data: uData,
        showMark,
        label: 'Dow Jones',
        area: showArea,
        yAxisKey: 'three',
        color: color3,
        labelMarkType: 'circle',
        id: 'series-3',
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

    return (
      <div data-chart-id="default-line-chart">
        <LineChartForStorybook {...chartProps}>
          {useGradientFill && showArea && (
            <ChartGradientFill series={gradientSeries} chartId="default-line-chart" />
          )}
        </LineChartForStorybook>
      </div>
    )
  },
}

export const GradientShowcase: Story = {
  name: 'Gradient Fill',
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
    useGradientFill: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the **ChartGradientFill** component capabilities:

- **Multiple Series**: Each series gets its own gradient with the selected color
- **Color Coordination**: Gradients automatically use the series colors

The ChartGradientFill component is reusable across chart types (LineChart, BarChart, etc.).
        `,
      },
    },
  },
  render: function RenderGradientShowcase(storyArgs: LineChartStoryArgs) {
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
      useGradientFill,
      ...restArgs
    } = storyArgs

    // Use the reusable gradient hook
    const { gradientSeries } = useChartGradients({
      enabled: Boolean(useGradientFill && showArea),
      series: [
        { id: 'series-1', color: color1 },
        { id: 'series-2', color: color2 },
        { id: 'series-3', color: color3 },
      ],
    })

    const chartSeries = [
      {
        data: pData,
        showMark,
        label: 'S&P 500',
        area: showArea,
        yAxisKey: 'one',
        color: color1,
        labelMarkType: 'circle',
        id: 'series-1',
      },
      {
        data: fData,
        showMark,
        label: 'FTSE 100',
        area: showArea,
        yAxisKey: 'two',
        color: color2,
        labelMarkType: 'circle',
        id: 'series-2',
      },
      {
        data: uData,
        showMark,
        label: 'Dow Jones',
        area: showArea,
        yAxisKey: 'three',
        color: color3,
        labelMarkType: 'circle',
        id: 'series-3',
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

    return (
      <div data-chart-id="gradient-showcase">
        <LineChartForStorybook {...chartProps}>
          {useGradientFill && showArea && (
            <ChartGradientFill series={gradientSeries} chartId="gradient-showcase" />
          )}
        </LineChartForStorybook>
      </div>
    )
  },
}
