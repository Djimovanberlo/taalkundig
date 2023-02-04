import Container from '../container'

const Main = ({ className = '', children }) => {
  return (
    <div className={`main ${className}`}>
      <Container>{children}</Container>
    </div>
  )
}

export default Main
