import styled from "styled-components";

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("https://www.bbva.ch/wp-content/uploads/2021/10/08_1-Ventajas-y-desventajas-de-invertir-en-cannabis-medicinal.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100%;
  height: 100vh;
  padding: 10px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  animation: fadein 3s forwards;
  @keyframes fadein {
    from {
      background-color: rgba(0, 0, 0, 0.5);
    }
    to {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
