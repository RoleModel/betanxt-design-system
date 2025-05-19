import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import VerticalBarChart from './VerticalBarChart'
import type { VerticalBarChartProps } from './VerticalBarChart'

const meta: Meta<VerticalBarChartProps> = {
  title: 'Components/Charts/VerticalBarChart',
  component: VerticalBarChart,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    series1: {
      control: 'boolean',
      name: 'Series 1 (Software)',
      defaultValue: true,
    },
    series2: {
      control: 'boolean',
      name: 'Series 2 (Hardware)',
      defaultValue: true,
    },
    series3: {
      control: 'boolean',
      name: 'Series 3 (Services)',
      defaultValue: true,
    },
    series4: {
      control: 'boolean',
      name: 'Series 4 (Cloud)',
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

type Story = StoryObj<typeof VerticalBarChart>

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
  render: function RenderVerticalBarChart(args: VerticalBarChartProps) {
    return <VerticalBarChart {...args} />
  },
}
