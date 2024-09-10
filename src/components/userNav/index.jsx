import React from 'react';

import {AiOutlineCaretLeft} from 'react-icons/ai';
import {Container, Button} from './styles';

const UserNav = ({name, onAction}) => {
  return (
      <Container>
            <Button onClick={() => onAction()}><AiOutlineCaretLeft color='#fff' size={24}/></Button>
           <h1>{name}</h1>
      </Container>
  )
}

export default UserNav;
