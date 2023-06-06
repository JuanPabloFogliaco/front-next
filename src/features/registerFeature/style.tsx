import styled from "styled-components";

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DNSK4AOL7LP45EC74W3V4RKTTM.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100%;
  height: 100vh;
  padding: 10px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  animation: fadein 3s forwards;
  @keyframes fadein {
    from {
      background-color: rgba(0, 0, 0, 0.9);
    }
    to {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Form = styled.form`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 31px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(1, 1, 1, 0.9);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 22px;
  background-color: #81b622;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 120px;

  &:hover {
    border: solid white 1px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
`;

export const TextInput = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #e5e5e5;
  text-shadow: 2px 2px 2px black;
  padding-left: 5px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 30px;
`;
