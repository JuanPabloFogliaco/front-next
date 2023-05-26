import styled, { createGlobalStyle } from "styled-components";

const WrapperHome = styled.div`
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
  background-color: whitesmoke;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  animation: fadein 3s forwards;

  @keyframes fadein {
    from {
      background-color: rgba(0, 0, 0, 0.9);
    }
    to {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: "whitesmoke";
    font-family: 'Roboto', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 60px;

  color: #e5e5e5;
  text-shadow: 2px 2px 2px black;
  padding-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  padding: 15px;
  border-radius: 7px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  margin-right: 20px;
`;

const LoginButton = styled(Button)`
  padding: 10px 20px;
  border: none;
  border-radius: 22px;
  background-color: #81b622;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 222px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: solid white 1px;
  }
`;

const RegisterButton = styled(Button)`
  padding: 10px 20px;
  border: none;
  border-radius: 22px;
  background-color: #81b622;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 222px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: solid white 1px;
  }
`;

export {
  WrapperHome,
  GlobalStyles,
  Button,
  Buttons,
  LoginButton,
  Logo,
  RegisterButton,
  Title,
  Container,
};
