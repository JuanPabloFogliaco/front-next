import NotificationComponent from "../notificationComponent";
import {
  CardContainer,
  CardImage,
  CardOptions,
  CardTitle,
  IncrementBtn,
  Options,
} from "./styleCard";

const CardComponent = ({ imageSrc, title, increment, stock }: any) => {
  console.log(stock === 0);
  return (
    <CardContainer>
      <CardImage src={imageSrc} />
      <CardOptions>
        <CardTitle style={{ width: "350px" }}>{title}</CardTitle>
        {stock == 0 && (
          <CardTitle style={stock == 0 ? { color: "red", width: "100%" } : {}}>
            Sin stock
          </CardTitle>
        )}
        <Options>
          <IncrementBtn
            style={stock == 0 ? { cursor: "no-drop" } : {}}
            disabled={stock == 0}
            onClick={() => increment()}
          >
            +
          </IncrementBtn>
        </Options>
      </CardOptions>
    </CardContainer>
  );
};

export default CardComponent;
