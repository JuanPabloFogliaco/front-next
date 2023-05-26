import react, { useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "../../public/logo.png";
import {
  Buttons,
  LoginButton,
  Container,
  RegisterButton,
  Title,
  WrapperHome,
} from "../styles/home";
import Image from "next/image";

export default function Index() {
  const router = useRouter();

  const navigateLogin = () => {
    router.push("/auth/login");
  };

  const navigateRegister = () => {
    router.push("/auth/register");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.push("/home");
  }, []);

  return (
    <WrapperHome id="init">
      <Container>
        <Image
        height={200}
          width={200}
          alt="asd"
          src={Logo}
          style={{zIndex: 1}}
        />
        <Title>Club social de cannabis</Title>
        <Buttons>
          <LoginButton onClick={() => navigateLogin()}>
            Iniciar sesión
          </LoginButton>
          <RegisterButton onClick={() => navigateRegister()}>
            Unirse al club
          </RegisterButton>
        </Buttons>
      </Container>
    </WrapperHome>
  );
}
