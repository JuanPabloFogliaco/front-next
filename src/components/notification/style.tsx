import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const NotificationContainer = styled.div`
  width: 250px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #bdcf5c;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-in-out forwards,
    ${fadeOut} 0.5s 5s ease-in-out forwards;
  color: white;
`;

export const NotificationText = styled.p`
  margin: 0;
`;
