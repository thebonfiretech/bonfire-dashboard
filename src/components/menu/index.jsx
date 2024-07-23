import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineAudit,
  AiOutlineDollarCircle,
  AiOutlineUsergroupAdd,
  AiOutlineNotification,
  AiOutlineFileAdd,
  AiOutlineImport,
  AiOutlineLeft
} from "react-icons/ai";

import {
  MdDriveFileRenameOutline
} from "react-icons/md";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubButtonMenu from "../subButtonMenu";
import LogoContainer from "../logoContainer";
import ButtonMenu from "../buttonMenu";

import { Container, Logout, OpenMenu } from "./styles";

const Menu = () => {

  const navigate = useNavigate()

  const initialIsOpen = localStorage.getItem("isOpen") === "true";
  const [openDropdown, setOpenDropdown] = useState(undefined)
  const [openMenu, setOpenMenu] = useState(initialIsOpen);
  const [isOpen, setIsOpen] = useState(initialIsOpen);


  useEffect(() => {
    setIsOpen(openMenu);
    localStorage.setItem("isOpen", openMenu.toString());
  }, [openMenu]);


  const handleClickMenu = () => {
    setOpenMenu(prev => !prev);
  };


  const Buttons = [
    {
      data: {
        icon: AiOutlineTeam,
        name: "Usuários",
      },
      subData: [
        {
          icon: AiOutlineTeam,
          name: "Criar Usuário",
          path: "/users",
        },
        {
          icon: AiOutlineUsergroupAdd,
          name: "Ver Usuários",
          path: "/createUser",
        },
      ],
    },
    {
      data: {
        icon: AiOutlineAudit,
        name: "Escola",
      },
      subData: [
        {
          icon: AiOutlineAudit,
          name: "Ver Escola",
        },
        {
          icon: AiOutlineNotification,
          name: "Avisos",
        },
        {
          icon: AiOutlineFileAdd,
          name: "Criar",
        },
        {
          icon: MdDriveFileRenameOutline,
          name: "Editar",
        },
      ],
    },
    {
      data: {
        icon: AiOutlineDollarCircle,
        name: "Economia",
      },
      subData: [
        {
          icon: AiOutlineDollarCircle,
          name: "Economia",
          path: "/economy",
        },

      ],
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <section>
        <OpenMenu isOpen={isOpen} onClick={handleClickMenu} >
          <LogoContainer height="50px" width="50px" />
          {
            isOpen && <>
              <h1>Bonfire Tech</h1>
              <AiOutlineLeft color={"#FFFFFF"} />
            </>
          }


        </OpenMenu>
        <ButtonMenu
          active={isOpen}
          name="Dashboard"
          icon={AiOutlineHome}
          onAction={() => navigate("/dashboard")} />
        {
          Buttons.map((item, index) => {
            return (
              <section key={index}>
                <ButtonMenu
                  onAction={() => setOpenDropdown(prev => prev == item.data.name ? undefined : item?.data?.name)}
                  open={item.data.name == openDropdown ? true : false}
                  active={isOpen}
                  dropdown={true}
                  icon={item.data.icon}
                  name={item.data.name}
                />
                {
                  openDropdown == item.data.name ? item?.subData?.map((subItem, subIndex) => {
                    return (
                      <SubButtonMenu
                        onAction={() => navigate(subItem?.path)}
                        active={isOpen}
                        icon={subItem.icon}
                        name={subItem.name}
                        key={subIndex} />
                    )
                  }) : ""
                }
              </section>
            )
          })
        }
      </section>
      <section>

        <Logout
          onClick={() => {
            localStorage.removeItem("token"), navigate("/");
          }}
          isOpen={isOpen}
        >
          <AiOutlineImport size={20} color="#fff" />
          {
            isOpen ? "Sair" : ""
          }
        </Logout>
      </section>

    </Container>
  );
};

export default Menu;