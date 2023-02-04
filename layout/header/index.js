import { LinkButton } from '@/fragments/buttons'
import { P } from '@/fragments/typography'
import Block from '@/layout/block'
import Container from '@/layout/container'

export default function Header() {
  return (
    <Block className='header'>
      <Container>
        <LinkButton href='/'>
          <P>Home</P>
        </LinkButton>
        <LinkButton href='over-one'>
          <P>Over ons</P>
        </LinkButton>
      </Container>
    </Block>
  )
}
