import Card from '@/fragments/card'
import Main from '@/layout/main'
import { getAbousUsPageData } from '@/services/contentful/api'
import RichTextRenderer from '@/services/richtext'

const OverOns = ({ data }) => {
  return (
    <Main>
      <Card className='card--overOns'>
        <RichTextRenderer richText={data.aboutUs} />
      </Card>
    </Main>
  )
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
