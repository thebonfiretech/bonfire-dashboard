import React from 'react';
import {Container} from './styles';

const Selector = ({options}) => {
  return(
    <>
      <Container>
        <option>{options}</option>
      </Container>
    </>
  )
}

export default Selector;

