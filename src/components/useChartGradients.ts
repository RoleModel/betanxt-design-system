import { useMemo } from 'react'
import type { SeriesGradient } from './ChartGradientFill'

export interface UseChartGradientsOptions {
  enabled: boolean
  series: Array<{
    id: string
    color: string
    startOpacity?: number
    endOpacity?: number
    direction?: 'vertical' | 'horizontal'
  }>
  defaultStartOpacity?: number
  defaultEndOpacity?: number
  defaultDirection?: 'vertical' | 'horizontal'
  chartType?: 'line' | 'bar' | 'area' | 'pie'
}

export const useChartGradients = ({
  enabled,
  series,
  defaultStartOpacity = 1,
  defaultEndOpacity = 0,
  defaultDirection = 'vertical',
  chartType = 'line',
}: UseChartGradientsOptions) => {
  const gradientSeries = useMemo<SeriesGradient[]>(() => {
    if (!enabled) return []

    return series.map((s) => ({
      id: `gradient-${s.id}`,
      color: s.color,
      startOpacity: s.startOpacity ?? defaultStartOpacity,
      endOpacity: s.endOpacity ?? defaultEndOpacity,
      direction: s.direction ?? defaultDirection,
    }))
  }, [enabled, series, defaultStartOpacity, defaultEndOpacity, defaultDirection])

  const gradientStyles = useMemo(() => {
    if (!enabled) return {}

    const styles: Record<string, any> = {}

    series.forEach((s) => {
      const gradientId = `gradient-${s.id}`

      // Generate CSS selectors based on chart type
      switch (chartType) {
        case 'line':
        case 'area':
          styles[`& .MuiAreaElement-series-${s.id}`] = {
            fill: `url(#${gradientId})`,
          }
          break
        case 'bar':
          styles[`& .MuiBarElement-series-${s.id}`] = {
            fill: `url(#${gradientId})`,
          }
          break
        default:
          // Generic fallback
          styles[`& [data-series-id="${s.id}"]`] = {
            fill: `url(#${gradientId})`,
          }
      }
    })

    return styles
  }, [enabled, series, chartType])

  return {
    gradientSeries,
    gradientStyles,
    enabled,
  }
}

export default useChartGradients
