// MUi Accordion Overides

import type { ThemeOptions } from '@mui/material/styles'
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import { } from '../../mui-type-customizations'

const components: ThemeOptions['components'] = {
  MuiAccordion: {
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
              background: 'none',
              borderBottom: '1px solid',
              borderColor: (theme.vars || theme).palette.divider,
            },
          },
          {
            props: { disablePadding: true },
            style: {
              '& .MuiButtonBase-root.MuiAccordionSummary-root': {
                paddingX: 0,
              },
              '& .MuiAccordionDetails-root': {
                paddingX: 0,
              },
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
