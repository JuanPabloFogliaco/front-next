import styled from "styled-components";

export const Form = styled.form`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 31px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(1, 1, 1, 0.9);
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  justify-content: start;
  align-items: start;
`;

export const ContainerGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 380px;
  justify-content: start;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: flex-end;
`;
