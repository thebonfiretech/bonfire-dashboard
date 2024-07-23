import { Container } from './styles'

const Background = ({open, children}) => {
  return <Container open={open}>{children}</Container>
}

export default Background;