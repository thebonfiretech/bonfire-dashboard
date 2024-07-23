import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../background";
import { Container } from "./styles";
import Menu from "../menu";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Menu />
      <Background />
    </Container>
  );
};



export default Layout;
