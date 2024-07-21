import React, { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineUnlock } from "react-icons/ai";
import ActionsBase from "../../actions/base";
import ActionsAdmin from "../../actions/admin/user";
import LogoContainer from "../../components/logoContainer";
import Button from "../../components/button";
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";
import Alert from '../../components/alert';


import { Container, Box, InputContainer, Message } from "./styles";

const Login = () => {
  const [typePass, setTypePass] = useState("password");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(undefined);
  const navigate = useNavigate();
  const isOpen = false;

  class User {
    constructor(id, password) {
      this.id = id;
      this.password = password;
    }
  }

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.setItem("isOpen", isOpen)
  }, []);

  const LoginUser = async (user) => {
    if (!id || !password) {
      setAlert({
        icon: "info",
        title: "Preencha todos os campos",
        confirm: false,
        timer: 1500,
      });
      return;
    }

    try {
      await ActionsBase.login(user)
      navigate("/dashboard")
    } catch (error) {
      console.error(error);
    }
  };


  const clearAlert = () => {
    if (alert) {
      setAlert(undefined);
    }
  };

  return (
    <>
      <Container>
        <Box>
          <LogoContainer />
          <InputContainer>
            <Input
              icon={AiOutlineUser}
              onChange={(value) => {
                setId(value);
                clearAlert();
              }}
              placeholder="Digite o seu usuário:"
              type={"text"}
              value={id}
              width="50"
            />
            <Input
              onAction={() =>
                setTypePass((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
              icon={AiOutlineUnlock}
              onChange={(value) => {
                setPassword(value);
                clearAlert();
              }}
              placeholder="Digite a sua senha:"
              type={typePass}
              value={password}
              width="50"
            />
            <Message>
              <span>{message}</span>
            </Message>
          </InputContainer>
          <Button
            name="Entrar"
            onAction={() => {
              const user = new User(id, password);
              LoginUser(user);
            }}
          />
        </Box>
        {alert && (
          <Alert
            icon={alert.icon}
            title={alert.title}
            timer={alert.timer}
            confirm={alert.confirm}
          />
        )}
      </Container>
    </>
  );
};

export default Login;
