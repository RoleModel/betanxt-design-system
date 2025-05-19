import type { Meta, StoryObj } from '@storybook/react'

import { AppFooter as AppFooterComponent } from './AppFooter'

const meta = {
  title: 'Components/AppFooter',
  component: AppFooterComponent,
} satisfies Meta<typeof AppFooterComponent>

export default meta

type Story = StoryObj<typeof meta>

export const AppFooter: Story = {
  args: {
    logoEnabled: true,
    privacyPolicyLink: 'Privacy Statement',
    additionalCopyright: 'Additional Copyright',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-144879&t=pzETyogQc7g9yIdz-11',
    },
  },
}
