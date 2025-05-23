import { ChartsTooltip } from '@mui/x-charts'
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart'

export interface BarChartProps {
  series1?: boolean
  series2?: boolean
  series3?: boolean
  series4?: boolean
  gridHorizontal?: boolean
  showTooltip?: boolean
  hideLegend?: boolean
  legendPositionVertical?: 'top' | 'bottom'
  height?: number
  width?: number
}

const dataset = [
  {
    software: 86,
    hardware: 57,
    services: 59,
    cloud: 91,
    month: 'January',
  },
  {
    software: 78,
    hardware: 52,
    services: 50,
    cloud: 85,
    month: 'February',
  },
  {
    software: 106,
    hardware: 53,
    services: 47,
    cloud: 93,
    month: 'March',
  },
  {
    software: 92,
    hardware: 56,
    services: 54,
    cloud: 97,
    month: 'April',
  },
  {
    software: 92,
    hardware: 69,
    services: 57,
    cloud: 104,
    month: 'May',
  },
  {
    software: 103,
    hardware: 63,
    services: 60,
    cloud: 112,
    month: 'June',
  },
  {
    software: 105,
    hardware: 60,
    services: 59,
    cloud: 118,
    month: 'July',
  },
  {
    software: 106,
    hardware: 60,
    services: 65,
    cloud: 125,
    month: 'August',
  },
  {
    software: 95,
    hardware: 51,
    services: 51,
    cloud: 110,
    month: 'September',
  },
  {
    software: 97,
    hardware: 65,
    services: 60,
    cloud: 117,
    month: 'October',
  },
  {
    software: 76,
    hardware: 64,
    services: 67,
    cloud: 105,
    month: 'November',
  },
  {
    software: 103,
    hardware: 70,
    services: 61,
    cloud: 128,
    month: 'December',
  },
]

const valueFormatter = (value: number | null) => `$${value}M`

export default function BarChart({
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
}: BarChartProps) {
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

  return (
    <MuiBarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          valueFormatter: (month: string, context: { location: string }) =>
            context.location === 'tick' ? `${month.slice(0, 3)} \n2025` : `${month} 2025`,
          height: 60,
        },
      ]}
      series={series as any}
      height={height}
      width={width}
      yAxis={[{ label: 'Revenue (Millions USD)', width: 80 }]}
      grid={{ horizontal: gridHorizontal }}
      hideLegend={hideLegend}
      slotProps={{
        legend: !hideLegend
          ? {
              position: {
                vertical: legendPositionVertical,
                horizontal: 'center',
              },
            }
          : undefined,
      }}
      slots={
        showTooltip
          ? {
              tooltip: ChartsTooltip,
            }
          : undefined
      }
    />
  )
}
