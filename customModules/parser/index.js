import XLSX from 'xlsx'

export const excelParser = (path) => {
  const workbook = XLSX.readFile(path)

  return workbook
}