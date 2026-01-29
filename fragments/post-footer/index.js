import dateFormat, { i18n } from 'dateformat'

import { P } from '@/fragments/typography'

const PostFooter = ({ publishedAt }) => {
  i18n.monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'july',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
  ]
  const date = dateFormat(publishedAt, 'd mmmm yyyy')

  return <P className='postFooter'>{date}</P>
}

export default PostFooter
