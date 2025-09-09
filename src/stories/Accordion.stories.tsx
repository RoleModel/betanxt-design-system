import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Accordion as MuiAccordion,
  Typography,
} from '@mui/material'

import { BNTypographyPair } from '../components/BNTypographyPair'
import { BNDataList } from '../components/data-list/BNDataList'
import { BNDataListItem } from '../components/data-list/BNDataListItem'
import '../themes/mui-type-customizations'

const meta = {
  title: 'Components/Accordion',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'The variant to use for the accordion',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'If true, the accordion is expanded by default',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the accordion is disabled',
    },
    disableGutters: {
      control: 'boolean',
      description: 'If true, removes the margin between the accordion and its children',
    },
    square: {
      control: 'boolean',
      description: 'If true, rounded corners are disabled',
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
      description: 'Shadow depth for elevation variant',
      if: { arg: 'variant', eq: 'elevation' },
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

export const WithList: Story = {
  args: {
    variant: 'outlined',
    defaultExpanded: false,
    disabled: false,
    disableGutters: false,
    square: false,
    elevation: 5,
    children: <div />,
  },
  render: (args) => {
    const { children, ...accordionProps } = args
    const accountDetails = [
      { label: 'Rep', value: 'AD02' },
      { label: 'Institution', value: 'Individual' },
      { label: 'Equity Discount', value: 'Sched 01' },
      { label: 'Funds Available', value: '10,181,653.30' },
      { label: 'Total Acct Value', value: '11,020,192.83' },
      { label: 'Margin BP', value: '5,109,774' },
      { label: 'Fiduciary', value: 'S' },
      { label: 'Exemption', value: 'BIC Grandfathered Exemption' },
    ]
    const quickStats = [
      { label: 'Active Accounts', value: '24' },
      { label: 'Pending Trades', value: '3' },
      { label: 'Market Value', value: '$2.4M' },
      { label: 'Cash Available', value: '$125K' },
    ]
    return (
      <Box sx={{ minWidth: 500 }}>
        <Accordion {...accordionProps}>
          <AccordionSummary
            variant="column"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="withlist-panel1-content"
            id="withlist-panel1-header"
          >
            <BNTypographyPair
              primary={{
                text: 'Primary',
                variant: 'body3',
                fontWeight: 600,
              }}
              secondary={{ text: 'Secondary', variant: 'body3' }}
            />
          </AccordionSummary>
          <AccordionDetails aria-label="Account details">
            <BNDataList>
              {accountDetails.map((detail, index) => (
                <BNDataListItem
                  key={detail.label}
                  dense
                  disableGutters
                  divider={index < accountDetails.length - 1}
                  primary={{ text: detail.label, variant: 'body3' }}
                  secondary={{ text: detail.value, variant: 'body3', fontWeight: 500 }}
                />
              ))}
            </BNDataList>
          </AccordionDetails>
        </Accordion>
        <Accordion {...accordionProps}>
          <AccordionSummary
            variant="column"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="withlist-panel2-content"
            id="withlist-panel2-header"
          >
            <BNTypographyPair
              primary={{
                text: 'Primary',
                variant: 'body3',
                fontWeight: 600,
              }}
              secondary={{ text: 'Secondary', variant: 'body3' }}
            />
          </AccordionSummary>
          <AccordionDetails aria-label="Quick statistics">
            <BNDataList>
              {quickStats.map((stat, index) => (
                <BNDataListItem
                  key={stat.label}
                  dense
                  disableGutters
                  divider={index < quickStats.length - 1}
                  primary={{ text: stat.label, variant: 'body3' }}
                  secondary={{ text: stat.value, variant: 'body3', fontWeight: 500 }}
                />
              ))}
            </BNDataList>
          </AccordionDetails>
        </Accordion>
        <Accordion {...accordionProps}>
          <AccordionSummary
            variant="column"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="elevation-panel1-content"
            id="elevation-panel1-header"
          >
            <BNTypographyPair
              primary={{
                text: 'Primary',
                variant: 'body3',
                fontWeight: 600,
              }}
              secondary={{ text: 'Secondary', variant: 'body3' }}
            />
          </AccordionSummary>
          <AccordionDetails aria-label="Additional statistics">
            <BNDataList>
              {quickStats.map((stat, index) => (
                <BNDataListItem
                  key={stat.label}
                  dense
                  disableGutters
                  divider={index < quickStats.length - 1}
                  primary={{ text: stat.label, variant: 'body3' }}
                  secondary={{ text: stat.value, variant: 'body3', fontWeight: 500 }}
                />
              ))}
            </BNDataList>
          </AccordionDetails>
        </Accordion>
      </Box>
    )
  },
}
export const Elevation: Story = {
  args: {
    variant: 'elevation',
    defaultExpanded: false,
    disabled: false,
    disableGutters: false,
    square: false,
    elevation: 5,
    children: 'Accordion Content',
  },
  render: (args) => {
    const { children, ...accordionProps } = args
    return (
      <Box>
        <Accordion {...accordionProps}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="elevation-panel1-content"
            id="elevation-panel2-header"
          >
            <Typography variant="body2" fontWeight={600} component="span">
              Accordion 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails aria-label="Accordion content">
            <Typography variant="body2" component="span">
              Lorrem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion {...accordionProps}>
          <AccordionSummary
            variant="column"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="elevation-panel3-content"
            id="elevation-panel3-header"
          >
            <Typography component="span" variant="body2" fontWeight={600}>
              Accordion 2
            </Typography>
            <Typography component="span" variant="body2">
              Secondary Text
            </Typography>
          </AccordionSummary>
          <AccordionDetails aria-label="Accordion content">
            <Typography variant="body2" component="span">
              Lorrem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion {...accordionProps} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="elevation-panel4-content"
            id="elevation-panel4-header"
          >
            <Typography component="span" variant="body2" fontWeight={600}>
              Accordion 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails aria-label="Accordion content">
            <Typography variant="body2" component="span">
              Lorrem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    )
  },
}

export const AccordionSummaryColumn: Story = {
  args: {
    variant: 'elevation',
    defaultExpanded: false,
    disabled: false,
    disableGutters: false,
    square: false,
    elevation: 5,
    children: <div />,
  },
  render: (args) => {
    const { children, ...accordionProps } = args
    return (
      <div>
        <Accordion {...accordionProps}>
          <AccordionSummary variant="column" expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Main Header</Typography>
            <Typography component="span" variant="body2">
              Secondary text
            </Typography>
          </AccordionSummary>
          <AccordionDetails aria-label="Accordion content">
            <Typography variant="body2" component="span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  },
}
