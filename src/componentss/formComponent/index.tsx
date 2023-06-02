import InputComponent from "../inputComponent";
import TitleComponent from "../titleComponent";
import {
  Container,
  ContainerButtons,
  ContainerGroup,
  Form,
  Group,
} from "./style";
import ErrorComponent from "../errorComponent";
import ButtonComponent from "../buttonComponent";

interface IFormComponent {
  handleEmailChange: (e: any) => void;
  handlePasswordChange: (e: any) => void;
  handleSubmitChange: (e: any) => void;
  backToPage: (e: any) => void;
  error: any;
  values: IValues;
}

interface IValues {
  email: string;
  password: string;
}

export default function FormComponent({
  handleEmailChange,
  handlePasswordChange,
  handleSubmitChange,
  backToPage,
  error,
  values,
}: IFormComponent) {
  return (
    <Form>
      <Container>
        <TitleComponent secondary title="Ingresa al Club de Cannabis" />
        <ContainerGroup>
          <Group>
            <TitleComponent third title="Email" />
            <InputComponent
              type="email"
              handleChange={(e) => handleEmailChange(e)}
              value={values.email}
            />
          </Group>
          <Group>
            <TitleComponent third title="Contraseña" />
            <InputComponent
              type="password"
              handleChange={(e) => handlePasswordChange(e)}
              value={values.password}
            />
          </Group>
          <ErrorComponent title={error} />
          <ContainerButtons>
            <ButtonComponent
              title="Ingresar"
              onClick={(e) => handleSubmitChange(e)}
            />
            <ButtonComponent title="Volver" onClick={(e) => backToPage(e)} />
          </ContainerButtons>
        </ContainerGroup>
      </Container>
    </Form>
  );
}
