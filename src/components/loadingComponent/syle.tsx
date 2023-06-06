import React from "react";
import styled, { keyframes } from "styled-components";

// Definir la animación del giro
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Estilos del componente de carga
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid blue;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
