import styled from "styled-components";

export const WrapperMenuBurger = styled.div`
  width: auto;
  height: auto;
  z-index: 10;
  @media (min-width: 769px) {
    display: none !important;
  }
`;

export const BurgerButton = styled.img`
  width: 42px;
  height: 42px;
  z-index: 10;
  cursor: pointer;
`;

export const WrapperDropDownMenuBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 15px;
  width: 60%;
  height: 100vh;
  z-index: 220;
  position: absolute;
  background-color: #202124;
  color: white;
  font-size: 25px;
  right: 0px;
  box-shadow: 1px 1px 7px black;
  top: 65px;
`;
