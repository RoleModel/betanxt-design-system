import type { Meta, StoryObj } from '@storybook/react'

import { AppsFooter as AppsFooterComponent } from './AppsFooter'
import { Typography } from '@mui/material'
const meta = {
  title: 'Components/AppsFooter',
  component: AppsFooterComponent,
} satisfies Meta<typeof AppsFooterComponent>

export default meta

type Story = StoryObj<typeof meta>

export const AppsFooter: Story = {
  args: {
    logoEnabled: true,
    privacyPolicyLink: 'Privacy Statement',
    additionalCopyright: 'Additional Copyright',
  },
}
