export const MockLinkComponent = ({ to, children, ...props }: any) => (
  <a
    {...props}
    href={to}
    onClick={(e) => {
      e.preventDefault()
      console.log(`Mock link clicked: ${to}`)
    }}
  >
    {children}
  </a>
)
