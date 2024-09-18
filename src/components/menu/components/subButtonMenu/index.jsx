import { Container } from './styles'

const SubButtonMenu = ({icon: Icon, name, active, onAction}) => {
  return (
    <Container onClick={onAction} active={active}><span><Icon size={24} color={"#A7A6A6"} />
      
    {active == true ? name : ""}</span>
    </Container>
  )
}

export default SubButtonMenu;