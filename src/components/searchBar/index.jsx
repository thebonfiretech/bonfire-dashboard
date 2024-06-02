import React from 'react';
import {Container} from './styles';

const SearchBar = ({onAction}) => {
  return(
    <>
      <Container type ='search' placeholder='Pesquisar' onChange={(e) => onAction(e.target.value)}/>
    </>
  )
}

export default SearchBar

