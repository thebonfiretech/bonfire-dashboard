import { Container, DropdownBox } from './styles'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
const ButtonMenu = ({ icon: Icon, name, dropdown, onAction, active, open }) => {

  return (
    <Container active={active} onClick={onAction}>
      <span><Icon size={24} color={"#FFFFFF"} />

        {active == true ? name : ""}</span>
      {
        active && dropdown &&
        <DropdownBox>
          {
            open ?
              <AiOutlineCaretDown size={20} color={"#FFFFFF"} />
              :
              <AiOutlineCaretUp size={20} color={"#FFFFFF"} />
          }
        </DropdownBox>
      }
    </Container>
  )
}

export default ButtonMenu;