import { useSelector } from "react-redux";
import { WrapperDetail } from "./style";
import { RootState } from "../../redux/store";
import {
  decrementProduct,
  incrementProduct,
  selectTotalCount,
  setInShop,
} from "../../redux/slices/productsSlice";
import { useState } from "react";
import DropdownComponent from "../../components/dropdownComponent";
import TitleComponent from "../../components/titleComponent";
import { ButtonDropdownComponent } from "../../components/buttonDropdownComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  PostOrderAsync,
  setErrorOrder,
  setSuccesOrder,
} from "../../redux/slices/orderSlice";
import { PRIMARY_TEXT } from "../../constants/texts/textsDetailFeature";

export const DetailShopFeature = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.inShop);
  const succesOrder = useAppSelector((state) => state.order.succesOrder);
  const orderError = useAppSelector((state) => state.order.error);
  const loading = useAppSelector((state) => state.order.loading);

  const totalCount = useSelector((state: RootState) => selectTotalCount(state));

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const sendOrder = async () => {
    const email = localStorage.getItem("email");
    dispatch(
      PostOrderAsync({
        userEmail: email ? email : "",
        order: products,
      })
    );
    if (products.length !== 0 && succesOrder) {
      setTimeout(() => {
        cleanDetailOrderInShop();
      }, 9000);
    }
  };

  const cleanDetailOrderInShop = async () => {
    dispatch(setInShop());
    dispatch(setSuccesOrder());
    dispatch(setErrorOrder());
  };

  return (
    <>
      <WrapperDetail>
        <TitleComponent title={PRIMARY_TEXT} secondary />
        <ButtonDropdownComponent
          setIsOpenDropDown={() => setIsOpenDropDown(!isOpenDropDown)}
          totalCount={totalCount}
        />
      </WrapperDetail>
      {isOpenDropDown && (
        <DropdownComponent
          loading={loading}
          products={products}
          succesOrder={succesOrder}
          orderError={orderError}
          sendOrder={() => sendOrder()}
          cleanDetailOrderInShop={() => cleanDetailOrderInShop()}
          incrementProduct={(obj: any) => dispatch(incrementProduct(obj))}
          decrementProduct={(obj: any) => dispatch(decrementProduct(obj))}
        />
      )}
    </>
  );
};
