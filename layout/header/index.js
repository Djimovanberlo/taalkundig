import { LinkButton } from '@/fragments/buttons'
import ImageComponent from '@/fragments/image'
import { P } from '@/fragments/typography'
import Block from '@/layout/block'
import Container from '@/layout/container'
import Link from 'next/link'

export default function Header() {
  return (
    <Block className='header'>
      <Container>
        <Link href='/'>
          <ImageComponent src='/images/taalkundig-logo.png' alt='taalkundig logo' />
        </Link>
        <LinkButton href='over-ons'>
          <P>Over ons</P>
        </LinkButton>
      </Container>
    </Block>
  )
}
