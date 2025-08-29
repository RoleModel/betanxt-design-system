import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Accordion as MuiAccordion,
  Typography,
} from '@mui/material'

import '../themes/mui-type-customizations'

const meta = {
  title: 'Components/Accordion',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'elevation', 'outlined'],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  component: MuiAccordion,
} satisfies Meta<typeof MuiAccordion>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    variant: 'simple',
    children: 'Accordion Content',
  },
  render: () => {
    return (
      <div>
        <Accordion variant="simple">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion variant="simple">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    )
  },
}
export const Elevation: Story = {
  args: {
    variant: 'elevation',
    children: 'Accordion Content',
  },
  render: () => {
    return (
      <div>
        <Accordion variant="elevation">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion variant="elevation">
          <AccordionSummary
            variant="column"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 1</Typography>
            <Typography component="span">Secondary Text</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded variant="elevation">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Accordion Actions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    )
  },
}

export const AccordionSummaryColumn: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    return (
      <div>
        <Accordion variant="simple" disableGutters={true}>
          <AccordionSummary variant="column" expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Main Header</Typography>
            <Typography component="span" variant="body2">Secondary text</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    )
  },
}

export const DisablePadding: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    return (
      <div>
        <Accordion variant="simple" disablePadding>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion variant="simple" disablePadding>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    )
  },
}
