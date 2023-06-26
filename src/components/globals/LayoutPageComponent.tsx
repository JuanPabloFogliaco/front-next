import HeaderComponent from "../headerComponent";
import PrivateRouteComponent from "./PrivateRouteComponent";

interface ILayoutPage {
  handleLogout(): any;
  data: [];
  children: any;
  titleBtnPrimary: string;
}

export default function LayoutPageComponent({
  handleLogout,
  data,
  children,
  titleBtnPrimary
}: ILayoutPage) {
  return (
    <PrivateRouteComponent id="private">
      <HeaderComponent
       titleBtnPrimary={"SALIR"}
        links={["REPROCAN", "NOSOTROS", "CONTACTO"]}
        handleLogout={handleLogout}
        data={data}
      ></HeaderComponent>
      {children}
    </PrivateRouteComponent>
  );
}
