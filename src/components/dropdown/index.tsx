import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decrementProduct,
  incrementProduct,
  setInShop,
} from "../../redux/slices/productsSlice";
import {
  PostOrderAsync,
  setErrorOrder,
  setSuccesOrder,
} from "../../redux/slices/orderSlice";
import {
  ButtonNewOrder,
  ButtonSend,
  DecrementtBtn,
  IncrementBtn,
  ItemDetail,
  ListDetail,
  OptionsItemDetail,
  Separator,
  TitleDetail,
  TitleErrorOrder,
  TitleItemDetail,
  TitleSuccessOrder,
  Wrapper,
  WrapperButtons,
} from "./styleDropDown";

const Dropdown = () => {
  const products = useAppSelector((state) => state.products.inShop);
  const succesOrder = useAppSelector((state) => state.order.succesOrder);
  const orderError = useAppSelector((state) => state.order.error);
  const dispatch = useAppDispatch();

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

  const returnErrorOrSuccess = () => {
    if (products.length !== 0 && orderError) {
      return <TitleErrorOrder>{orderError}</TitleErrorOrder>;
    }
    if (products.length !== 0 && succesOrder) {
      return <TitleSuccessOrder>{succesOrder}</TitleSuccessOrder>;
    }
  };

  return (
    <Wrapper>
      <TitleDetail>Detalle del pedido</TitleDetail>
      <ListDetail>
        {products.length === 0 && "No hay elementos agregados."}
        <Separator />
        {products &&
          products?.map((e: any) => (
            <ItemDetail key={e.name}>
              <TitleItemDetail>{e.name}</TitleItemDetail>
              <OptionsItemDetail>
                {e.count}g
                <Separator />
                <IncrementBtn
                  onClick={() =>
                    dispatch(incrementProduct({ name: e.name, count: 1 }))
                  }
                >
                  +
                </IncrementBtn>
                <Separator />
                <DecrementtBtn
                  onClick={() =>
                    dispatch(decrementProduct({ name: e.name, count: 1 }))
                  }
                >
                  -
                </DecrementtBtn>
              </OptionsItemDetail>
            </ItemDetail>
          ))}

        {returnErrorOrSuccess()}

        <WrapperButtons>
          <ButtonSend
            onClick={() => sendOrder()}
            disabled={products.length == 0}
            style={
              products.length === 0
                ? { background: "#b3b3b3", cursor: "no-drop" }
                : {}
            }
          >
            Pedir
          </ButtonSend>

          {succesOrder && (
            <>
              <Separator /> <Separator />
            </>
          )}

          {succesOrder && (
            <ButtonNewOrder onClick={() => cleanDetailOrderInShop()}>
              Nueva
            </ButtonNewOrder>
          )}
        </WrapperButtons>
      </ListDetail>
    </Wrapper>
  );
};

export default Dropdown;
