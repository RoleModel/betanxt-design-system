/**
 * MUI Component displayName Fix for Storybook
 *
 * This patch fixes all MUI components in Storybook by setting proper displayName
 * for forwardRef components, solving the <forwardRef> issue in Storybook docs.
 */

import * as Mui from '@mui/material'
import * as MuiCharts from '@mui/x-charts'

// Function to patch components from a package
const patchComponents = (packageComponents: any, packageName: string) => {
  const componentNames = Object.keys(packageComponents).filter(name => {
    return name[0] === name[0].toUpperCase()
  })

  let patchedCount = 0
  for (const componentName of componentNames) {
    const component = packageComponents[componentName]

    // Check if it's a React component (has render function indicating forwardRef)
    if (component && typeof component === 'object' && component.render) {
      // Set displayName to the component name
      component.displayName = componentName
      patchedCount++
    }
  }

  console.log(`✓ Patched ${patchedCount} components from ${packageName}`)
  return patchedCount
}

// Patch MUI Material components
const materialCount = patchComponents(Mui, '@mui/material')

// Patch MUI X Charts components
const chartsCount = patchComponents(MuiCharts, '@mui/x-charts')

console.log(`✓ Total patched: ${materialCount + chartsCount} MUI components with displayName`)

// Export something to satisfy module imports
export default {}
