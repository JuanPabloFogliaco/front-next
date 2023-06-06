import { Link, HeaderItem, HeaderItems, HeaderWrapper } from "./styleHeader";
import Image from "next/image";

interface IHeader {
  data: [];
  handleLogout(): any;
}

const HeaderComponent = ({ data, handleLogout }: IHeader) => {
  return (
    <HeaderWrapper>
      <Image width={60} height={50} src={"/logo.png"} alt={""} />
      <HeaderItems>
        <HeaderItem>
          <Link onClick={handleLogout}>Salir</Link>
        </HeaderItem>
      </HeaderItems>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
