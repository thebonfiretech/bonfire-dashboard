import { Container, DropdownBox } from './styles'

const ButtonMenu = ({icon: Icon, name, dropdown: Dropdown, justifyContent, onAction, ActionDropdown}) => {
  return (
    <Container justifyContent={justifyContent}><span onClick={onAction}>{Icon && <Icon size={24} color={"#FFFFFF"}/>}{name}</span> 
      {Dropdown && <DropdownBox onClick={ActionDropdown}><Dropdown style={{transform: "rotate(270deg)"}} size={24} color={"#FFFFFF"}/></DropdownBox>}
    </Container>
  )
}

export default ButtonMenu;