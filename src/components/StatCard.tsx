'use client'

import {
  Box,
  Card,
  CardContent,
  Link,
  Link as MUILink,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material'

type StatCardProps = {
  text: string
  total: number
  link: string
  linkText: string
  direction?: 'row' | 'column'
  secondaryColor?: boolean
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  transition: theme.transitions.create(['background-color']),
  '&:hover': {
    backgroundColor: 'background.paper',
  },
}))

export function StatCard({
  text,
  total,
  link,
  linkText,
  direction = 'row',
  secondaryColor = false,
}: StatCardProps) {
  const isExtraSmallScreen = useMediaQuery('(max-width:600px)')
  const theme = useTheme()
  const createTransition = theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.short,
    easing: 'ease-in-out',
  })

  if (direction === 'column') {
    return (
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: isExtraSmallScreen ? '100%' : 352,
          height: 'auto',
          minWidth: 250,
          alignItems: 'center',
          flex: '1 0 0',
          alignSelf: 'stretch',
          backgroundColor: 'white',
          boxShadow: 'none',
          transition: createTransition,
          background: 'white',
          '&:hover': {
            backgroundColor: 'background.paper',
          },
          ...theme.applyStyles('dark', {
            backgroundColor: 'background.paper',
            '&:hover': {
              backgroundColor: 'background.default',
            },
          }),
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: secondaryColor ? 'secondary.main' : 'tertiary.main',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="hero"
            sx={{
              color: secondaryColor ? 'secondary.contrastText' : 'tertiary.contrastText',
              textAlign: 'center',
              fontSize: 60,
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            {total}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 0.5,
            width: '100%',
            flex: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              textAlign: 'left',
              width: '100%',
            }}
          >
            {text}
          </Typography>
          <MUILink href={link} component={Link} variant="body3" underline="always">
            {linkText}
          </MUILink>
        </Box>
      </Card>
    )
  }

  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: isExtraSmallScreen ? '100%' : 352,
        height: isExtraSmallScreen ? 86 : 124,
        minWidth: 270,
        minHeight: 100,
        alignItems: 'center',
        flex: '1 0 0',
        alignSelf: 'stretch',
        transition: createTransition,
        background: 'white',
        '&:hover': {
          backgroundColor: 'background.paper',
        },
        ...theme.applyStyles('dark', {
          backgroundColor: 'background.paper',
          '&:hover': {
            backgroundColor: 'background.default',
          },
        }),
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minWidth: 120,
          backgroundColor: secondaryColor ? 'secondary.main' : 'tertiary.main',
          alignItems: 'center',
          alignSelf: 'stretch',
        }}
      >
        <Typography
          variant="hero"
          sx={{
            color: secondaryColor ? 'secondary.contrastText' : 'tertiary.contrastText',
            textAlign: 'center',
            fontSize: 60,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          {total}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 0.5,
          flex: '1 0 0',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            textAlign: 'left',
            width: '100%',
          }}
        >
          {text}
        </Typography>
        <MUILink href={link} component={Link} variant="body3" underline="always">
          {linkText}
        </MUILink>
      </Box>
    </Card>
  )
}
