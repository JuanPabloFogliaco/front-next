import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-size: 11px;
  font-weight: bold;
  margin: 12px;
  width: 100%;
`;

export const CardOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
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

export const Options = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 10px;
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 100%;
`;
