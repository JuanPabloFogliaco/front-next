import { BiDownArrow } from "react-icons/bi";
import { ButtonDropdown, Separator } from "./style";
import {
  G_AMOUNT_TEXT,
  TOTAL_AMOUNT_TEXT,
} from "../../constants/texts/textsDetailFeature";

interface IButtonDropdownComponent {
  totalCount: number;
  setIsOpenDropDown: () => void;
}

export const ButtonDropdownComponent = ({
  totalCount,
  setIsOpenDropDown,
}: IButtonDropdownComponent) => {
  return (
    <ButtonDropdown onClick={() => setIsOpenDropDown()}>
      {TOTAL_AMOUNT_TEXT}: {totalCount} {G_AMOUNT_TEXT} <Separator />
      <BiDownArrow color="black" />
    </ButtonDropdown>
  );
};
