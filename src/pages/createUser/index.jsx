import React, { useState, useEffect } from "react";

import FilterButtons from "../../components/filterButtons";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Label from "../../components/label";
import Input from "../../components/input";
import Alert from "../../components/alert";

import Actions from "../../actions/admin/user";

import { Container, Box, IndicatorsContainer, ButtonContainer } from "./styles";

const CreateUser = () => {
  useEffect(() => {
    const get = async () => {
      try {
        const response = await Actions.getAll();
        setUsers(response);
        console.log(response.length);
      } catch (error) {
        console.error(error);
      }
    };

    get();
  }, []);

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [selected, setSelected] = useState(undefined);
  const [selected2, setSelected2] = useState(undefined);
  const [coins, setCoins] = useState(0);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(undefined);

  const navigate = useNavigate();

  const dataPeople = [
    {
      name: "normal",
    },
    {
      name: "administrador",
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

  class User {
    constructor(id, school, name, role, status, coins) {
      this.id = id;
      this.school = school;
      this.name = name;
      this.role = role;
      this.status = status;
      this.coins = coins;
    }
  }

  const handleCreate = async (data) => {
    if (!name || !school || !selected || !selected2 || !coins) {
        setAlert({
          icon: "info",
          title: "Preencha todos os campos",
          confirm: false,
          timer: 1500,
        });
      setTimeout(() => {
        setAlert(undefined)
      }, 1500)
      
      return;
    }

    try {
      await Actions.post(data);
      setAlert({
        icon: "success",
        title: "Usuário criado com sucesso",
        confirm: false,
        timer: 1500,
      });
      setTimeout(() => {
      navigate("/users");
      }, 1500)
    } catch (error) {
      console.error(error);
      setAlert({
        icon: "error",
        title: "Erro ao criar usuário",
        confirm: true,
        timer: false,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const user = new User(
      Math.floor(Math.random() * name.length * 10000),
      school,
      name,
      selected,
      selected2,
      coins,
    );
    
    handleCreate(user);
    
  };

  return (
    <Layout>
      <Container onSubmit={handleSubmit}>
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
              return (
                <FilterButtons
                  select={selected2}
                  onAction={() =>
                    setSelected2((prev) =>
                      prev == item?.name ? undefined : item?.name,
                    )
                  }
                  name={item?.name}
                  key={index}
                />
              );
            })}
          </IndicatorsContainer>

          <Label name="Escola" />
          <Input onChange={(value) => setSchool(value)} placeholder="Escola" />
          <Label name="Nome" />
          <Input onChange={(value) => setName(value)} placeholder="Nome" />
          <Label name="Carteira" />
          <Input onChange={(value) => setCoins(value)} placeholder="Carteira" />
          <ButtonContainer>
            <Button name="Criar" />
          </ButtonContainer>
        </Box>
      </Container>

      {alert && (
        <Alert
          icon={alert.icon}
          title={alert.title}
          timer={alert.timer}
          confirm={alert.confirm}
        />
      )}
    </Layout>
  );
};

export default CreateUser;
