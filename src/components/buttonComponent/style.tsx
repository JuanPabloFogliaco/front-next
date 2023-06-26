import styled from "styled-components";

export const Button = styled.a`
  padding: 10px 20px;
  border: none;
  border-radius: 22px;
  background-color: #81b622;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 165px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 7px black;
  z-index: 2;
  &:hover {
    border: solid black 1px;
  }

  @media (max-width: 425px) {
    width: 120px;
    height: 30px;
    padding:2px;
    font-size: 14px;
  }
`;
