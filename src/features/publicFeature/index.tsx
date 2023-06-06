import react, { useEffect } from "react";
import { useRouter } from "next/router";
import { WrapperButtons, Container, Wrapper } from "./style";
import LogoComponent from "../../components/logoComponent";
import TitleComponent from "../../components/titleComponent";
import ButtonComponent from "../../components/buttonComponent";
import { PrimaryText, ButtonLoginText, ButtonRegisterText } from "../../constants/texts/textsPublixFeature";

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
        <TitleComponent primary title={PrimaryText} />
        <WrapperButtons>
          <ButtonComponent title={ButtonLoginText} onClick={navigateLogin} />
          <ButtonComponent title={ButtonRegisterText} onClick={navigateRegister} />
        </WrapperButtons>
      </Container>
    </Wrapper>
  );
}
