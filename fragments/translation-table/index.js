import RichTextRenderer from '@/services/richtext'

const TranslationTable = ({ table }) => {
  console.log('T', table)
  return <RichTextRenderer richText={table} className='translationTable' />
}

export default TranslationTable
