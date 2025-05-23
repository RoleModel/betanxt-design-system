import React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import type { ChipProps } from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

export interface MuiTimelineItemData {
  id: string
  status: string
  description?: string
  time?: string
  dotVariant?: 'filled' | 'outlined'
  eventColor?:
    | 'default'
    | 'inherit'
    | 'grey'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  isCurrent?: boolean
  titlePosition?: 'left' | 'right' | 'center'
}

export interface TimelineProps {
  items: MuiTimelineItemData[]
  position?: 'left' | 'right' | 'alternate' | 'alternate-reverse'
  title?: string
}

const TimeLine: React.FC<TimelineProps> = ({ items, position = 'left', title }) => {
  if (!items || items.length === 0) {
    return <Typography>No timeline items to display.</Typography>
  }

  const useOppositeContent = position === 'alternate' || position === 'alternate-reverse'

  return (
    <Box sx={{ width: '100%' }}>
      {title && (
        <Typography
          variant="body1"
          fontWeight={500}
          textAlign={
            position === 'right' ? 'left' : position === 'left' ? 'right' : 'center'
          }
        >
          {title}
        </Typography>
      )}
      <Timeline
        position={position}
        sx={{
          m: 0,
          p: 0,
          ...(!useOppositeContent && {
            [`& .${timelineItemClasses.root}:before`]: {
              display: 'none',
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              display: 'none',
            },
          }),
        }}
      >
        {items.map((item, index) => {
          // Determine the dot's appearance based on eventColor, isCurrent, or default to text.primary
          let resolvedDotColorName: MuiTimelineItemData['eventColor'] | 'grey' = 'grey'; // Default to grey, which we'll map to text.primary
          if (item.eventColor && item.eventColor !== 'default' && item.eventColor !== 'inherit') {
            resolvedDotColorName = item.eventColor;
          } else if (item.isCurrent) {
            resolvedDotColorName = 'primary';
          }

          let chipColor: ChipProps['color'] = 'default';
          if (item.isCurrent) {
            const eventChipColor = item.eventColor || 'default';
            if (['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'].includes(eventChipColor)) {
              chipColor = eventChipColor as ChipProps['color'];
            }
          }

          const determinedVariant = item.isCurrent ? 'outlined' : (item.dotVariant || 'filled');
          let dotStyles: any = {}; // Using 'any' for SxProps<Theme>

          if (item.isCurrent) {
            // Current items always get the special outline style
            dotStyles = {
              outline: '2px solid',
              outlineOffset: '-6px',
              // resolvedDotColorName is 'primary' for current items due to your earlier change, or another semantic color if specified by eventColor
              outlineColor: resolvedDotColorName === 'grey'
                              ? 'text.primary'
                              : `${resolvedDotColorName}.main`,
              // Ensure the background is appropriate for an outlined current dot, often transparent or theme default for outlined
              // backgroundColor: 'transparent', // Optional: if color prop fills it unexpectedly
            };
          } else if (determinedVariant === 'outlined') {
            // Non-current, outlined items
            dotStyles = {
              outlineColor: resolvedDotColorName === 'grey' ? 'text.primary' : undefined,
            };
          } else { // Non-current, filled items
            dotStyles = {
              backgroundColor: resolvedDotColorName === 'grey' ? 'text.primary' : undefined,
            };
          }

          return (
            <TimelineItem key={item.id}>
              {useOppositeContent && item.time && (
                <TimelineOppositeContent variant="body3" color="text.secondary">
                  {item.time}
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot
                  variant={determinedVariant}
                  color={resolvedDotColorName !== 'grey' ? resolvedDotColorName : undefined}
                  sx={dotStyles}
                />
                {index < items.length - 1 && (() => {
                  let connectorBgColor: string;
                  const colorToUse = resolvedDotColorName;

                  if (colorToUse === 'grey') {
                    // This handles:
                    // 1. True default (text.primary)
                    // 2. item.eventColor was 'default' (and not isCurrent)
                    // 3. item.eventColor was 'inherit' (and not isCurrent)
                    connectorBgColor = 'text.primary';
                  } else {
                    // colorToUse is 'warning', 'primary', 'secondary', 'error', 'info', or 'success'
                    connectorBgColor = `${colorToUse}.main`;
                  }
                  return (
                    <TimelineConnector
                      sx={{
                        bgcolor: connectorBgColor,
                      }}
                    />
                  );
                })()}
              </TimelineSeparator>
              <TimelineContent>
                {!useOppositeContent && item.time && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                    gutterBottom={!item.status && !item.description}
                  >
                    {item.time}
                  </Typography>
                )}
                {item.isCurrent ? (
                  <Chip label={item.status} color={chipColor} size="small" />
                ) : (
                  <Typography variant="body3" component="div">
                    {item.status}
                  </Typography>
                )}
                {item.description && (
                  <Typography
                    variant="body3"
                    color="text.secondary"
                    component="div"
                    sx={{ mt: 0.5 }}
                  >
                    {item.description}
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Box>
  )
}

export default TimeLine
