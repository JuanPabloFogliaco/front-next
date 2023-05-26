import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { UserAsync } from "../redux/slices/userSlice";
import { setIsLoggedLogin } from "../redux/slices/loginSlice";
import { setIsLoggedRegister } from "../redux/slices/registerSlice";
import LayoutPageMenu from "../components/globals/LayoutPageMenu";
import { GetBudsAsync } from "../redux/slices/budsSlice";
import { DetailShopFeature } from "../features/detailShop";
import { BudsFeature } from "../features/buds";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.data);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setIsLoggedLogin(false));
    dispatch(setIsLoggedRegister(false));
    router.push("/");
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(UserAsync(email));
      dispatch(GetBudsAsync());
    }
  }, []);

  return (
    <LayoutPageMenu handleLogout={handleLogout} data={data}>
      <DetailShopFeature />
      <BudsFeature />
    </LayoutPageMenu>
  );
}
