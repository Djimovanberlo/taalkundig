import Block from '@/layout/block'
import ImageComponent from '@/fragments/image'
import Link from 'next/link'

const BlogPostSmall = ({ image, slug }) => {
  return (
    <Block className='blogpostSmall'>
      <Link href={slug}>
        <ImageComponent className='blogpostSmall__img' src={image?.url} />
      </Link>
    </Block>
  )
}

export default BlogPostSmall
