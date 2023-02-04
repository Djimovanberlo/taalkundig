import Block from '@/layout/block'
import Link from 'next/link'

import Card from '@/fragments/card'
import ImageComponent from '@/fragments/image'
import { H1, P } from '@/fragments/typography'
import { LinkButton } from '@/fragments/buttons'
import PostFooter from '@/fragments/post-footer'

const BlogPostSmall = ({ image, title, introduction, slug, publishedAt }) => {
  return (
    <Block className='blogpostSmall'>
      <Link href={slug}>
        <ImageComponent className='blogpostSmall__img' src={image?.url} />
      </Link>
      <Card>
        <H1 className='blogpostSmall__title'>{title}</H1>
        <P className='blogpostSmall__intro'>{introduction}</P>
        <LinkButton href={slug}>
          <P>Verder lezen →</P>
        </LinkButton>
      </Card>
      <PostFooter publishedAt={publishedAt} />
    </Block>
  )
}

export default BlogPostSmall
