import { LoadingComponent } from "../loadingComponent";
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

interface IDropdownComponent {
  loading: boolean;
  products: Array<any>;
  succesOrder: string;
  orderError: string;
  sendOrder: () => void;
  cleanDetailOrderInShop: () => void;
  incrementProduct: (obj: any) => void;
  decrementProduct: (obj: any) => void;
}

const DropdownComponent = ({
  loading,
  orderError,
  products,
  succesOrder,
  sendOrder,
  cleanDetailOrderInShop,
  incrementProduct,
  decrementProduct,
}: IDropdownComponent) => {
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
      {!loading && (
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
                    onClick={() => incrementProduct({ name: e.name, count: 1 })}
                  >
                    +
                  </IncrementBtn>
                  <Separator />
                  <DecrementtBtn
                    onClick={() => decrementProduct({ name: e.name, count: 1 })}
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
      )}

      {loading && <LoadingComponent />}
    </Wrapper>
  );
};

export default DropdownComponent;
