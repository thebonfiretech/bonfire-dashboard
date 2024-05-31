import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineAudit,
  AiOutlineDollarCircle,
  AiOutlineCaretLeft,
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import ButtonMenu from "../buttonMenu";
import { Container } from "./styles";


const Menu = () => {
  
  const [active, setActive] = useState(false);
  let navigate = useNavigate();
  
  const Buttons = [
    {
      icon: AiOutlineHome,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: AiOutlineTeam,
      name: "Usuários",
      path: "/users",
      dropdown: AiOutlineCaretLeft,
    },
    {
      icon: AiOutlineAudit,
      name: "Escola",
      path: "/school",
      dropdown: AiOutlineCaretLeft,
    },
    {
      icon: AiOutlineDollarCircle,
      name: "Economia",
      path: "/economy",
      dropdown: AiOutlineCaretLeft,
    },
  ];
  
  return (
    <Container active={active}>
      <button
        onClick={() => setActive((prev) => (prev == false ? true : false))}
      >
        abrir
      </button>
      
      {Buttons.map((item, index) => {
        return (
          <ButtonMenu
            key={index}
            onAction={() => navigate(item.path)}
            justifyContent={active == true ? "space-between" : "center"}
            dropdown={active == true ? item.dropdown : null}
            name={active == true ? item.name : null}
            icon={item.icon}
          />
        );
      })}
    </Container>
  );
};

export default Menu;
