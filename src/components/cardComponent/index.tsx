import NotificationComponent from "../notificationComponent";
import {
  CardContainer,
  CardImage,
  CardOptions,
  CardTitle,
  IncrementBtn,
  Options,
} from "./styleCard";

const CardComponent = ({ imageSrc, title, increment }: any) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} />
      <CardOptions>
        <CardTitle>{title}</CardTitle>
        <Options>
        <IncrementBtn onClick={()=> increment()}>+</IncrementBtn>
        </Options>
      </CardOptions>
    </CardContainer>
  );
};

export default CardComponent;
