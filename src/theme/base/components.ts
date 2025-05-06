import type {} from '@mui/lab/themeAugmentation'
import type { ThemeOptions } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-data-grid/themeAugmentation'

// This is needed because MUI doesn't have a background color for default badge and setting a background color on the root element overrides the semantic colors background. We need to create a new color prop.
declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    neutral: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
  }
}

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsVariantOverrides {
    report: true
  }

  interface ToggleButtonOwnProps {
    variant?: 'report'
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsVariantOverrides {
    tall: true
  }

  interface ToggleButtonGroupProps {
    variant?: 'tall'
  }
}

export const components: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontSize: '14px',
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      enableColorOnDark: false,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiToolbar-root': {
          minHeight: theme.layout?.navbarHeight,
        },
        '&.MuiAppBar-root.MuiAppBar-colorPrimary': {
          backgroundColor: theme.vars.palette.appBarPrimary?.defaultFill,
          color: theme.vars.palette.appBarPrimary?.defaultContrast,
          backgroundImage: 'none',
          boxShadow: 'none',
          alignItems: 'stretch',
          justifyContent: 'center',
          '& .MuiTabs-flexContainer': {
            height: theme.layout?.navbarHeight,
            paddingBottom: theme.spacing(0.25),
          },
          '& .MuiTabs-indicator': {
            backgroundColor: theme.vars.palette.appBarPrimary?.tabIndicator,
            height: 4,
          },
          '& .MuiTabs-root': {
            opacity: 1,
            '.Mui-selected': {
              color: theme.vars.palette.appBarPrimary?.defaultContrast,
            },
          },
          '& .MuiTab-root ': {
            transition: `all ${theme.transitions.duration.shorter}ms ease-in`,
            color: theme.vars.palette.appBarPrimary?.defaultContrast,
            '&:hover': {
              color: theme.vars.palette.appBarPrimary?.hover,
              boxShadow: `inset 0 -4px 0 0 ${theme.vars.palette.appBarPrimary?.hover}`,
            },
          },
        },
        '&.MuiAppBar-root.MuiAppBar-colorSecondary': {
          backgroundColor: theme.vars.palette.appBarSecondary?.defaultFill,
          backgroundImage: 'none',
          color: theme.vars.palette.appBarSecondary?.defaultContrast,
          borderBottom: `1px solid ${theme.vars.palette.primary.main}`,
          boxShadow: 'none',
          '& .MuiTabs-flexContainer': {
            height: theme.layout?.navbarHeight,
            paddingBottom: theme.spacing(0.25),
          },
          '& .MuiTabs-indicator': {
            backgroundColor: theme.vars.palette.appBarSecondary?.tabIndicator,
            height: 4,
          },
          '& .MuiTab-root ': {
            color: theme.vars.palette.appBarSecondary?.defaultContrast,
            transition: `all ${theme.transitions.duration.shorter}ms ease-in`,
          },
          '& .MuiTab-root:hover ': {
            color: theme.vars.palette.appBarSecondary?.hover,
            boxShadow: `inset 0 -4px 0 0 ${theme.vars.palette.appBarSecondary?.hover}`,
          },
          '& .MuiTabs-root.Mui-selected': {
            color: theme.vars.palette.appBarSecondary?.defaultContrast,
          },
        },
      }),
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        body3: 'p',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
        },
        '&.MuiChip-sizeSmall': {
          lineHeight: '1.5rem',
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        textAlign: 'center',
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginTop: 0,
      },
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 5,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadius,
        height: '100%',
      }),
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h3',
      },
      subheaderTypographyProps: {
        variant: 'subtitle1',
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiCardContent-root:last-child': {
          paddingBottom: theme.spacing(2),
        },
      }),
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiCardActions-root': {
          justifyContent: 'flex-end',
          padding: theme.spacing(1),
        },
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        '& .MuiTab-root': {
          lineHeight: 1,
          textTransform: 'none',
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      size: 'large',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        whiteSpace: 'nowrap',
        textTransform: 'none',
        '&.MuiButtonOutlined.MuiButtonColorWarning': theme.vars.palette.warning.dark,
        variants: [
          {
            props: { size: 'large' },
            style: ({ theme }) => ({
              fontSize: theme.typography.button.fontSize,
              height: '2.25rem',
            }),
          },
          {
            props: { size: 'medium' },
            style: ({ theme }) => ({
              fontSize: theme.typography.button.fontSize,
              height: '1.875rem',
            }),
          },
          {
            props: { size: 'small' },
            style: {
              fontSize: '0.8125rem',
              height: '1.5rem',
            },
          },
        ],
      }),
    },
  },
  MuiChartsTooltip: {
    styleOverrides: {
      cell: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
        '.MuiTypography-root': {
          fontSize: theme.typography.body3.fontSize,
        },
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      grouped: ({ theme }) => ({
        borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)`,
        color: theme.vars.palette.primary.main,
        '&.Mui-selected': {
          backgroundColor: theme.vars.palette.primary.main,
          color: theme.palette.common.white,
        },
      }),
    },
  },
  MuiToggleButton: {
    defaultProps: {
      size: 'large',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'none',
        transition: `all ${theme.transitions.duration.shortest}ms ease-in`,
        fontSize: theme.typography.button.fontSize,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          },
        },
        '&:hover': {
          backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.14)`,
          color: theme.vars.palette.primary.dark,
        },
        '&.MuiToggleButton-sizeLarge': {
          padding: '0.45rem',
        },
        variants: [
          {
            props: { variant: 'report' },
            style: {
              '&.MuiButtonBase-root': {
                backgroundColor: theme.vars.palette.background.paper,
                borderColor: theme.vars.palette.divider,
                padding: theme.spacing(2),
                '&:hover': {
                  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
                  borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
                },
              },
              '&.Mui-selected': {
                backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.14)`,
                borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.8)`,
              },
            },
          },
          {
            props: { variant: 'tall' },
            style: {
              '& .MuiButtonBase-root': {
                lineHeight: 24 / 14,
              },
            },
          },
        ],
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialogTitle-root': {
          fontSize: theme.typography.body1.fontSize,
          padding: theme.spacing(2),
        },
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        input: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0px 100px ${theme.vars.palette.inputOutlinedEnabledFill} inset`,
            WebkitTextFillColor: theme.vars.palette.text.primary,
            caretColor: theme.vars.palette.text.primary,
          },
          '.dark &:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0px 100px ${theme.vars.palette.inputOutlinedEnabledFill} inset`,
            WebkitTextFillColor: theme.vars.palette.text.primary,
            caretColor: theme.vars.palette.text.primary,
          },
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.vars.palette.inputOutlinedEnabledFill,
        fontSize: theme.typography.body3.fontSize,
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body3.fontSize,
        color: theme.vars.palette.text.secondary,
      }),
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      paper: ({ theme }) => ({
        boxShadow: theme.vars.shadows[8],
      }),
      option: {
        fontSize: '0.875rem',
      },
    },
  },
  MuiAreaElement: {
    styleOverrides: {
      root: {
        opacity: 0.2,
      },
    },
  },
  MuiMenu: {
    defaultProps: {
      MenuListProps: {
        dense: true,
      },
    },
  },
  MuiMenuItem: {
    defaultProps: {
      dense: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiMenuItem-dense': {
          fontSize: theme.typography.body3.fontSize,
          '& .MuiStack-root': {
            alignItems: 'center',
          },
        },
      }),
    },
  },
  MuiListItemText: {
    defaultProps: {
      primaryTypographyProps: {
        variant: 'body3',
      },
      secondaryTypographyProps: {
        variant: 'body3',
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.vars.palette.link,
        fontWeight: 500,
        textDecoration: 'none',
      }),
    },
  },
  MuiDialogTitle: {
    defaultProps: {
      variant: 'h6',
    },
  },
  MuiBadge: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { color: 'neutral' },
            style: {},
          },
        ],
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        '--unstable_DataGrid-radius': theme.vars.shape.borderRadius,
        '--DataGrid-containerBackground':
          theme.vars.palette.dataGridDefaultFill,
        '--DataGrid-rowBorderColor': theme.vars.palette.dataGridCellRow.border,
        border: 'none',
        backgroundColor: theme.vars.palette.dataGridDefaultFill,
        boxShadow: theme.shadows[5],
        fontSize: theme.typography.body3.fontSize,
        '& .MuiDataGrid-overlayWrapperInner': {
          backgroundColor: theme.vars.palette.dataGridDefaultFill,
        },
        '& .MuiDataGrid-toolbarContainer': {
          backgroundColor: theme.vars.palette.dataGridHeaderRow.restingFill,
        },
        '& .MuiDataGrid-cell--editing': {
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
        '& .MuiDataGrid-columnSeparator': {
          color: theme.vars.palette.divider,
        },
        '& .MuiDataGrid-columnHeaders': {
          background: theme.vars.palette.dataGridHeaderRow.restingFill,
        },
        '& .MuiDataGrid-columnHeader': {
          background: theme.vars.palette.dataGridHeaderRow.restingFill,
          backdropFilter: 'blur(4px)',
        },
        '& .MuiDataGrid-container--top [role="row"]': {
          background: theme.vars.palette.dataGridHeaderRow.restingFill,
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: theme.vars.palette.dataGridPagination.backgroundFill,
          borderColor: theme.vars.palette.dataGridCellRow.border,
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
        '& .MuiDataGrid-cell': {
          [`&:focus`]: {
            outline: 'none',
          },
        },
      }),
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
  MuiTimelineSeparator: {
    styleOverrides: {
      root: {
        margin: '0 0 -0.75rem 0',
      },
    },
  },

  MuiTimelineDot: {
    styleOverrides: {
      root: {
        margin: '0.625rem 0 0 0',
      },
    },
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: {
        '&.MuiTimelineContent-positionRight': {
          paddingLeft: '.5rem',
        },
      },
    },
  },
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
