import InputComponent from "../inputComponent";
import TitleComponent from "../titleComponent";
import { ContainerButtons, ContainerGroup, Form, Group } from "./style";
import ErrorComponent from "../errorComponent";
import ButtonComponent from "../buttonComponent";
import {
  BUTTON_BACK_TEXT,
  BUTTON_LOGIN_TEXT,
  EMAIL_TEXT,
  PASSWORD_TEXT,
  PRIMARY_TEXT,
} from "../../constants/texts/textsLoginFeature";
import { USER_NAME_TEXT } from "../../constants/texts/textsRegisterFeature";

interface IFormComponent {
  handleEmailChange: (e: any) => void;
  handleUserNameChange?: (e: any) => void;
  handlePasswordChange: (e: any) => void;
  handleSubmitChange: (e: any) => void;
  backToPage: (e: any) => void;
  error: any;
  values: IValues;
  isRegister: boolean;
}

interface IValues {
  email: string;
  password: string;
  username?: string;
}

export default function FormComponent({
  handleEmailChange,
  handleUserNameChange,
  handlePasswordChange,
  handleSubmitChange,
  backToPage,
  error,
  values,
  isRegister,
}: IFormComponent) {
  const renderGroupUserName = () => {
    return (
      <Group>
        <TitleComponent third title={USER_NAME_TEXT} />
        <InputComponent
          type="text"
          handleChange={(e) =>
            handleUserNameChange ? handleUserNameChange(e) : {}
          }
          value={values?.username ? values?.username : ""}
        />
      </Group>
    );
  };

  const renderErrorOrSuccess = () => {
    return <ErrorComponent title={error} />;
  };

  return (
    <Form>
      <TitleComponent secondary title={PRIMARY_TEXT} />

      <ContainerGroup>
        <Group>
          <TitleComponent third title={EMAIL_TEXT} />
          <InputComponent
            type="email"
            handleChange={(e) => handleEmailChange(e)}
            value={values.email}
          />
        </Group>

        {isRegister && renderGroupUserName()}

        <Group>
          <TitleComponent third title={PASSWORD_TEXT} />
          <InputComponent
            type="password"
            handleChange={(e) => handlePasswordChange(e)}
            value={values.password}
          />
        </Group>

        {error && renderErrorOrSuccess()}
      </ContainerGroup>

      <ContainerButtons>
        <ButtonComponent
          title="Ingresar"
          onClick={(e) => handleSubmitChange(e)}
        />
        <ButtonComponent
          title={BUTTON_BACK_TEXT}
          onClick={(e) => backToPage(e)}
        />
      </ContainerButtons>
    </Form>
  );
}
