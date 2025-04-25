import type {} from '@mui/lab/themeAugmentation'
import type { ThemeOptions } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/x-data-grid/themeAugmentation'

import MuiAppBar from './components/MuiAppBar.js'
import MuiAutocomplete from './components/MuiAutocomplete.js'
import MuiBadge from './components/MuiBadge.js'
import MuiButton from './components/MuiButton.js'
import MuiCard from './components/MuiCard.js'
import MuiChip from './components/MuiChip.js'
import MuiCssBaseline from './components/MuiCssBaseline.js'
import MuiDataGrid from './components/MuiDataGrid.js'
import MuiDialog from './components/MuiDialog.js'
import MuiForm from './components/MuiForm.js'
import MuiInput from './components/MuiInput.js'
import MuiLink from './components/MuiLink.js'
import MuiList from './components/MuiList.js'
import MuiMenu from './components/MuiMenu.js'
import MuiPagination from './components/MuiPagination.js'
import MuiTable from './components/MuiTable.js'
import MuiTabs from './components/MuiTabs.js'
import MuiTimeline from './components/MuiTimeline.js'
import MuiToggleButton from './components/MuiToggleButton.js'
import MuiTypography from './components/MuiTypography.js'

export const components: ThemeOptions['components'] = {
  ...MuiAppBar,
  ...MuiAutocomplete,
  ...MuiBadge,
  ...MuiButton,
  ...MuiCard,
  ...MuiChip,
  ...MuiCssBaseline,
  ...MuiDataGrid,
  ...MuiDialog,
  ...MuiForm,
  ...MuiInput,
  ...MuiLink,
  ...MuiList,
  ...MuiMenu,
  ...MuiPagination,
  ...MuiTable,
  ...MuiTabs,
  ...MuiTimeline,
  ...MuiToggleButton,
  ...MuiTypography,
}
