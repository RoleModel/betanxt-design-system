import React, { useCallback, useEffect, useState } from 'react'
import type { FileRejection } from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid'

import { Stack } from '@mui/material'

import BNFileDropzone from './BNFileDropzone.js'
import BNFilePreview from './BNFilePreview.js'
import type { FileUploadProps, UploadFile } from './types.js'
import { DEFAULT_ACCEPTED_TYPES, DEFAULT_MAX_SIZE } from './types.js'

const BNFileUpload: React.FC<FileUploadProps> = ({
  maxFiles = 5,
  maxSize = DEFAULT_MAX_SIZE,
  acceptedFileTypes = DEFAULT_ACCEPTED_TYPES,
  onFilesSelected,
  onFileRemove,
  onUpload,
  onFileStateChange,
  disabled = false,
  multiple = true,
  uploadedFiles = [],
}) => {
  const [files, setFiles] = useState<UploadFile[]>(uploadedFiles)
  const [hasUnsupportedFiles, setHasUnsupportedFiles] = useState(false)

  // Notify parent when files state changes
  useEffect(() => {
    if (onFileStateChange) {
      onFileStateChange(files)
    }
  }, [files, onFileStateChange])

  const handleFilesSelected = useCallback(
    (newFiles: File[]) => {
      // Clear unsupported files state when new files are successfully selected
      setHasUnsupportedFiles(false)

      const uploadFiles: UploadFile[] = newFiles.map((file) => ({
        id: uuidv4(),
        file,
        status: 'uploading' as const,
        progress: 0,
      }))

      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles, ...uploadFiles]
        // Limit to maxFiles if specified
        return maxFiles ? updatedFiles.slice(0, maxFiles) : updatedFiles
      })

      // Notify parent component
      if (onFilesSelected) {
        onFilesSelected(newFiles)
      }

      // Auto-upload if onUpload function is provided
      if (onUpload) {
        uploadFiles.forEach((uploadFile) => {
          simulateUpload(uploadFile.id, uploadFile.file)
        })
      }
    },
    [maxFiles, onFilesSelected, onUpload]
  )

  const handleFileRejections = useCallback((fileRejections: FileRejection[]) => {
    // Check if any rejections are due to unsupported file types
    const hasUnsupportedType = fileRejections.some((rejection) =>
      rejection.errors.some((error) => error.code === 'file-invalid-type')
    )

    if (hasUnsupportedType) {
      setHasUnsupportedFiles(true)
    }
  }, [])

  const handleFileRemove = useCallback(
    (fileId: string) => {
      setFiles((prevFiles) => {
        const updatedFiles = prevFiles.filter((f) => f.id !== fileId)
        return updatedFiles
      })

      if (onFileRemove) {
        onFileRemove(fileId)
      }
    },
    [onFileRemove]
  )

  /**
   * Handles file upload with progress tracking
   *
   * This is a demo implementation that simulates upload progress.
   * In production, replace this with your actual upload logic:
   *
   * @example
   * ```typescript
   * const handleUpload = async (fileId: string, file: File) => {
   *   const formData = new FormData()
   *   formData.append('file', file)
   *
   *   // Use XMLHttpRequest or fetch with progress tracking
   *   const response = await uploadWithProgress(formData, (progress) => {
   *     setFiles(prev => prev.map(f =>
   *       f.id === fileId ? { ...f, progress } : f
   *     ))
   *   })
   *
   *   if (!response.ok) throw new Error('Upload failed')
   *   return response.json()
   * }
   * ```
   */
  const simulateUpload = useCallback(
    async (fileId: string, file: File) => {
      try {
        // DEMO: Simulated upload progress - replace with actual upload
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise((resolve) => setTimeout(resolve, 100))

          setFiles((prevFiles) =>
            prevFiles.map((f) => (f.id === fileId ? { ...f, progress } : f))
          )
        }

        // Mark as complete
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.id === fileId ? { ...f, status: 'complete' as const, progress: 100 } : f
          )
        )

        // Call custom upload function if provided
        if (onUpload) {
          await onUpload([file])
        }
      } catch (error) {
        // Mark as error
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.id === fileId
              ? {
                  ...f,
                  status: 'error' as const,
                  error: error instanceof Error ? error.message : 'Upload failed',
                }
              : f
          )
        )
      }
    },
    [onUpload]
  )

  const hasFiles = files.length > 0
  const canAddMore = !maxFiles || files.length < maxFiles

  return (
    <Stack spacing={2}>
      {/* Dropzone - only show if we can add more files */}
      {canAddMore && (
        <BNFileDropzone
          onFilesSelected={handleFilesSelected}
          onFileRejections={handleFileRejections}
          maxFiles={maxFiles ? maxFiles - files.length : undefined}
          maxSize={maxSize}
          acceptedFileTypes={acceptedFileTypes}
          disabled={disabled}
          multiple={multiple}
          hasUnsupportedFiles={hasUnsupportedFiles}
        />
      )}

      {/* File Previews */}
      {hasFiles && (
        <Stack spacing={2}>
          {files.map((file) => (
            <BNFilePreview
              key={file.id}
              file={file}
              onRemove={handleFileRemove}
              disabled={disabled}
            />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default BNFileUpload
