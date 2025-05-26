import React from 'react'
import { useDrawingArea } from '@mui/x-charts'

export interface GradientStop {
  offset: string | number
  stopColor: string
  stopOpacity: number
}

export interface SeriesGradient {
  id: string
  color: string
  stops?: GradientStop[]
  direction?: 'vertical' | 'horizontal'
  startOpacity?: number
  endOpacity?: number
}

export interface ChartGradientFillProps {
  series: SeriesGradient[]
  defaultStartOpacity?: number
  defaultEndOpacity?: number
  defaultDirection?: 'vertical' | 'horizontal'
}

const ChartGradientFill: React.FC<ChartGradientFillProps> = ({
  series,
  defaultStartOpacity = 1,
  defaultEndOpacity = 0,
  defaultDirection = 'vertical',
}) => {
  const { top, height, bottom, left, width } = useDrawingArea()
  const svgHeight = top + bottom + height

  const getGradientCoordinates = (direction: 'vertical' | 'horizontal') => {
    if (direction === 'horizontal') {
      return {
        x1: left,
        y1: top + height / 2,
        x2: left + width,
        y2: top + height / 2,
      }
    }
    // Default to vertical
    return {
      x1: left + width / 2,
      y1: top,
      x2: left + width / 2,
      y2: svgHeight,
    }
  }

  return (
    <defs>
      {series.map((seriesGradient) => {
        const direction = seriesGradient.direction || defaultDirection
        const coordinates = getGradientCoordinates(direction)
        const startOpacity = seriesGradient.startOpacity ?? defaultStartOpacity
        const endOpacity = seriesGradient.endOpacity ?? defaultEndOpacity

        // Use custom stops if provided, otherwise create default two-stop gradient
        const stops = seriesGradient.stops || [
          {
            offset: '0%',
            stopColor: seriesGradient.color,
            stopOpacity: startOpacity,
          },
          {
            offset: '100%',
            stopColor: seriesGradient.color,
            stopOpacity: endOpacity,
          },
        ]

        return (
          <linearGradient
            key={seriesGradient.id}
            id={seriesGradient.id}
            x1={coordinates.x1}
            y1={coordinates.y1}
            x2={coordinates.x2}
            y2={coordinates.y2}
            gradientUnits="userSpaceOnUse"
          >
            {stops.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                stopColor={stop.stopColor}
                stopOpacity={stop.stopOpacity}
              />
            ))}
          </linearGradient>
        )
      })}
    </defs>
  )
}

ChartGradientFill.displayName = 'ChartGradientFill'

export default ChartGradientFill
