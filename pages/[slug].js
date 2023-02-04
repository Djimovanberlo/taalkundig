import Main from '@/layout/main'
import { getBlogPostDetailData, getBlogPostSlugData } from '@/services/contentful/api'

const BlogPostDetail = ({ data }) => {
  return <Main>MAIN</Main>
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
