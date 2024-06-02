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

const Economy = () => {
  const navigate = useNavigate();

  const dataInvestments = [
    {
      name: "poupança",
      numbers: "50",
    },
    {
      name: "CDI",
      numbers: "50",
    },
    {
      name: "CDB",
      numbers: "50",
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
          <Label name="Quantidade de alunos investidores:" />
          <IndicatorsContainer>
            {dataInvestments.map((item, index) => {
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
            <Label name="Carteira" />
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

export default Economy;
