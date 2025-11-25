// MUI Accordion Overrides
import { accordionClasses } from '@mui/material/Accordion'
import { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import type { ThemeOptions } from '@mui/material/styles'

import '../../mui-type-customizations'

const components: ThemeOptions['components'] = {
  MuiAccordion: {
    defaultProps: {
      variant: 'elevation',
      elevation: 5,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiList-root': {
          padding: 0,
        },
        '&:first-of-type': {
          '& .MuiButtonBase-root': {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          },
        },
        '&:last-of-type': {
          borderBlockEnd: `1px solid ${theme.vars.palette.divider}`,
          '& .MuiButtonBase-root': {
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          },
        },
        variants: [
          {
            props: { variant: 'outlined', disableGutters: true },
            style: {
              border: 0,
              borderInline: `1px solid ${theme.vars.palette.divider}`,
              borderBlock: `1px solid ${theme.vars.palette.divider}`,
              borderBlockEnd: `0`,
              '&::before': {
                display: 'none',
              },
              '&:last-of-type': {
                borderBlockEnd: `1px solid ${theme.vars.palette.divider}`,
              },
            },
          },
          {
            props: { variant: 'outlined', disableGutters: false },
            style: {
              border: `1px solid ${theme.palette.divider}`,
              '&:not(:first-of-type)': {
                borderBlockStart: 0,
              },
              '&:not(:first-of-type).Mui-expanded': {
                borderBlockStart: `1px solid ${theme.vars.palette.divider}`,
              },
              '&.MuiPaper-root.Mui-expanded': {
                borderRadius: 3,
              },
              // Add border top to accordions that follow an expanded one
              [`.${accordionClasses.root}.Mui-expanded + &`]: {
                borderBlockStart: `1px solid ${theme.vars.palette.divider}`,
              },
              '&.Mui-expanded:not(:last-of-type)': {
                borderBlockEnd: `1px solid ${theme.vars.palette.divider}`,
              },
              '&::before': {
                display: 'none',
              },
            },
          },
        ],
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create(['all']),
        '&.Mui-expanded': {
          minHeight: 50,
        },
        '&:hover': {
          background: theme.vars.palette.action.hover,
        },
        [`.${accordionSummaryClasses.content}`]: {
          marginTop: 12,
          marginBottom: 12,
        },
        variants: [
          {
            props: { variant: 'column' },
            style: {
              [`.${accordionSummaryClasses.content}`]: {
                flexDirection: 'column',
              },
              [`.${accordionSummaryClasses.expandIconWrapper}`]: {
                marginLeft: 12,
              },
            },
          },
        ],
      }),
    },
  },
}

export default components
