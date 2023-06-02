import { useSelector } from "react-redux";
import { AmountProducts, Separator, TitleAmount, TitleHome } from "./style";
import { BiDownArrow } from "react-icons/bi";
import { RootState } from "../../redux/store";
import { selectTotalCount } from "../../redux/slices/productsSlice";
import { useState } from "react";
import Dropdown from "../../components/dropdown";

export const DetailShopFeature = () => {
  const totalCount = useSelector((state: RootState) => selectTotalCount(state));
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  return (
    <>
      <AmountProducts>
        <TitleHome>Mis cocos</TitleHome>
        <TitleAmount onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
          Total: {totalCount} g <Separator />
          <BiDownArrow color="black" />
        </TitleAmount>
      </AmountProducts>
      <>{isOpenDropDown && <Dropdown></Dropdown>}</>
    </>
  );
};
