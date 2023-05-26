import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrementBud, incrementBud } from "../../redux/slices/budsSlice";
import { PostOrderAsync } from "../../redux/slices/orderSlice";
import {
  ButtonSend,
  DecrementtBtn,
  IncrementBtn,
  ItemDetail,
  ListDetail,
  OptionsItemDetail,
  Separator,
  TitleDetail,
  TitleItemDetail,
  Wrapper,
} from "./styleDropDown";

const Dropdown = () => {
  const buds = useAppSelector((state) => state.buds.inShop);
  const errorOrderSend = useAppSelector((state) => state.order.error);
  const dispatch = useAppDispatch();

  const sendOrder = async () => {
    const email = localStorage.getItem("email");
    dispatch(
      PostOrderAsync({
        userEmail: email ? email : "",
        order: buds,
      })
    );
  };

  console.log(errorOrderSend);

  return (
    <Wrapper>
      <TitleDetail>Detalle del pedido</TitleDetail>
      <ListDetail>
        {buds.length === 0 && "No hay elementos agregados."}
        <Separator />
        {buds?.map((e: any) => (
          <ItemDetail>
            <TitleItemDetail>{e.name}</TitleItemDetail>
            <OptionsItemDetail>
              {e.count}g
              <Separator />
              <IncrementBtn
                onClick={() =>
                  dispatch(incrementBud({ name: e.name, count: 1 }))
                }
              >
                +
              </IncrementBtn>
              <Separator />
              <DecrementtBtn
                onClick={() =>
                  dispatch(decrementBud({ name: e.name, count: 1 }))
                }
              >
                -
              </DecrementtBtn>
            </OptionsItemDetail>
          </ItemDetail>
        ))}


        
        <ButtonSend
          onClick={() => sendOrder()}
          disabled={buds.length == 0}
          style={
            buds.length === 0
              ? { background: "#b3b3b3", cursor: "no-drop" }
              : {}
          }
        >
          Pedir
        </ButtonSend>
      </ListDetail>
    </Wrapper>
  );
};

export default Dropdown;
