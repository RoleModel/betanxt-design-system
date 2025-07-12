import { CsvIcon } from './CsvIcon'
import { DocIcon } from './DocIcon'
import { HtmlIcon } from './HtmlIcon'
import { PdfIcon } from './PdfIcon'
import { TxtIcon } from './TxtIcon'
import { XlsIcon } from './XlsIcon'
import { XlsxIcon } from './XlsxIcon'

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
