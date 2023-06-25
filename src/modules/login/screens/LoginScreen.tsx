/* eslint-disable prettier/prettier */
//import React from "react";

import axios from "axios";
import { useState } from "react";

import Button from "../../../shared/buttons/button/Button";
import { useRequests } from "../../../shared/hooks/useRequets";
import Input from "../../../shared/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // Envia uma requisição post
    postRequest("http://localhost:8080/auth", {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            {" "}
            LOGIN{" "}
          </TitleLogin>
          <Input
            title="USUÁRIO"
            margin="32px 0px 0px"
            onChange={handleEmail}
            value={email}
          />
          <Input
            type="password"
            title="SENHA"
            margin="12px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button
            loading={loading} 
            type="primary"
            margin="30px 0px 16px 0px"
            onClick={handleLogin}
          >
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
