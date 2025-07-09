import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import {
  AttachNewIcon,
  AttachedFileIcon,
  BarChartNoStackingIcon,
  BarChartStacked100Icon,
  BarChartStackedIcon,
  CheckmarkIcon,
  ColumnResizeIcon,
  CsvIcon,
  DocIcon,
  ElectronicConsentLeftAligned,
  HtmlIcon,
  IconForFileType,
  NavAccountsIcon,
  NoDataIcon,
  PdfIcon,
  TxtIcon,
  VerticalBarChartIcon,
  XlsIcon,
  XlsxIcon,
} from '../components/icons'

const meta = {
  title: 'Custom Components/Icons',
  component: DocIcon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Custom icon components.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-148609&t=xWHzDIxL8PIrrG5G-11',
    },
  },
} satisfies Meta<typeof DocIcon>

export default meta

type Story = StoryObj<typeof meta>
type IconForFileTypeStory = StoryObj<typeof IconForFileType>

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => (
    <Grid container spacing={3}>
      {[
        { name: 'XlsIcon', component: <XlsIcon sx={{ fontSize: 24 }} /> },
        { name: 'XlsxIcon', component: <XlsxIcon sx={{ fontSize: 24 }} /> },
        { name: 'HtmlIcon', component: <HtmlIcon sx={{ fontSize: 24 }} /> },
        { name: 'PdfIcon', component: <PdfIcon sx={{ fontSize: 24 }} /> },
        { name: 'DocIcon', component: <DocIcon sx={{ fontSize: 24 }} /> },
        { name: 'TxtIcon', component: <TxtIcon sx={{ fontSize: 24 }} /> },
        { name: 'CsvIcon', component: <CsvIcon sx={{ fontSize: 24 }} /> },
        { name: 'AttachNewIcon', component: <AttachNewIcon sx={{ fontSize: 24 }} /> },
        {
          name: 'AttachedFileIcon',
          component: <AttachedFileIcon sx={{ fontSize: 24 }} />,
        },
        { name: 'NavAccountsIcon', component: <NavAccountsIcon sx={{ fontSize: 24 }} /> },
        {
          name: 'ColumnResizeIcon',
          component: <ColumnResizeIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'VerticalBarChartIcon',
          component: <VerticalBarChartIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'BarChartNoStackingIcon',
          component: <BarChartNoStackingIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'BarChartStackedIcon',
          component: <BarChartStackedIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'BarChartStacked100Icon',
          component: <BarChartStacked100Icon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'ElectronicConsentLeftAligned',
          component: <ElectronicConsentLeftAligned sx={{ fontSize: 24 }} />,
        },
        { name: 'NoDataIcon', component: <NoDataIcon sx={{ fontSize: 100 }} /> },
        { name: 'CheckmarkIcon', component: <CheckmarkIcon sx={{ fontSize: 60 }} /> },
      ].map(({ name, component }) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={name}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              p: 2,
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              color: 'action.active',
            }}
          >
            {component}
            <Typography
              variant="caption"
              sx={{ textAlign: 'center', fontSize: '0.75rem' }}
            >
              {name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  ),
}

export const IconForFileTypeDemo: IconForFileTypeStory = {
  name: 'IconForFileType',
  render: (args) => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Selected File Type:
        </Typography>
        <Typography variant="body2" gutterBottom>
          IconForFileType is a wrapper component that displays the appropriate icon for a
          given file type.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            p: 2,
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            color: 'action.active',
          }}
        >
          <IconForFileType fileType={args.fileType} />
          <Typography variant="caption">{args.fileType}</Typography>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom>
        All Supported File Types:
      </Typography>
      <Grid container spacing={2}>
        {['PDF', 'HTML', 'TXT', 'XLS', 'XLSX', 'CSV', 'DOC'].map((fileType) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={fileType}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                p: 2,
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                color: 'action.active',
              }}
            >
              <IconForFileType fileType={fileType as any} />
              <Typography variant="caption">{fileType}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
  args: {
    fileType: 'PDF',
  },
  argTypes: {
    fileType: {
      control: 'select',
      options: ['PDF', 'HTML', 'TXT', 'XLS', 'XLSX', 'CSV', 'DOC'],
      description: 'File type to display the appropriate icon',
    },
  },
}
