import Block from '@/layout/block'
import Link from 'next/link'

import Card from '@/fragments/card'
import ImageComponent from '@/fragments/image'
import { H1, P } from '@/fragments/typography'
import PostFooter from '@/fragments/post-footer'
import RichTextRenderer from '@/services/richtext'

const BlogPostLarge = ({ image, title, introduction, content, publishedAt }) => {
  return (
    <Block className='blogpostLarge'>
      <ImageComponent className='blogpostLarge__img' src={image?.url} />
      <Card>
        <H1 className='blogpostLarge__title'>{title}</H1>
        <P className='blogpostLarge__intro'>{introduction}</P>
        <RichTextRenderer richText={content} />
      </Card>
      <PostFooter publishedAt={publishedAt} />
    </Block>
  )
}

export default BlogPostLarge
