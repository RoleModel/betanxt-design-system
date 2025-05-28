'use client'

import { Box, Divider, Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { BetaNXTLogo } from './betanxt-logo'

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
        alignItems: { xs: 'flex-end', sm: 'center' },
        padding: 2,
        backgroundColor: 'footer.background',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        color: 'common.white',
        minHeight: theme.layout?.footerHeight,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography variant="body2" sx={{ color: 'inherit', whiteSpace: 'nowrap' }}>
          &copy; 2025 BetaNXT Inc.
        </Typography>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          sx={{ backgroundColor: 'common.white', display: { xs: 'none', sm: 'block' } }}
        />
        {additionalCopyright && (
          <>
            <Typography variant="body2" sx={{ color: 'inherit', whiteSpace: 'nowrap' }}>
              {additionalCopyright}
            </Typography>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              sx={{
                backgroundColor: 'common.white',
                display: { xs: 'none', sm: 'block' },
              }}
            />
          </>
        )}
        <Link
          href={privacyPolicyLink}
          underline="none"
          target="_blank"
          variant="body2"
          sx={{ color: 'inherit', whiteSpace: 'nowrap' }}
        >
          Privacy Statement
        </Link>
      </Box>
      {logoEnabled && <BetaNXTLogo />}
    </Box>
  )
}
