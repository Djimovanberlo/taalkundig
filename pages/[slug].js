import BlogPostLarge from '@/blocks/blogpost-large'
import Main from '@/layout/main'
import { getBlogPostDetailData, getBlogPostSlugData } from '@/services/contentful/api'

const BlogPostDetail = ({ data }) => {
  if (!data) return <></>

  const { image, title, introduction, content, sys } = data

  return (
    <Main>
      <BlogPostLarge image={image} title={title} introduction={introduction} content={content} publishedAt={sys.publishedAt} />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  const { data, error } = await getBlogPostDetailData(params?.slug)

  return {
    props: {
      data: data?.items[0],
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
