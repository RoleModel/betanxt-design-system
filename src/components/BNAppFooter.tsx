'use client'

import React from 'react'

import { Box, Divider, Link, Typography } from '@mui/material'

import { BNLogo } from './BNLogo.js'

export function BNAppFooter({
  logoEnabled = true,
  privacyPolicyLink = 'https://betanxt.com/privacy-policy',
  additionalCopyright,
  links = [],
}: {
  logoEnabled?: boolean
  privacyPolicyLink?: string
  additionalCopyright?: string
  links?: {
    label: string
    href: string
  }[]
}) {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        gridArea: 'footer',
        display: 'flex',
        alignItems: { xs: 'flex-end', sm: 'center' },
        padding: 2,
        backgroundColor: 'footer.background',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        color: 'common.white',
        minHeight: theme.layout?.footerHeight,
        gap: 2,
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'baseline' },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography variant="body2" sx={{ color: 'inherit', whiteSpace: 'nowrap' }}>
          &copy; {new Date().getFullYear()} BetaNXT Inc.
        </Typography>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          flexItem
          sx={{ backgroundColor: 'common.white', display: { xs: 'none', sm: 'block' } }}
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
              sx={{ backgroundColor: 'common.white' }}
            />
          </>
        )}
        {links && links.length > 0 && (
          <>
            {links.map((link) => (
              <React.Fragment key={link.label}>
                <Link
                  href={link.href}
                  underline="none"
                  variant="body2"
                  sx={{ color: 'inherit', whiteSpace: 'nowrap' }}
                >
                  {link.label}
                </Link>
                <Divider
                  orientation="vertical"
                  variant="fullWidth"
                  flexItem
                  sx={{
                    backgroundColor: 'common.white',
                    display: { xs: 'none', sm: 'block' },
                  }}
                />
              </React.Fragment>
            ))}
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
      {logoEnabled && (
        <BNLogo
          showPoweredBy
          height={24}
          href={'https://betanxt.com'}
          alt={'Go to BetaNXT.com'}
        />
      )}
    </Box>
  )
}
