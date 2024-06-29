import React from 'react';
import {Container, Results} from './styles';

const Indicators = ({ name, numbers}) => {
  return(
    <>
      <Container>
        <Results>
          <h1>{numbers}</h1>
          <p>{name}</p>
        </Results>
      </Container>
    </>
  )
}

export default Indicators;