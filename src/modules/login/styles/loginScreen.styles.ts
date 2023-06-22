/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
    
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    width: 50%;
    height: 100vh;
    // Alterar daqui para baixo para ficar mais adequado a minha tela.
    max-width: 646px; 
    right: 0;
    top: 0;
    z-index: 2;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
`;