import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { incrementProduct } from "../../redux/slices/productsSlice";
import CardComponent from "../../components/cardComponent";
import { WrapperProducts } from "./style";
import { LoadingComponent } from "../../components/loadingComponent";
import NotificationComponent from "../../components/notificationComponent";
import { useState } from "react";

interface NotificationItem {
  id: number;
  message: string;
}

export const ProductsFeature = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);
  const loading = useAppSelector((state) => state.products.loading);

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const handleIncrement = (productName: string) => {
    dispatch(incrementProduct({ name: productName, count: 1 }));

    const newNotification = {
      id: Date.now(),
      message: `Se ha añadido 1 unidad de ${productName} al carrito.`,
    };

    setNotifications((prevNotifications: any) => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  return (
    <WrapperProducts>
      {!loading &&
        Array.isArray(products) &&
        products.map((e: any) => {
          const destruct = e;
          const data = { name: e.name, stock: e.stock, img: e.urlImg };
          return (
            <>
              <CardComponent
                increment={() => handleIncrement(data.name)}
                key={data.name}
                title={data.name}
                stock={data.stock}
                imageSrc={data.img }
              />
              <NotificationComponent
                setNotifications={(e) => setNotifications(e)}
                notifications={notifications}
              />
            </>
          );
        })}

      {loading && <LoadingComponent />}
    </WrapperProducts>
  );
};
