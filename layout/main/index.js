import Container from '../container'
import Footer from '../footer'

const Main = ({ className = '', children }) => {
  return (
    <div className={`main ${className}`}>
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default Main
