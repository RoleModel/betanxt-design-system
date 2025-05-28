import React, { useEffect, useMemo } from 'react'

import { useDrawingArea } from '@mui/x-charts'

export interface SeriesGradient {
  id: string
  color: string
  startOpacity?: number
  endOpacity?: number
}

export interface UseChartGradientsOptions {
  enabled: boolean
  series: Array<{
    id: string
    color: string
  }>
}

export const useChartGradients = ({ enabled, series }: UseChartGradientsOptions) => {
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

export interface ChartGradientFillProps {
  series: SeriesGradient[]
  chartId?: string
}

function ChartGradientFill({ series, chartId = 'chart' }: ChartGradientFillProps) {
  const { top, height, bottom, left, width } = useDrawingArea()
  const svgHeight = top + bottom + height

  useEffect(() => {
    const styleId = `chart-gradient-style-${chartId}`

    const cleanup = () => {
      const tag = document.getElementById(styleId)
      if (tag) tag.remove()
    }

    if (!series.length) {
      cleanup()
      return cleanup
    }

    cleanup()

    const styleTag = document.createElement('style')
    styleTag.id = styleId
    document.head.appendChild(styleTag)

    styleTag.textContent = series
      .map((s) => {
        const seriesId = s.id.replace('gradient-', '')
        return `[data-chart-id="${chartId}"] svg .MuiAreaElement-series-${seriesId} {
          opacity: 1 !important;
          fill: url(#${s.id}) !important;
        }`
      })
      .join('\n')

    return cleanup
  }, [series, chartId])

  if (!series.length) return null

  return (
    <defs>
      {series.map((s) => {
        return (
          <linearGradient
            key={s.id}
            id={s.id}
            x1={left + width / 2}
            y1={top}
            x2={left + width / 2}
            y2={svgHeight / 1.05}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={s.color} stopOpacity=".6" />
            <stop offset="90%" stopColor={s.color} stopOpacity="0" />
          </linearGradient>
        )
      })}
    </defs>
  )
}

export default ChartGradientFill
