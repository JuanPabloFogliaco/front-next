import styled from "styled-components";

interface ITitle {
  type?: string;
  weight?: string;
}

const validateType = (type: string) => {
  if (type === "primary") return "70px";
  if (type === "secondary") return "26px";
  if (type === "third") return "16px";
};

export const Title = styled.div<ITitle>`
  font-size: ${(props) => validateType(props.type ? props?.type : "")};
  font-weight: ${(props) => (props.type === "primary" ? 800 : "")};
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px black;

  @media (max-width: 425px) {
    font-size: ${(props) =>
      props.type === "secondary"
        ? "20px"
        : props.type === "third"
        ? "15px"
        : "40px"};
  }
`;
