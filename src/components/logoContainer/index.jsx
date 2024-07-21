import React from 'react';

import {Container} from './styles';

import Logo from '../../../public/images/logo.svg'

const LogoContainer = ({height, width}) => {
  return (
    <Container height={height} width={width}>
      <img src={Logo}/>
    </Container>
  )
}

export default LogoContainer;