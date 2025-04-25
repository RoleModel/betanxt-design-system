import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiPagination: {
    defaultProps: {
      shape: 'rounded',
      size: 'small',
      variant: 'text',
      color: 'standard',
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        '&.MuiPaginationItem-sizeSmall': {
          fontSize: '0.875rem',
        },
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      toolbar: {
        fontSize: '0.875rem',
      },
      selectLabel: {
        fontSize: 'inherit',
      },
      displayedRows: {
        fontSize: 'inherit',
      },
    },
  },
}

export default components
