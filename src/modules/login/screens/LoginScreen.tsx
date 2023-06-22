/* eslint-disable prettier/prettier */
//import React from "react";

import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer />
        <LogoImage src="./logo.png"></LogoImage>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
