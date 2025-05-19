'use client'

import { Box, Divider, Link, Typography } from '@mui/material'

import { BetaNXTLogo } from './betanxt-logo'
import { useTheme } from '@mui/material/styles'

export function AppFooter({
  logoEnabled = true,
  privacyPolicyLink = 'https://www.mediantinc.com/privacy-policy',
  additionalCopyright,
}: {
  logoEnabled?: boolean
  privacyPolicyLink?: string
  additionalCopyright?: string
}) {
  const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        gridArea: 'footer',
        display: 'flex',
        alignItems: 'center',
        paddingInline: 2,
        backgroundColor: 'footer.background',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        color: 'common.white',
        minHeight: theme.layout?.footerHeight,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ color: 'inherit' }}>
          2025 BetaNXT L.P.
        </Typography>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          sx={{ backgroundColor: 'primary.contrastText' }}
        />
        {additionalCopyright && (
          <>
            <Typography variant="body2" sx={{ color: 'inherit' }}>
              {additionalCopyright}
            </Typography>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              sx={{ backgroundColor: 'primary.contrastText' }}
            />
          </>
        )}
        <Link
          href={privacyPolicyLink}
          underline="none"
          target="_blank"
          variant="body2"
          sx={{ color: 'inherit' }}
        >
          Privacy Statement
        </Link>
      </Box>
      {logoEnabled && <BetaNXTLogo />}
    </Box>
  )
}
