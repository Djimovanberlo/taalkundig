import Main from '@/layout/main'
import { getAbousUsPageData } from '@/services/contentful/api'

const OverOns = ({ data }) => {
  return <Main></Main>
}

export async function getStaticProps() {
  const { data, error } = await getAbousUsPageData()
  return {
    props: {
      data,
      error,
    },
    revalidate: 60,
  }
}

export default OverOns
