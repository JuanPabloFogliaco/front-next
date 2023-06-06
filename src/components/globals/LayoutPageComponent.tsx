import HeaderComponent from "../headerComponent";
import PrivateRouteComponent from "./PrivateRouteComponent";

interface ILayoutPage {
  handleLogout(): any;
  data: [];
  children: any;
}

export default function LayoutPageComponent({
  handleLogout,
  data,
  children,
}: ILayoutPage) {
  return (
    <PrivateRouteComponent id="private">
      <HeaderComponent
        handleLogout={handleLogout}
        data={data}
      ></HeaderComponent>
      {children}
    </PrivateRouteComponent>
  );
}
