import React from "react";

import Indicators from "../../components/indicators";
import { useNavigate } from "react-router-dom";
import UserNav from "../../components/userNav";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Label from "../../components/label";
import Input from "../../components/input";

import {
  Container,
  Box,
  IndicatorsContainer,
  InputsContainer,
  NavContainer,
  ButtonContainer,
} from "./styles";

const School = () => {
  const navigate = useNavigate();

  const dataIndicators = [
    {
      name: "alunos",
      numbers: "600",
    },
    {
      name: "responsáveis",
      numbers: "3",
    },
    {
      name: "professores",
      numbers: "20",
    },
  ];

  const cameBack = () => {
    localStorage.clear();
    navigate("/dashboard");
  };

  return (
    <Layout>
      <Container>
        <NavContainer>
          <UserNav onAction={cameBack} name="E.M George Chalmers" />
        </NavContainer>
        <Box>
          <Label name="Quantidade de usuarios logados:" />
          <IndicatorsContainer>
            {dataIndicators.map((item, index) => {
              return (
                <Indicators
                  name={item?.name}
                  numbers={item?.numbers}
                  key={index}
                />
              );
            })}
          </IndicatorsContainer>
          <InputsContainer>
            <Label name="lorem ipsum" />
            <Input placeholder="lorem ipusum" />
            <Label name="lorem ipsum" />
            <Input placeholder="lorem ipusum" />
          </InputsContainer>
          <ButtonContainer>
            <Button name="Atualizar" />
          </ButtonContainer>
        </Box>
      </Container>
    </Layout>
  );
};

export default School;
