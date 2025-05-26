import { useMemo } from 'react'
import type { SeriesGradient } from './ChartGradientFill'

export interface UseChartGradientsOptions {
  enabled: boolean
  series: Array<{
    id: string
    color: string
  }>
}

export const useChartGradients = ({
  enabled,
  series,
}: UseChartGradientsOptions) => {
  const gradientSeries = useMemo<SeriesGradient[]>(() => {
    if (!enabled) return []

    return series.map((s) => ({
      id: `gradient-${s.id}`,
      color: s.color,
    }))
  }, [enabled, series])

  return {
    gradientSeries,
    enabled,
  }
}

export default useChartGradients
