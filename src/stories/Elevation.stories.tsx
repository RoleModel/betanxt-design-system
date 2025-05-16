import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

const meta: Meta<typeof Paper> = {
  title: 'Foundation/Elevation',
  component: Paper,
  tags: ['!autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=16447-20814&t=njdQUyzVttt456w5-11',
    },
    docs: {
      page: null,
    },
  },
} satisfies Meta<typeof Paper>

export default meta
type Story = StoryObj<typeof Paper>

export const Elevation: Story = {
  render: () => {
    // Create an array of elevation levels from 0 to 24
    const elevationLevels = Array.from({ length: 25 }, (_, i) => i)

    return (
      <Box sx={{ maxWidth: '1200px', p: 3 }}>
        <Typography variant="pageTitle" component="h1" gutterBottom>
          Elevation
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          Material UI provides elevation levels from 0 to 24, represented by shadows of
          increasing intensity. Higher elevation values create more pronounced shadows,
          giving the impression that elements are raised further from the surface.
        </Typography>

        <Grid container spacing={3}>
          {elevationLevels.map((elevation) => (
            <Grid size={3} key={elevation}>
              <Paper
                elevation={elevation}
                sx={{
                  p: 3,
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant="h6">Elevation {elevation}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  },
}
