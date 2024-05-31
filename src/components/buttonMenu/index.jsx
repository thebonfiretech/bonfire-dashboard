import { Container } from './styles'

const ButtonMenu = ({icon: Icon, name, dropdown: Dropdown, justifyContent, onAction}) => {
  return (
    <Container onClick={onAction} justifyContent={justifyContent}><span>{Icon && <Icon size={24} color={"#FFFFFF"}/>}{name}  </span> 
      {Dropdown && <Dropdown style={{transform: "rotate(270deg)"}} size={24} color={"#FFFFFF"}/>}
    </Container>
  )
}

export default ButtonMenu;