import react, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  VideoBackground,
  Wrapper,
  WrapperButtons,
  WrapperDescription,
  WrapperVideoContainer,
} from "./style";
import TitleComponent from "../../components/titleComponent";
import ButtonComponent from "../../components/buttonComponent";
import {
  PrimaryText,
  ButtonLoginText,
  ButtonRegisterText,
  DescriptionText,
} from "../../constants/texts/textsPublixFeature";
import HeaderComponent from "../../components/headerComponent";

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
    <Wrapper>
      <WrapperVideoContainer>
        <HeaderComponent
          titleBtnPrimary={ButtonLoginText}
          links={["REPROCAN", "NOSOTROS", "CONTACTO"]}
          data={[]}
          handleLogout={() => navigateLogin()}
        />
        <VideoBackground autoPlay loop muted>
          <source src="/video_marihuana.mp4" type="video/mp4" />
        </VideoBackground>

        <Container>
          <TitleComponent primary key={1} title={PrimaryText} />
          <WrapperDescription>
            <TitleComponent third key={1} title={DescriptionText} />
          </WrapperDescription>
          <WrapperButtons>
            <ButtonComponent
              onClick={() => navigateRegister()}
              title={ButtonRegisterText}
            />
          </WrapperButtons>
        </Container>
      </WrapperVideoContainer>
    </Wrapper>
  );
}
