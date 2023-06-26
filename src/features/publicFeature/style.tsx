import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    background: rgb(0,0,0,0.7);
  }
  100% {
    background: rgb(0,0,0,0.5);
  }
`;

export const WrapperVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  /*background-image: url("https://www.bbva.ch/wp-content/uploads/2021/10/08_1-Ventajas-y-desventajas-de-invertir-en-cannabis-medicinal.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;*/
  background: whitesmoke;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /*animation: ${fadeIn} 5s forwards;
  position: absolute;*/
  padding: 10px;
  position: relative;
  z-index: 10;
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 920px;
  padding: 10px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const WrapperSocials = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: start;
  align-items: start;
  padding: 10px;
  position: relative;
  top: 100px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 850px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 32px;
  max-height: 32px;
  background: white;
  border-radius: 32px;
  box-shadow: 1px 1px 7px black;
`;

export const Separator = styled.div`
  display: flex;
  width: 140px;
  height: 10px;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  animation: fadeIn 2s ease-in-out forwards;
  animation-delay: 4s; /* Agrega un retraso de 2 segundos */
  background: black;
  @keyframes fadeIn {
    from {
      background: rgb(0, 0, 0, 0.9);
    }
    to {
      background: rgb(0, 0, 0, 0.0);
    }
  }
`;

//https://img.freepik.com/foto-gratis/brotes-marihuana-articulaciones-marihuana-aceite-cannabis_1150-20687.jpg?w=1380&t=st=1686278770~exp=1686279370~hmac=c2f6fd28c78afff348804b39869bff30f58494b5d41c88e29df564aefa05aeee
