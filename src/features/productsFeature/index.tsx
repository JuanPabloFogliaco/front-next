import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { incrementProduct } from "../../redux/slices/productsSlice";
import Card from "../../components/card";
import { WrapperProducts } from "./style";

export const ProductsFeature = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);

  return (
    <WrapperProducts>
      {products && Array.isArray(products) &&
        products.map((e: any) => {
          return (
            <Card
              increment={() =>
                dispatch(incrementProduct({ name: e.name, count: 1 }))
              }
              key={e.name}
              title={e.name}
              imageSrc="https://positronics.eu/wp-content/uploads/2022/07/amnesiamistery.jpg"
            />
          );
        })}
    </WrapperProducts>
  );
};
