import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  top: 145px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 5px;
  width: 90% ;
`;

export const Notification = styled.div`
  background-color: green;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  opacity: 1;
  color: white;
  font-size: 14px;
`;

export const NotificationMessage = styled.p`
  margin: 0;
`;
