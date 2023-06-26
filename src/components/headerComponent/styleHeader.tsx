import styled from "styled-components";

// Logo component
export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

// Link component for Header items
export const Link = styled.a`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  border: solid #b3b3b3 1px;
  color: #81b622;
  font-size: 16px;
  width: 120px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    background: #81b622;
    border: solid #121212 1px;
    color: white;
  }
  z-index: 10;
  border-radius: 22px;
  padding: 5px;
  box-shadow: 1px 1px 7px black;
  margin-left: 7px;
`;

// Header component
export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: transparent;
  box-shadow: 1px 1px 15px 1px black
  width: 100%;
  padding: 20px;
 
`;

// HeaderItems component
export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

export const Icon = styled.i`
  font-size: 14px;
  margin-right: 8px;
`;

