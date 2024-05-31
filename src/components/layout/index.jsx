import React, { useState, useEffect } from 'react'
import Background from "../background"
import { Container } from './styles'
import Menu from '../menu'
const Layout = ({children}) => {
  return (
    <Container>
      <Menu/>
    <Background>
      {children}
    </Background>
    </Container>
  )
}

export default Layout;