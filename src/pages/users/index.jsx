import Layout from "../../components/layout";
import React from "react";
import { Container, Box, Items } from "./styles";
import { AiOutlineUser, AiOutlineRocket, AiOutlineTool } from "react-icons/ai";
import FilterButtons from "../../components/filterButtons";
import SearchBar from "../../components/searchBar";
import UserContainer from "../../components/userContainer";

const Users = () => {
  
  const dataFilter = [
    {
      name: "Usuários",
    },
    {
      name: "Administradores",
    },
    {
      name: "Responsáveis",
    },
  ];

  const dataUsers = [
    {
      name: "José",
      iconType: AiOutlineUser,
    },
    {
      name: "Pedro",
      iconType: AiOutlineRocket,
    },
    {
      name: "Carlos",
      iconType: AiOutlineTool,
    },
  ];

  return (
    <Layout>
      <Container>
        <Box>
          <SearchBar />
          <section>
            {dataFilter.map((item, index) => {
              return <FilterButtons name={item?.name} key={index} />;
            })}
          </section>
          <Items>
            {dataUsers.map((item, index) => {
              return (
                <UserContainer
                  name={item?.name}
                  iconType={item?.iconType}
                  key={index}
                />
              );
            })}
          </Items>
        </Box>
      </Container>
    </Layout>
  );
};

export default Users;
