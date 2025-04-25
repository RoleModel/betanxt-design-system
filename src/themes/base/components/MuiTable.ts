import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: theme.shadows[5],
        borderRadius: theme.vars.shape?.borderRadius,
        '& .MuiTypography-root': {
          fontSize: theme.typography.dataCell.fontSize,
        },
        backgroundColor: theme.vars.palette.tableCellRow.fill,
        contain: 'paint',
        '& .MuiTableCell-head': {
          backgroundColor: theme.vars.palette.tableHeaderRow.restingFill,
          fontSize: theme.typography.dataHeader.fontSize,
          fontWeight: 600,
          borderBottom: `solid 1px ${theme.vars.palette.tableHeaderRow.border}`,
        },
        '& .MuiTableHead-root': {
          backgroundColor: theme.vars.palette.tableHeaderRow.restingFill,
        },
        '& .MuiTableCell-root': {
          fontSize: theme.typography.dataCell.fontSize,
          lineHeight: 1.2,
          borderColor: theme.vars.palette?.dataGridCellRow?.border,
        },
        '& .MuiTypography-caption': {
          lineHeight: theme.typography.caption.lineHeight,
        },
        '& .MuiTableFooter-root': {
          backgroundColor: theme.vars.palette.dataGridPagination.backgroundFill,
          ...theme.typography.caption,
          '& .MuiTableCell-root': {
            ...theme.typography.caption,
            borderBottom: 'none',
          },
        },
      }),
    },
  },
}

export default components
