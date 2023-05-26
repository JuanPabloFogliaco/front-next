import {
  CardContainer,
  CardImage,
  CardOptions,
  CardTitle,
  IncrementBtn,
  Options,
} from "./styleCard";

const Card = ({ imageSrc, title, increment }: any) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} />
      <CardOptions>
        <CardTitle>{title}</CardTitle>
        <Options>
          <IncrementBtn onClick={() => increment()}>+</IncrementBtn>
        </Options>
      </CardOptions>
    </CardContainer>
  );
};

export default Card;
