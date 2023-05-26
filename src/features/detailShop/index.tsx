import { useSelector } from "react-redux";
import { AmountBuds, Separator, TitleAmount, TitleHome } from "./style";
import { BiDownArrow } from "react-icons/bi";
import { RootState } from "../../redux/store";
import { selectTotalCount } from "../../redux/slices/budsSlice";
import { useState } from "react";
import Dropdown from "../../components/dropdown";

export const DetailShopFeature = () => {
  const totalCount = useSelector((state: RootState) => selectTotalCount(state));
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  return (
    <>
      <AmountBuds>
        <TitleHome>Mis cocos</TitleHome>
        <TitleAmount onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
          Total: {totalCount} g <Separator />
          <BiDownArrow color="black" />
        </TitleAmount>
      </AmountBuds>
      <>{isOpenDropDown && <Dropdown></Dropdown>}</>
    </>
  );
};
