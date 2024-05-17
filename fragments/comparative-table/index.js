import RichTextRenderer from '@/services/richtext'
import { NODE_TYPES } from '@/services/richtext/constants'

const getTableData = table => table.content.find(({ nodeType }) => nodeType === NODE_TYPES.TABLE)

const getCellData = cell => cell.content[0].content[0].value

const ComparativeTable = ({ table }) => {
  const tableData = getTableData(table)

  return (
    <tbody className='comparativeTable'>
      {/* {tableData.content.map((row, index) => (
        <tr key={index}>
          {row.content.map((cell, index) => {
            const cellData = getCellData(cell)
            return <td key={index}>{cellData}</td>
          })}
        </tr>
      ))} */}
    </tbody>
  )
}

export default ComparativeTable
