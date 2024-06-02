import React, { useState } from "react";
import { AiOutlineUser, AiOutlineUnlock } from "react-icons/ai";


import LogoContainer from "../../components/logoContainer";
import Button from "../../components/button";
import Input from "../../components/input";

import {Container, Box, InputContainer, Message} from './styles';

const Login = () => {
  const [typePass, setTypePass] = useState("password");

  return (
    <>
      <Container>
        <Box>
          <LogoContainer/>
          <InputContainer>
          <Input
            
            icon={AiOutlineUser}
            placeholder='Digíte o seu email:'
            type={"text"}
            width="50"
          />
          <Input
            onAction={() =>
              setTypePass((prev) => (prev == "password" ? "text" : "password"))
            }
            icon={AiOutlineUnlock}
            placeholder="Digíte a sua senha:"
            type={typePass}
            width="50"
          />
          <Message>
            <span>senha incorreta.</span>
            <a>esqueceu a senha?</a>
          </Message>
          </InputContainer>
            <Button name='Entrar'/>
        </Box>
      </Container>
    </>
  );
};

export default Login;
