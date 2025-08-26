import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import { BNFileDropzone, BNFileUpload, FileUploadDialog } from '../components'
import type { UploadFile } from '../components'

const meta: Meta<typeof BNFileUpload> = {
  title: 'Custom Components/File Upload/BNFileUpload',
  component: BNFileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive file upload component with drag and drop functionality, file previews, and upload progress tracking.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxFiles: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of files allowed',
      defaultValue: 5,
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Maximum file size in bytes',
      defaultValue: 5242880, // 5MB
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof BNFileUpload>

export const Default: Story = {
  args: {
    maxFiles: 5,
    multiple: true,
    onFilesSelected: () => {},
    onFileRemove: () => {},
    onUpload: async () => Promise.resolve(),
    onFileStateChange: () => {},
  },
  render: (args) => (
    <Box sx={{ width: 600, p: 2 }}>
      <BNFileUpload {...args} />
    </Box>
  ),
}

export const SingleFile: Story = {
  args: {
    maxFiles: 1,
    multiple: false,
    onFilesSelected: () => {},
    onFileRemove: () => {},
    onUpload: async () => Promise.resolve(),
    onFileStateChange: () => {},
  },
  render: (args) => (
    <Box sx={{ width: 600, p: 2 }}>
      <BNFileUpload {...args} />
    </Box>
  ),
}

export const WithPreUploadedFiles: Story = {
  args: {
    maxFiles: 5,
    multiple: true,
    onFilesSelected: () => {},
    onFileRemove: () => {},
    onUpload: async () => Promise.resolve(),
    onFileStateChange: () => {},
  },
  render: (args) => {
    // Create mock files for demonstration
    const mockFiles: UploadFile[] = [
      {
        id: '1',
        file: new File([''], 'document1.pdf', { type: 'application/pdf' }),
        status: 'complete',
        progress: 100,
      },
      {
        id: '2',
        file: new File([''], 'presentation.pptx', {
          type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        }),
        status: 'uploading',
        progress: 60,
      },
      {
        id: '3',
        file: new File([''], 'report.docx', {
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        }),
        status: 'error',
        error: 'Upload failed',
      },
    ]

    return (
      <Box sx={{ width: 600, p: 2 }}>
        <BNFileUpload {...args} uploadedFiles={mockFiles} />
      </Box>
    )
  },
}

export const InDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const handleUpload = (files: File[]) => {
      // Handle upload
    }

    return (
      <Box sx={{ p: 2 }}>
        <Button onClick={() => setOpen(true)}>Open File Upload Dialog</Button>
        <FileUploadDialog
          open={open}
          onClose={() => setOpen(false)}
          onUpload={handleUpload}
        />
      </Box>
    )
  },
}
