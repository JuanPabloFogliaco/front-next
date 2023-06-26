import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 21px;
  border-radius: 11px;
  box-shadow: 0px 5px 10px rgba(1, 1, 1, 0.9);
`;

export const ContainerGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  justify-content: space-around;
  align-items: start;
  padding-top: 40px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: flex-end;
`;
