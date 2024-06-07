import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { Container} from "./styles";

const Loader = () => {
  return (
    <Container>
      <div><BiLoaderAlt color={'#024FF0'} size={50} /></div>
    </Container>
  )
}

export default Loader;