import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  border: 1px solid black;
  right: 20px;
  padding: 15px;
`;

export const TitleDetail = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const ListDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ItemDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`;

export const TitleItemDetail = styled.div`
  width: 75%;
  font-size: 16px;
`;

export const OptionsItemDetail = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  width: 25%;
  height: 30px;
`;

export const IncrementBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: black;
  cursor: pointer;
  border-radius: 12px;
  color: white;
`;

export const DecrementtBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: red;
  cursor: pointer;
  border-radius: 12px;
  color: white;
`;

export const Separator = styled.div`
  width: 10px;
  height: 20px;
`;

export const ButtonSend = styled.button`
  width: 100px;
  height: 40px;
  background: black;
  border-radius: 10px;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border:none;
  font-size: 15px;
`;
