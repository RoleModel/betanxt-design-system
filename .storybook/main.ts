import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../src/stories/assets'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async (viteConfig) => {
    const buildConfig = (viteConfig.build ??= {})
    const rollupOptions = (buildConfig.rollupOptions ??= {})

    const originalOnWarn = rollupOptions.onwarn

    rollupOptions.onwarn = (warning, warn) => {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return

      if (typeof originalOnWarn === 'function') {
        originalOnWarn(warning, warn)
        return
      }

      warn(warning)
    }

    return viteConfig
  },
}
export default config
