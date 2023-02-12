import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import ImageComponent from '@/fragments/image'
import { H1, H2, H3, H4, Li, P } from '@/fragments/typography'
import { LinkButton } from '@/fragments/buttons'

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
      [BLOCKS.PARAGRAPH]: (node, children) => <P className='p--mb'>{children}</P>,
      [BLOCKS.LIST_ITEM]: (node, children) => <Li>{children}</Li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <LinkButton className='richtextLink' href={node.data.uri ?? ''} external='true'>
          {children}
        </LinkButton>
      ),
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = assetBlockMap.get(node.data.target.sys.id)
        return <ImageComponent className='richtextImage' src={asset.url} />
      },
    },
  }
}

export default function RichTextRenderer({ richText, className = '' }) {
  if (!richText || !richText.json) return <></>
  return <div className={className}>{documentToReactComponents(richText.json, getRenderOptions(richText.links))}</div>
}
