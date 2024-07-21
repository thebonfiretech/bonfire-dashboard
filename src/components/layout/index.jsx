// src/components/layout/index.jsx
import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Background from "../background";
import Menu from "../menu";
import { useNavigate } from "react-router-dom";

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
