import React from 'react';
import {Container, Results} from './styles';

const Indicators = ({onAction, name, numbers}) => {
  return(
    <>
      <Container onClick={() => onAction()}>
        <Results>
          <h1>{numbers}</h1>
          <p>{name}</p>
        </Results>
      </Container>
    </>
  )
}

export default Indicators;