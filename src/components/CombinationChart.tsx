import { ChartsAxisHighlight } from '@mui/x-charts'
import { BarPlot } from '@mui/x-charts/BarChart'
import { ChartContainer } from '@mui/x-charts/ChartContainer'
import { ChartsGrid } from '@mui/x-charts/ChartsGrid'
import { ChartsLegend } from '@mui/x-charts/ChartsLegend'
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip'
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis'
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis'
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart'

export interface CombinationChartProps {
  showRevenue?: boolean
  showNetIncome?: boolean
  showNetMargin?: boolean
  gridHorizontal?: boolean
  showTooltip?: boolean
  showLegend?: boolean
  legendPosition?: 'top' | 'bottom'
  color1?: string
  color2?: string
  color3?: string
}

const dataset = [
  { quarter: "Q3 '24", revenue: 38, netIncome: 27, netMargin: 35.5 },
  { quarter: "Q4 '24", revenue: 42, netIncome: 23, netMargin: 33.0 },
  { quarter: "Q1 '25", revenue: 45, netIncome: 24, netMargin: 37.5 },
  { quarter: "Q2 '25", revenue: 50, netIncome: 25, netMargin: 34.5 },
  { quarter: "Q3 '25", revenue: 41, netIncome: 26, netMargin: 36.5 },
]

export default function CombinationChart({
  showRevenue = true,
  showNetIncome = true,
  showNetMargin = true,
  gridHorizontal = true,
  showTooltip = true,
  showLegend = true,
  legendPosition = 'bottom',
  color1 = 'var(--mui-palette-chartSeries-0-main)',
  color2 = 'var(--mui-palette-chartSeries-1-main)',
  color3 = 'var(--mui-palette-chartSeries-2-main)',
}: CombinationChartProps) {
  const series = [
    showRevenue && {
      type: 'bar',
      dataKey: 'revenue',
      label: 'Total Revenue',
      color: color1,
      yAxisId: 'leftAxis',
    },
    showNetIncome && {
      type: 'bar',
      dataKey: 'netIncome',
      label: 'Net Income',
      color: color2,
      yAxisId: 'leftAxis',
    },
    showNetMargin && {
      type: 'line',
      dataKey: 'netMargin',
      label: 'Net Margin %',
      color: color3,
      yAxisId: 'rightAxis',
    },
  ].filter(Boolean)

  return (
    <ChartContainer
      series={series as any}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'quarter',
          label: 'Quarter',
        },
      ]}
      yAxis={[
        { id: 'leftAxis', label: 'Billions (USD)', width: 60 },
        {
          id: 'rightAxis',
          position: 'right',
          label: 'Net margin %',
          width: 60,
          min: 30,
          max: 38,
        },
      ]}
      dataset={dataset}
      height={400}
      width={800}
    >
      {gridHorizontal && <ChartsGrid horizontal />}
      <BarPlot />
      {showNetMargin && <LinePlot />}
      {showNetMargin && <MarkPlot />}
      <ChartsXAxis />
      <ChartsYAxis axisId="leftAxis" />
      <ChartsYAxis axisId="rightAxis" />
      <ChartsAxisHighlight x="band" />
      {showLegend && (
        <ChartsLegend
          slotProps={{
            legend: { position: { vertical: legendPosition, horizontal: 'center' } },
          }}
        />
      )}
      {showTooltip && <ChartsTooltip />}
    </ChartContainer>
  )
}
