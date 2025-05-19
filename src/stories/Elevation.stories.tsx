import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Container, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

const meta: Meta<typeof Paper> = {
  title: 'Foundation/Elevation',
  component: Paper,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
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

// Render the elevation samples with full respect for the theme
export const Elevation: Story = {
  render: () => {
    // Create an array of elevation levels from 0 to 24
    const elevationLevels = Array.from({ length: 25 }, (_, i) => i)

    return (
      <Container maxWidth="xl" sx={{ p: 3 }}>
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
                }}
              >
                <Typography variant="body1">Elevation {elevation}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  },
}
