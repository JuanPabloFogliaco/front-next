import { useAppSelector } from "../../redux/hooks";
import {
  LoginAsync,
  setEmail,
  setError,
  setPassword,
} from "../../redux/slices/loginSlice";
import {
  Button,
  ContainerButtons,
  ContainerInputs,
  ContainerLogin,
  Form,
  Input,
  Separator,
  TextInput,
  WrapperLogin,
} from "./stylesLogin";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ILoginAsync } from "../../interfaces";
import { validateDataLogin } from "../../utils/validations";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const error = useAppSelector((state) => state.login.error);
  const email = useAppSelector((state) => state.login.email);
  const password = useAppSelector((state) => state.login.password);
  const isLogged = useAppSelector((state) => state.login.isLogged);

  const handleEmailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(setPassword(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a: ILoginAsync = { email, password };
    const validate = validateDataLogin(a);
    if (validate === "") {
      dispatch(LoginAsync(a));
    } else {
      dispatch(setError(validate));
    }
  };

  const backToHome = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(setPassword(""));
    await dispatch(setEmail(""));
    await dispatch(setError(""));
    router.push("/");
  };

  const token =
    typeof window !== "undefined" && localStorage.getItem("access_token");
  if (isLogged && token) router.push("/home");

  return (
    <WrapperLogin>
      <ContainerLogin>
        <Form>
          <ContainerInputs>
            <div>
              <TextInput>
                <h2>Ingresa al Club de Cannabis</h2>
              </TextInput>
              <Separator />
            </div>
            <div style={{ width: "100%" }}>
              <TextInput>Email</TextInput>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />{" "}
              <Separator />
              <TextInput>Contraseña</TextInput>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </ContainerInputs>
          <TextInput style={{ color: "white" }}>
            {error?.response?.data?.error || error}
          </TextInput>
          <ContainerButtons>
            <Button onClick={(e: any) => handleSubmit(e)}>Ingresar</Button>
            <Button onClick={(e: any) => backToHome(e)}>Volver</Button>
          </ContainerButtons>
        </Form>
      </ContainerLogin>
    </WrapperLogin>
  );
}
