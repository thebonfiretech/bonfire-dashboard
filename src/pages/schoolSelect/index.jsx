import React from 'react';

import LogoContainer from "../../components/logoContainer";
import Selector from "../../components/selector";
import Button from "../../components/button";
import Label from "../../components/label";

import {Container, Box, SelectorContainer} from './styles';

const SchoolSelect = () => {
  return(
    <>
    <Container>
      <Box>
        <LogoContainer/>
        <SelectorContainer>
        <Label name='Escolha a escola que você deseja gerenciar:'/>
        <Selector options='re'/>
        </SelectorContainer>
        <Button name='Escolher'/>
        </Box>
    </Container>
    </>
  )
};

export default SchoolSelect