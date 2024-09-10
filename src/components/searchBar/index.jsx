import React from 'react';
import {Container} from './styles';

const SearchBar = ({onChange}) => {
  return (
      <Container type ='search' placeholder='Pesquisar' onChange={(e) => onChange(e.target.value)}/>
  )
}

export default SearchBar

