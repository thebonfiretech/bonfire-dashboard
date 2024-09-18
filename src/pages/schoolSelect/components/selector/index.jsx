import React, {useEffect, useState} from 'react';
import {Container} from './styles';

import Actions from "../../../../actions/admin/schools";

const Selector = ({}) => {

  const [schoolName, setSchoolName] = useState('');
  const [schoolAll, setSchoolAll] = useState([]);
  
  useEffect(() => {
    
    const get = async () => {
      
      try {
        const response = await Actions.getAll();
        setSchoolAll(response);
        console.log(schoolAll)
      } catch (error) {
        console.error(error);
      }
    };

    get();
  }, []);


  return(
    
      <Container>
        
        {schoolAll.map((item, index) => {
         return (
           <option key={index} value={item?.id}>
            {item?.name}
          </option>
           )
                      })}
      
      </Container>
    
  )
}

export default Selector;

/* 
seleciona escola => manda valor para o select => clicar no botão manda para a url

*/