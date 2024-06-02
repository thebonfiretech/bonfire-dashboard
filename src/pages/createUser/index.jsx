import React, { useState } from "react";

import FilterButtons from "../../components/filterButtons";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Label from "../../components/label";
import Input from "../../components/input";

import { Container, Box, IndicatorsContainer, ButtonContainer } from "./styles";

const CreateUser = () => {
  
  const [selected, setSelected] = useState(undefined)
  const [selected2, setSelected2] = useState(undefined)
  
  const navigate = useNavigate();

  const dataPeople = [
    {
      name: "aluno",
    },
    {
      name: "responsável",
    },
    {
      name: "professor",
    },
  ];

  const dataStatus = [
    {
      name: "desativado",
    },
    {
      name: "não registrado",
    },
    {
      name: "logado",
    },
  ];

  const cameBack = () => {
    localStorage.clear();
    navigate("/users");
  };

  

  return (
    <Layout>
      <Container>
        <Box>
          <Label name="Tipo da conta" />
          <IndicatorsContainer>
            {dataPeople.map((item, index) => {
              return (
                <FilterButtons
                  select={selected}
                  onAction={() =>
                    setSelected((prev) =>
                      prev == item?.name ? undefined : item?.name,
                    )
                  }
                  name={item?.name}
                  key={index}
                />
              );
            })}
          </IndicatorsContainer>
          <Label name="Status da conta" />
          <IndicatorsContainer>
            {dataStatus.map((item, index) => {
              return <FilterButtons
                       select={selected2}
                       onAction={() =>
                         setSelected2((prev) =>
                           prev == item?.name ? undefined : item?.name,
                         )
                       }
                       name={item?.name} key={index} />;
            })}
          </IndicatorsContainer>

          <Label name="Email" />
          <Input placeholder="joaovitor@gmail.com" />
          <Label name="Nome" />
          <Input placeholder="João Vitor Dutra de Souza" />
          <Label name="Carteira" />
          <Input placeholder="15 gentilezas" />
          <ButtonContainer>
            <Button name="Criar" />
          </ButtonContainer>
        </Box>
      </Container>
    </Layout>
  );
};

export default CreateUser;
