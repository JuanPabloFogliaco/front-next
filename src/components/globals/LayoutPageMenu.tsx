import Menu from "../menu";
import PrivateRoute from "./PrivateRoute";

interface ILayoutPageMenu {
  handleLogout(): any;
  data: [];
  children: any;
}

export default function LayoutPageMenu({
  handleLogout,
  data,
  children,
}: ILayoutPageMenu) {
  return (
    <PrivateRoute id="private">
      <Menu handleLogout={handleLogout} data={data}></Menu>
      {children}
    </PrivateRoute>
  );
}
   