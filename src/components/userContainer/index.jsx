import React from 'react';

import {MdDriveFileRenameOutline, MdDeleteOutline} from 'react-icons/md';

import {Container, UserInformation, ButtonIcon, ControlPanel, Button} from './styles';

const UserContainer = ({name, onUpdate, onDelete, iconType: IconType}) => {
  const iconSize = window.innerWidth <= 678 ? 21 : 24;
  return(
      <Container>
        <UserInformation>
            <ButtonIcon> {IconType && <IconType size={iconSize} color={"#FFFFFF"}/>}</ButtonIcon>
            <h1>{name}</h1>
        </UserInformation>
       <ControlPanel>
           <Button onClick={onUpdate}><MdDriveFileRenameOutline color='#fff' size={iconSize}/></Button>
         <Button onClick={onDelete}><MdDeleteOutline color='#fff' size={iconSize}/></Button>
       </ControlPanel>
      </Container>
  )
}

export default UserContainer;
