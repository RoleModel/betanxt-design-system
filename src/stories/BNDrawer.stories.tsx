import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardActions,
  Typography,
} from '@mui/material'

import { BNDrawer } from '../components/drawer/BNDrawer'

const meta = {
  title: 'Custom Components/BNDrawer',
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['LinkComponent'],
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'secondary'],
    },
  },
  component: BNDrawer,
} satisfies Meta<typeof BNDrawer>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    variant: 'temporary',
    titleProps: {
      title: 'Drawer Title',
      variant: 'primary',
    },
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen)
    return (
      <>
        <Button onClick={toggleDrawer(true)}>Open drawer</Button>
        <BNDrawer
          {...args}
          open={open}
          onClose={toggleDrawer(false)}
          titleProps={{ ...args.titleProps, onClose: toggleDrawer(false) }}
        >
          <Box
            sx={{ p: 3, width: '100%', maxWidth: 500, minWidth: { xs: '100%', md: 500 } }}
          >
            <Typography variant="h5" gutterBottom>
              Drawer Content accepts any children
            </Typography>
            <Accordion variant="outlined">
              <AccordionSummary>
                <Typography variant="body2">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">Accordion 1 content</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <CardActions>
            <Button variant="outlined">Action</Button>
            <Button variant="contained">Action</Button>
          </CardActions>
        </BNDrawer>
      </>
    )
  },
}
