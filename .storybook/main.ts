import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/**/*.mdx',
    '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-designs',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    './addons/mui-theme-toggle/register.tsx',
    '@storybook/addon-vitest',
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
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
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

    // Add proper handling for ESM modules
    viteConfig.optimizeDeps = viteConfig.optimizeDeps || {}
    viteConfig.optimizeDeps.include = [
      ...(viteConfig.optimizeDeps.include || []),
      '@storybook/addon-docs/blocks',
      '@storybook/addon-docs',
    ]

    // Fix for JSX in JS files - no specific loader needed in most cases
    // since Vite handles JSX by default
    viteConfig.optimizeDeps.esbuildOptions = {
      jsx: 'automatic',
    }

    return viteConfig
  },
}
export default config
