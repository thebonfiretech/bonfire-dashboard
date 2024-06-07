import React, { useEffect, useState } from "react";

import FilterButtons from "../../components/filterButtons";
import { useNavigate, useParams } from "react-router-dom";
import UserNav from "../../components/userNav";
import Layout from "../../components/layout";
import Button from "../../components/button";
import Label from "../../components/label";
import Input from "../../components/input";
import Loader from '../../components/loader';
import Actions from "../../actions/admin/user";
import Alert from "../../components/alert";

import {
  Container,
  Box,
  IndicatorsContainer,
  NavContainer,
  ButtonContainer,
} from "./styles";

const EditUser = () => {
  useEffect(() => {
    const get = async () => {
      try {
        const response = await Actions.get(id);
        
          setRemoveLoading(true);
          setUser(response),
          setName(response?.name),
          setSchool(response?.school),
          setCoins(response?.coins),
          setSelected(response?.role),
          setSelected2(response?.status);
      } catch (error) {
        console.error(error);
      }
    };

    get();
  }, []);

  const update = async (id, data) => {
    try {
      await Actions.update(id, data).then(() =>
      setAlert({
        icon: "success",
        title: "Usuário atualizado com sucesso",
        confirm: false,
      })
        ).catch(() =>
        setAlert({
          icon: "error",
          title: "Erro ao atualizar usuário",
          confirm: true,
        }))
   
    } catch (error) {
      
    }
  };

  const [user, setUser] = useState(undefined);
  let { id } = useParams();

  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [selected, setSelected] = useState(undefined);
  const [selected2, setSelected2] = useState(undefined);
  const [coins, setCoins] = useState(0);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [alert, setAlert] = useState(undefined);

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
    constructor({ school, name, coins }) {
      this.school = school;
      this.name = name;
      this.role = selected;
      this.status = selected2;
      this.coins = coins;
    }
  }

  const navigate = useNavigate();

  const cameBack = () => {
    navigate("/users");
  };

  return (
    <Layout>
      <Container>
        <NavContainer>
          <UserNav onAction={cameBack} name={user?.name} />
        </NavContainer>
        <Box>
          <Label name="Tipo da conta" />
          <IndicatorsContainer>
            {dataPeople.map((item, index) => {
              return (
                <FilterButtons
                  select={selected}
                  onAction={() => {
                    setSelected((prev) =>
                      prev == item?.name ? undefined : item?.name,
                    );
                  }}
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
          <Input
            onChange={(value) => setSchool(value)}
            placeholder={user?.school || ""}
          />
          <Label name="Nome" />
          <Input
            onChange={(value) => setName(value)}
            placeholder={user?.name || ""}
          />
          <Label name="Carteira" />
          <Input
            onChange={(value) => setCoins(value)}
            placeholder={user?.coins || "0"}
          />
          <ButtonContainer>
            <Button
              name="Atualizar"
              onAction={() => {
                const userUpdate = new User({
                  school,
                  name,
                  selected,
                  selected2,
                  coins,
                });

                update(id, userUpdate);
              }}
            />
          </ButtonContainer>
        </Box>
      </Container>
      {alert && (
        <Alert icon={alert.icon} title={alert.title} confirm={alert.confirm} />
      )}
       {!removeLoading && <Loader />}
    </Layout>
  );
};

export default EditUser;
