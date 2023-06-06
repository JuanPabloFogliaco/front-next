import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { UserAsync } from "../redux/slices/userSlice";
import { setIsLoggedLogin } from "../redux/slices/loginSlice";
import { setIsLoggedRegister } from "../redux/slices/registerSlice";
import LayoutPageComponent from "../components/globals/LayoutPageComponent";
import { GetProductsAsync, setError } from "../redux/slices/productsSlice";
import { DetailShopFeature } from "../features/detailShopFeature";
import { ProductsFeature } from "../features/productsFeature";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.user.data);
  const errorIsValidToken = useAppSelector((state) => state.products.error);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setIsLoggedLogin(false));
    dispatch(setIsLoggedRegister(false));
    dispatch(setError(""));
    router.push("/");
  };

  useEffect(() => {
    if (errorIsValidToken !== "") {
      console.log("entro");
      handleLogout();
    }
  }, [errorIsValidToken]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(UserAsync(email));
      dispatch(GetProductsAsync());
    }
  }, []);

  return (
    <LayoutPageComponent handleLogout={handleLogout} data={data}>
      <DetailShopFeature />
      <ProductsFeature />
    </LayoutPageComponent>
  );
}
