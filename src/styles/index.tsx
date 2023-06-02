import styled, { createGlobalStyle } from "styled-components";

export const TitleHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 24px;
  font-weight: bold;

  padding-top: 20px;
  padding-bottom: 10px;
`;

export const AmountProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TitleAmount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  background: #b3b3b3;
  color: white;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 15px;
`;

export const BtnAmount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  background: green;
  color: white;
  cursor: pointer;
`;
