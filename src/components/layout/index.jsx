import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Background from "../background";
import Menu from "../menu";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
  }, []);
  
  return (
    <Container>
      <Menu />
      <Background>{children}</Background>
    </Container>
  );
};

export default Layout;
