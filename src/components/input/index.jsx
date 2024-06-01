import { Container, InputBox, IconBox } from './styles'
import React from 'react';

const Input = ({width, placeholder, type, icon: Icon, onAction}) => {
  
  return <Container width={width}>
    {Icon && <IconBox onClick={onAction}><Icon size={24} color={"#FFFFFF"}/></IconBox>}
    <InputBox type={type} placeholder={placeholder}/>
  </Container>
  
}

export default Input;