import React, {useEffect, useState} from 'react';

import LogoContainer from "../../components/logoContainer";
import Selector from "./components/selector";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Label from "../../components/label";
import Actions from '../../actions/admin/schools'
import {Container, Box, SelectorContainer} from './styles';

const SchoolSelect = ({}) => {
   
  const [schoolName, setSchoolName] = useState(undefined);
  const [schoolAll, setSchoolAll] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  const get = async () => {
    try {
      const response = await Actions.get()
      setSchoolName(response)
    }
    catch(error) {r
      console.error(error);
    }
  }
  
}, [])

  
  return(
    <Layout>
    <Container>
      <Box>
        <LogoContainer/>
        <SelectorContainer>
        <Label name='Escolha a escola que você deseja gerenciar:'/>

        <Selector/>
        </SelectorContainer>
        <Button name='Escolher' onAction={() => navigate(`/dashboard/${schoolId}`)} />
        </Box>
    </Container>
    </Layout>
  )
};

export default SchoolSelect;