import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import ImageComponent from '@/fragments/image'
import { H1, H2, H3, H4, Li, P } from '@/fragments/typography'
import { LinkButton } from '@/fragments/buttons'
import { EMBEDDED_ENTRIES } from './constants'
import ComparativeTable from '@/fragments/comparative-table'
import TranslationTable from '@/fragments/translation-table'
import ExampleTable from '@/fragments/example-table'

export function getRenderOptions(links) {
  const assetBlockMap = new Map()
  const entryBlockMap = new Map()

  if (links) {
    for (const asset of links.assets.block) {
      assetBlockMap.set(asset.sys.id, asset)
    }
    for (const entry of links.entries.block) {
      entryBlockMap.set(entry.sys.id, entry)
    }
  }

  return {
    renderText: text => text.replace('!', '?'),
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.PARAGRAPH]: (node, children) => <P>{children}</P>,
      [BLOCKS.LIST_ITEM]: (node, children) => <Li>{children}</Li>,
      [BLOCKS.TABLE]: (node, children) => (
        <table>
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,
      [INLINES.HYPERLINK]: (node, children) => (
        <LinkButton className='richtextLink' href={node.data.uri ?? ''} external='true'>
          {children}
        </LinkButton>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = assetBlockMap.get(node.data.target.sys.id)
        return <ImageComponent className='richtextImage' src={asset.url} />
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const entry = entryBlockMap.get(node.data.target.sys.id)
        console.log("E", entry)

        if (entry.__typename === EMBEDDED_ENTRIES.COMPARATIVE_TABLE) {
          console.log("T", entry)
          return <ComparativeTable table={entry.table} />
        }

        if (entry.__typename === EMBEDDED_ENTRIES.TRANSLATION_TABLE) {
          return <TranslationTable table={entry.table} />
        }

        if (entry.__typename === EMBEDDED_ENTRIES.EXAMPLE_TABLE) {
          return <ExampleTable table={entry.table} />
        }

        return <></>
      },
    },
  }
}

export default function RichTextRenderer({ richText, className = '' }) {
  if (!richText || !richText.json) return <></>
  return <div className={className}>{documentToReactComponents(richText.json, getRenderOptions(richText.links))}</div>
}
