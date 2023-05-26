import styled from "styled-components";

// Logo component
export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

// Link component for menu items
export const Link = styled.a`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  border: solid #b3b3b3 1px;
  color: #121212;
  font-size: 16px;
  width: 90px;
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
`;

// Menu component
export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: white;
  box-shadow: 1px 1px 15px 1px #b3b3b3
  width: 100%;
  padding: 20px;
`;

// MenuItems component
export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

export const Icon = styled.i`
  font-size: 14px;
  margin-right: 8px;
`;
