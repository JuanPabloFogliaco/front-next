import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media(max-width: 600px){
    justify-content: center;
  }
`;
