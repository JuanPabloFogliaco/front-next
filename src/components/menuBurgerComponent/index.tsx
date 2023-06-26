import ButtonComponent from "../buttonComponent";
import {
  BurgerButton,
  WrapperDropDownMenuBurger,
  WrapperMenuBurger,
} from "./style";

interface IMenuBUrgerComponent {
  onClickOpen: (e: any) => void;
  headers: Array<any>;
  isOpen: boolean;
}

export default function MenuBurgerComponent({
  onClickOpen,
  headers,
  isOpen,
}: IMenuBUrgerComponent) {
  return (
    <WrapperMenuBurger>
      <BurgerButton onClick={(e) => onClickOpen(e)} src="/menu.png" />

      {isOpen && (
        <WrapperDropDownMenuBurger>
          {" "}
          {headers.map((e) => {
            return <ButtonComponent title={e} onClick={() => {}} />;
          })}
        </WrapperDropDownMenuBurger>
      )}
    </WrapperMenuBurger>
  );
}
