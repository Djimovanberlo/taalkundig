import Card from '@/fragments/card'
import Main from '@/layout/main'
import { getBlogPostDetailData, getBlogPostSlugData } from '@/services/contentful/api'
import RichTextRenderer from '@/services/richtext'

const BlogPostDetail = ({ data }) => {
  const { content } = data

  return (
    <Main>
      <Card className='card--overOns'>
        <RichTextRenderer richText={content} />
      </Card>
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  const { data, error } = await getBlogPostDetailData(params?.slug)
  return {
    props: {
      data,
      error,
    },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const { data } = await getBlogPostSlugData()
  const paths = data?.items.map(({ slug }) => slug).map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: true,
  }
}

export default BlogPostDetail
