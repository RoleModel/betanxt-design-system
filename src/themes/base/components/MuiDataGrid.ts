import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.vars.palette?.dataGridDefaultFill,
        border: 'none',
        borderColor: 'transparent',
        borderRadius: theme.vars.shape.borderRadius,
        boxShadow: theme.shadows[5],
        fontSize: theme.typography.dataCell.fontSize,
        '& .MuiTypography-root': {
          fontSize: theme.typography.dataCell.fontSize,
        },
        '--DataGrid-rowBorderColor': theme.vars.palette?.dataGridCellRow?.border,
        '& .MuiDataGrid-overlayWrapperInner': {
          backgroundColor: theme.vars.palette?.dataGridDefaultFill,
        },
        '& .MuiDataGrid-toolbarContainer': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },
        '& .MuiTablePagination-toolbar': {
          fontSize: 'inherit',
        },
        '& .MuiTablePagination-selectLabel': {
          fontSize: 'inherit',
        },
        '& .MuiTablePagination-displayedRows': {
          fontSize: 'inherit',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 500,
          lineHeight: theme.typography.dataHeader.lineHeight,
        },
        '& .MuiDataGrid-columnSeparator': {
          color: theme.vars.palette.divider,
        },
        '& .MuiDataGrid-container--top [role=row]': {
          backgroundColor: theme.vars.palette?.dataGridHeaderRow?.restingFill,
        },
        '& .MuiDataGrid-columnHeaders': {
          borderColor: theme.vars.palette?.dataGridHeaderRow?.border,
          ...theme.typography.dataHeader,
        },
        '& .MuiDataGrid-columnHeader:focus': {
          outline: 'none',
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: theme.vars.palette?.dataGridPagination?.backgroundFill,
          borderColor: theme.vars.palette?.dataGridPagination?.border,
        },
        '& .MuiDataGrid-cell:focus': {
          outline: 'none',
        },
        '& .MuiDataGrid-menu': {
          boxShadow: theme.vars.shadows[8],
        },
      }),
    },
  },
}

export default components
