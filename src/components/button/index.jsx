import React from 'react';
import {ContainerButton} from './styles';

const Button = ({onAction, name}) => {
  return(
    
      <ContainerButton  onClick={onAction}>
        {name}
      </ContainerButton>
    
  )
}

export default Button;