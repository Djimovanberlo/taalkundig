import BlogPostSmall from '@/blocks/blogpost-small'
import { B, H1, H2, H3, H4, I, P } from '@/fragments/typography'
import Main from '@/layout/main'
import { getHomePageData } from '@/services/contentful/api'

const Home = ({ data }) => {
  console.log('DATA', data)

  return (
    <Main>
      {data.map(({ image, slug }, index) => (
        <BlogPostSmall key={index} image={image} slug={slug} />
      ))}
      <B>
        <H1>H1</H1>
      </B>
      <I>
        <H2>H2</H2>
      </I>
      <H3>H3</H3>
      <H4>H4</H4>
      <P>P</P>
    </Main>
  )
}

export async function getStaticProps() {
  const { data, error } = await getHomePageData()
  return {
    props: {
      data: data.items,
      error,
    },
    revalidate: 60,
  }
}

export default Home
