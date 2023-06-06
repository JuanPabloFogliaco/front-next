import styled from "styled-components";

interface ITitle {
  type?: string;
}

const validateType = (type: string) => {
  if (type === "primary") return "50px";
  if (type === "secondary") return "27px";
  if (type === "third") return "18px";
};

export const Title = styled.div<ITitle>`
  font-size: ${(props) => validateType(props.type ? props?.type : "")};
  color: #e5e5e5;
  text-shadow: 2px 2px 2px black;
  padding-bottom: 7px;
  margin:10px;
  @media (max-width: 425px) {
    font-size: ${(props)=> props.type === "secondary" ? "20px": props.type === "third" ? "15px" : "40px"};
    text-align:center;
    padding-bottom:0px;
  }
`;
