// MUi Accordion Overides
import { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import type { ThemeOptions } from '@mui/material/styles'

import '../../mui-type-customizations'

const components: ThemeOptions['components'] = {
  MuiAccordion: {
    defaultProps: {
      // This will consume the prop so it doesn't leak to DOM
      disablePadding: false,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTypography-root': {
          fontSize: theme.typography.body2.fontSize,
        },
        '&:before': {
          visibility: 'hidden',
          background: 'none',
        },
        variants: [
          {
            props: { variant: 'simple' },
            style: {
              '--mui-shape-borderRadius': '0',
              background: 'none',
              borderBottom: '1px solid',
              borderColor: (theme.vars || theme).palette.divider,
              transition: theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
              '& .MuiPaper-root': {
                borderRadius: 0,
              },
              '&:hover': {
                background: theme.palette.action.hover,
              },
            },
          },
          {
            props: { disablePadding: true },
            style: {
              '& .MuiButtonBase-root.MuiAccordionSummary-root': {
                paddingLeft: 0,
                paddingRight: 0,
                transition: theme.transitions.create(['background-color', 'padding'], {
                  duration: theme.transitions.duration.short,
                }),
              },
              '&:hover .MuiButtonBase-root.MuiAccordionSummary-root': {
                paddingLeft: 8,
                paddingRight: 8,
              }
            },
          },
        ],
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { variant: 'column' },
            style: {
              [`.${accordionSummaryClasses.content}`]: {
                flexDirection: 'column',
              },
            },
          },
        ],
      },
    },
  },
}

export default components
