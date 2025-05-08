import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
        boxShadow: theme.shadows[5],
        borderRadius: theme.vars.shape.borderRadius,
        border: 'none',
        backgroundColor: theme.vars.palette.dataGridDefaultFill,
        '& .MuiDataGrid-overlayWrapperInner': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },
        '& .MuiDataGrid-toolbarContainer': {
          backgroundColor: theme.vars.palette.dataGridHeaderRow.restingFill,
        },
        '& .MuiDataGrid-row': {
          borderColor: theme.vars.palette.dataGridCellRow.border,
        },

        // Header Row Styles
        '& .MuiDataGrid-columnSeparator': {
          color: theme.vars.palette.divider,
        },
        '& .MuiDataGrid-columnHeaders': {
          background: theme.vars.palette.dataGridHeaderRow.restingFill,
        },
        '& .MuiDataGrid-row--borderBottom .MuiDataGrid-columnHeader': {
          borderColor: theme.vars.palette.dataGridHeaderRow.border,
        },
        '& .MuiDataGrid-columnHeader': {
          background: theme.vars.palette.dataGridHeaderRow.restingFill,
          backdropFilter: 'blur(4px)',
        },
        '& .MuiDataGrid-container--top [role="row"]': {
          background: theme.vars.palette.dataGridHeaderRow.restingFill,
        },

        // DataGrid Footer and Pagination Styles
        '& .MuiTablePagination-selectLabel': {
          fontSize: 'inherit',
        },
        '& .MuiTablePagination-displayedRows': {
          fontSize: 'inherit',
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: theme.vars.palette.dataGridPagination.backgroundFill,
          borderColor: theme.vars.palette.dataGridCellRow.border,
        },
        '& .MuiTablePagination-toolbar': {
          fontSize: 'inherit',
        },
        '& .MuiDataGrid-filler': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },

        // Row Hover Styling
        '& .MuiDataGrid-row:hover': {
          backgroundColor: theme.vars.palette.action.hover,
        },

        // Pinned Column Stying
        '& .MuiDataGrid-filler--pinnedRight': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },
        '& .MuiDataGrid-cell--pinnedLeft': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
          backdropFilter: 'blur(6px)',
        },
        '& .MuiDataGrid-cell--pinnedRight': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
          backdropFilter: 'blur(6px)',
        },
        '& .MuiDataGrid-row:hover .MuiDataGrid-cell--pinnedRight': {
          backgroundColor: 'transparent',
        },
        '& .MuiDataGrid-row:hover .MuiDataGrid-cell--pinnedLeft': {
          backgroundColor: 'transparent',
        },

        // Cell Styling
        '& .MuiDataGrid-cell--editing': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },
        '& .MuiDataGrid-cell': {
          [`&:focus`]: {
            outline: 'none',
          },
        },
      }),
    },
  },

}

export default components
