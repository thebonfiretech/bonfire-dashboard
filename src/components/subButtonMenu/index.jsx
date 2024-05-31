import { Container } from './styles'

const SubButtonMenu = ({icon: Icon, name, justifyContent, onAction}) => {
  return (
    <Container onClick={onAction} justifyContent={justifyContent}><span>{Icon && <Icon size={24} color={"#FFFFFF"}/>}{name}  </span> 
    </Container>
  )
}

export default SubButtonMenu;