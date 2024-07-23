import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import { Container, Box, Items } from "./styles";
import { AiOutlineUser, AiOutlineRocket, AiOutlineTool } from "react-icons/ai";
import FilterButtons from "../../components/filterButtons";
import SearchBar from "../../components/searchBar";
import UserContainer from "../../components/userContainer";
import Actions from "../../actions/admin/user";
import Loader from '../../components/loader';
import { useNavigate } from "react-router-dom";
import Alert from '../../components/alert';

const Users = () => {

  const [selected, setSelected] = useState("normal");
  const [search, setSearch] = useState("");
  const [removeLoading, setRemoveLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const get = async () => {
      try {
        const response = await Actions.getAll();
        setRemoveLoading(true);
        setUsers(response);
      } catch (error) {
        console.error(error);
      }
    };

    get();
  }, []);

  

  const deleteUser = async (id) => {

    try {
      await Actions.deleteUser(id);
      setAlert(undefined)
      const response = await Actions.getAll();
      setUsers(response);
      
      
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDeleteUser = (id) => {
    
      setAlert({
        icon: "info",
        title: "Deseja Deletar este usuário?",
        confirm: true,
        cancel: true,
        timer: false,
        onConfirm: () => deleteUser(id),
        onCancel: () => setAlert(undefined),
      });
    
  };

  const dataFilter = [
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


  return (
    <Layout>
      <Container>
        <Box>
          <SearchBar onChange={(value) => setSearch(value)} />
          <section>
            {dataFilter.map((item, index) => {
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
          </section>
          <Items>
            {users
              .filter(
                (item) =>
                  item?.role == selected && item?.name.startsWith(search),
              )
              .reverse()
              .map((item, index) => {
                return (
                  <UserContainer
                    onUpdate={() => navigate(`/users/edit/${item?._id}`)}
                    onDelete={() => confirmDeleteUser(item?._id)}
                    name={item?.name}
                    iconType={
                      item?.role == "normal"
                        ? AiOutlineUser
                        : item?.role == "administrador"
                          ? AiOutlineRocket
                          : AiOutlineTool
                    }
                    key={index}
                  />
                );
              })}
          </Items>
        </Box>
      </Container>
      {alert && <Alert icon={alert.icon} title={alert.title} timer={alert.timer} confirm={alert.confirm} cancel={alert.cancel} onConfirm={alert.onConfirm} onCancel={alert.onCancel}/>}
       {!removeLoading && <Loader />}
    </Layout>
  );
};

export default Users;
