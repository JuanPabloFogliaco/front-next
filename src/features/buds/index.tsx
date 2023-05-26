import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrementBud, incrementBud } from "../../redux/slices/budsSlice";
import Card from "../../components/card";
import { WrapperBuds } from "./style";

export const BudsFeature = () => {
  const dispatch = useAppDispatch();
  const buds = useAppSelector((state) => state.buds.data);

  return (
    <WrapperBuds>
      {buds &&
        buds?.map((e: any) => {
          return (
            <Card
              increment={() =>
                dispatch(incrementBud({ name: e.name, count: 1 }))
              }
              key={e.name}
              title={e.name}
              imageSrc="https://positronics.eu/wp-content/uploads/2022/07/amnesiamistery.jpg"
            />
          );
        })}
    </WrapperBuds>
  );
};
