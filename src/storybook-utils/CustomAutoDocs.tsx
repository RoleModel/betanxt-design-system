import { Controls, Primary, Stories, Unstyled } from '@storybook/blocks'
import { Description, Subtitle, Title } from '@storybook/blocks'
import { Meta } from '@storybook/blocks'
import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import betanxtTheme from '../themes/betanxtTheme'

type Props = {
  specialMDX?: React.ReactElement
}
export const CustomAutodocsTemplate: React.FC<Props> = ({ specialMDX }) => (
  <ThemeProvider theme={betanxtTheme}>
    <CssBaseline />
    <Unstyled>
      <Meta />
      <Title />
      <Subtitle />
      <Description />
      {specialMDX}
      <Primary />
      <Controls />
      <Stories title="" includePrimary={false} />
    </Unstyled>
  </ThemeProvider>
)
