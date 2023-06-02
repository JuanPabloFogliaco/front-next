import react, { useEffect } from "react";
import { useRouter } from "next/router";
import { WrapperButtons, Container, Wrapper } from "./style";
import LogoComponent from "../../componentss/logoComponent";
import TitleComponent from "../../componentss/titleComponent";
import ButtonComponent from "../../componentss/buttonComponent";

export default function PublicFeature() {
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
    <Wrapper id="publicFeature">
      <Container>
        <LogoComponent width={200} height={200} url="/logo.png" />
        <TitleComponent primary title="Club social de cannabis" />
        <WrapperButtons>
          <ButtonComponent title="Iniciar sesión" onClick={navigateLogin} />
          <ButtonComponent title="Unirse al club" onClick={navigateRegister} />
        </WrapperButtons>
      </Container>
    </Wrapper>
  );
}
