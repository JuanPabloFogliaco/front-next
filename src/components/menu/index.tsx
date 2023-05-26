import { Link, MenuItem, MenuItems, MenuWrapper } from "./styleMenu";
import Logo from "../../../public/logo.png";
import Image from "next/image";

interface IMenu {
  data: [];
  handleLogout(): any;
}

const Menu = ({ data, handleLogout }: IMenu) => {
  return (
    <MenuWrapper>
      <Image width={60} height={50} src={Logo} alt={""} />
      <MenuItems>
        <MenuItem>
          <Link onClick={handleLogout}>Salir</Link>
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;
