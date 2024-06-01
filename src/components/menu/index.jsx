import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineAudit,
  AiOutlineDollarCircle,
  AiOutlineCaretLeft,
  AiOutlineUsergroupAdd,
  AiOutlineNotification,
  AiOutlineFileAdd,
  AiOutlineClose,
  AiOutlineImport,
} from "react-icons/ai";

import { MdDriveFileRenameOutline, MdOutlineSegment } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import ButtonMenu from "../buttonMenu";
import SubButtonMenu from "../subButtonMenu";

import { Container, Logout, MobileMenu } from "./styles";

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const [active, setActive] = useState(false);
  let navigate = useNavigate();

  const Buttons = [
    {
      data: {
        icon: AiOutlineHome,
        name: "Dashboard",
        path: "/dashboard",
      },
    },
    {
      data: {
        icon: AiOutlineTeam,
        name: "Usuários",
        path: "/users",
        dropdown: AiOutlineCaretLeft,
      },
      subData: [
        {
          icon: AiOutlineUsergroupAdd,
          name: "Criar usuários",
          path: "/createUser"
        },
      ],
    },
    {
      data: {
        icon: AiOutlineAudit,
        name: "Escola",
        path: "/school",
        dropdown: AiOutlineCaretLeft,
      },
      subData: [
        {
          icon: AiOutlineNotification,
          name: "Avisos",
        },
        {
          icon: AiOutlineFileAdd,
          name: "Criar avisos",
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
        path: "/economy",
        dropdown: AiOutlineCaretLeft,
      },
    },
  ];

  return (
    <Container active={active}>
      <span style={{ width: "100%", height: "100%" }}>
        <MobileMenu active={active} onClick={() => setActive((prev) => !prev)}>
          {active == false ? (
            <MdOutlineSegment
              style={{ transform: "rotate(180deg)" }}
              size={24}
              color="#fff"
            />
          ) : (
            <AiOutlineClose size={24} color="#fff" />
          )}
        </MobileMenu>
        {Buttons.map((item, index) => {
          return (
            <span key={index} style={{ width: "100%" }}>
              <ButtonMenu
                active={active}
                onAction={() => {
                  navigate(item.data.path);
                  setActive((prev) => !prev);
                }}
                justifyContent={active ? "space-between" : "center"}
                dropdown={active ? item.data.dropdown : null}
                name={active ? item.data.name : null}
                icon={item.data.icon}
                ActionDropdown={() =>
                  setOpenDropdown((prev) =>
                    prev === item.data.name ? "" : item.data.name,
                  )
                }
              />
              {openDropdown === item.data.name && item.subData && (
                <span>
                  {item.subData.map((subItem, subIndex) => (
                    <SubButtonMenu
                      onAction={() => navigate(subItem?.path)}
                      key={subIndex}
                      justifyContent={active ? "space-between" : "center"}
                      name={active ? subItem.name : null}
                      icon={subItem.icon}
                    />
                  ))}
                </span>
              )}
            </span>
          );
        })}
      </span>
      <Logout active={active} justifyContent={active ? "none" : "center"}>
        <AiOutlineImport size={24} color="#fff" />
        {active ? "Sair" : null}
      </Logout>
    </Container>
  );
};

export default Menu;
