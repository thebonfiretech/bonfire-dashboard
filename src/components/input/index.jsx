import { Container, InputBox, IconBox } from './styles'
import React from 'react';

const Input = ({width, placeholder, type, icon: Icon, onAction, onChange, value}) => {
  
  return <Container width={width}>
    {Icon && <IconBox onClick={onAction}><Icon size={24} color={"#FFFFFF"}/></IconBox>}
    <InputBox onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} value={value}/>
  </Container>
  
}

export default Input;