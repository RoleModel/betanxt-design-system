import { CsvIcon } from './CsvIcon.js'
import { DocIcon } from './DocIcon.js'
import { HtmlIcon } from './HtmlIcon.js'
import { PdfIcon } from './PdfIcon.js'
import { TxtIcon } from './TxtIcon.js'
import { XlsIcon } from './XlsIcon.js'
import { XlsxIcon } from './XlsxIcon.js'

type FileType = 'PDF' | 'HTML' | 'TXT' | 'XLS' | 'XLSX' | 'CSV'

export function IconForFileType({ fileType }: { fileType: FileType }) {
  switch (fileType.toUpperCase()) {
    case 'CSV':
      return <CsvIcon />
    case 'PDF':
      return <PdfIcon />
    case 'HTML':
      return <HtmlIcon />
    case 'TXT':
      return <TxtIcon />
    case 'XLS':
      return <XlsIcon />
    case 'XLSX':
      return <XlsxIcon />
    default:
      return <DocIcon />
  }
}
