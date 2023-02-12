import { LinkButton } from '@/fragments/buttons'
import ImageComponent from '@/fragments/image'
import { P } from '@/fragments/typography'
import Block from '@/layout/block'
import Container from '@/layout/container'

export default function Header() {
  return (
    <Block className='header'>
      <Container>
        <ImageComponent src='/images/taalkundig-logo.png' alt='taalkundig logo' />
        <LinkButton href='over-ons'>
          <P>Over ons</P>
        </LinkButton>
      </Container>
    </Block>
  )
}
