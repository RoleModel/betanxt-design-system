import type { ThemeOptions } from '@mui/material/styles'

const components: ThemeOptions['components'] = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        body3: 'p',
      },
    },
  },
}

export default components
