import { useState } from "react";
import { ButtonLoginText } from "../../constants/texts/textsPublixFeature";
import ButtonComponent from "../buttonComponent";
import MenuBurgerComponent from "../menuBurgerComponent";
import { Link, HeaderItem, HeaderItems, HeaderWrapper } from "./styleHeader";
import Image from "next/image";

interface IHeader {
  data: [];
  handleLogout(): any;
  links: Array<any>;
  titleBtnPrimary: string;
}

const HeaderComponent = ({
  data,
  handleLogout,
  links,
  titleBtnPrimary,
}: IHeader) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Image
        width={60}
        height={60}
        src="/logo.png"
        alt={""}
        style={{ zIndex: 10, marginTop: "4px", borderRadius: 60 }}
      />
      <HeaderItems>
        {links?.map((e) => {
          return <Link>{e}</Link>;
        })}
        <HeaderItem>
          <ButtonComponent title={titleBtnPrimary} onClick={handleLogout} />
        </HeaderItem>
      </HeaderItems>

      <MenuBurgerComponent
        headers={links}
        isOpen={isOpen}
        onClickOpen={() => setIsOpen(!isOpen)}
      />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
