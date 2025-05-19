/**
 * MUI Component displayName Fix for Storybook
 *
 * This patch fixes all MUI components in Storybook by addressing the root cause:
 * MUI's naming pattern for forwardRef components.
 */

// Add type definition for window.React
declare global {
  interface Window {
    React?: {
      forwardRef: any
    }
  }
}

// Script executes in module context, at import time

// Use a self-executing function to avoid variable name conflicts
;(function patchMUIComponents() {
  // Safety check - only run in browser
  if (typeof window === 'undefined') return

  // Monkey-patch React.forwardRef
  if (window.React && window.React.forwardRef) {
    const originalForwardRef = window.React.forwardRef

    // Replace React.forwardRef with our patched version
    window.React.forwardRef = function patchedForwardRef(render: any) {
      // Call the original to create the component
      const component = originalForwardRef(render)

      // MUI components use a specific pattern where the render function name
      // is prefixed with "Mui" (e.g., MuiButton, MuiTypography)
      if (render && typeof render === 'function' && render.name) {
        const muiMatch = render.name.match(/^Mui(.+)$/)
        if (muiMatch && muiMatch[1]) {
          // Set the displayName to the part after "Mui"
          component.displayName = muiMatch[1]
        }
      }

      return component
    }

    console.log('✓ MUI component displayName patch applied')
  }
})()

// Export something to satisfy module imports
export default {}
