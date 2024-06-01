import React from 'react';
import {ContainerButton} from './styles';

const FilterButtons = ({onAction, name, select}) => {
  return(
    <>
      <ContainerButton  onClick={onAction}>
        {name}
      </ContainerButton>
    </>
  )
}

export default FilterButtons;