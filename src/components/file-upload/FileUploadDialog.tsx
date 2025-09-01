import { useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'

import BNFileUpload from './BNFileUpload.js'
import type { UploadFile } from './types.js'

interface FileUploadDialogProps {
  open: boolean
  onClose: () => void
  onUpload: (files: File[]) => void
  isDragging?: boolean
}

const FileUploadDialog = ({
  open,
  onClose,
  onUpload,
  isDragging,
}: FileUploadDialogProps) => {
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([])

  const handleClose = () => {
    setUploadFiles([])
    onClose()
  }

  const handleFilesSelected = (files: File[]) => {
    // Files are automatically added to the upload component's state
  }

  const handleFileRemove = (fileId: string) => {
    // File removal is handled by the upload component
  }

  const handleUpload = async (files: File[]) => {
    // For demo purposes, we'll just simulate upload
    // In real app, this would make API calls
    return Promise.resolve()
  }

  const handleSubmit = () => {
    const filesToUpload = uploadFiles
      .filter((f) => f.status === 'complete')
      .map((f) => f.file)

    if (filesToUpload.length > 0) {
      onUpload(filesToUpload)
    }
    handleClose()
  }

  // We'll track the file state changes from the upload component
  const handleFileStateChange = (files: UploadFile[]) => {
    setUploadFiles(files)
  }

  const hasFiles = uploadFiles.length > 0
  const hasCompletedFiles = uploadFiles.some((f) => f.status === 'complete')

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ p: 0 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={3}
          py={2}
        >
          Upload Document
          <IconButton
            aria-label="Close dialog"
            onClick={handleClose}
            size="medium"
            sx={{ p: 1 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 0 }}>
        <BNFileUpload
          maxFiles={5}
          acceptedFileTypes={['.doc', '.docx', '.pdf', '.ppt', '.pptx', '.csv']}
          onFilesSelected={handleFilesSelected}
          onFileRemove={handleFileRemove}
          onUpload={handleUpload}
          onFileStateChange={handleFileStateChange}
          multiple={true}
          uploadedFiles={uploadFiles}
        />
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" disabled={!hasCompletedFiles} onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FileUploadDialog
