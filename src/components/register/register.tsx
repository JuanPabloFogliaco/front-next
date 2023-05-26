import { useRouter } from "next/router";
import {
  Button,
  ContainerButtons,
  ContainerInputs,
  ContainerRegister,
  Form,
  Input,
  Separator,
  TextInput,
  WrapperRegister,
} from "./stylesRegister";
import { IRegisterAsync } from "../../pages/api/register";
import {
  RegisterAsync,
  setEmail,
  setError,
  setPassword,
  setUserName,
} from "../../redux/slices/registerSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { validateDataRegister } from "../../utils/validations";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();

  const error = useAppSelector((state) => state.register.error);
  const email = useAppSelector((state) => state.register.email);
  const password = useAppSelector((state) => state.register.password);
  const username = useAppSelector((state) => state.register.username);

  const isLogged = useAppSelector((state) => state.register.isLogged);

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

  const handleUserNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(setUserName(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const a: IRegisterAsync = { email, password, username };
    const validate = validateDataRegister(a);
    if (validate === "") {
      dispatch(RegisterAsync(a));
    } else {
      dispatch(setError(validate));
    }
    if (isLogged) router.push("/home");
  };

  const backToHome = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(setPassword(""));
    await dispatch(setEmail(""));
    await dispatch(setUserName(""));
    await dispatch(setError(""));
    router.push("/");
  };

  const token =
    typeof window !== "undefined" && localStorage.getItem("access_token");
  if (isLogged && token) router.push("/home");

  return (
    <WrapperRegister>
      <ContainerRegister>
        <Form>
          <ContainerInputs>
            <div>
              <TextInput>
                <h2>Registrate al Club de Cannabis</h2>
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
              <Separator />
              <TextInput>Nombre de Usuario</TextInput>
              <Input
                type="username"
                id="username"
                value={username}
                onChange={handleUserNameChange}
              />
            </div>
          </ContainerInputs>
          <TextInput style={{ color: "white" }}></TextInput>
          <ContainerButtons>
            <Button onClick={(e: any) => handleSubmit(e)}>Ingresar</Button>
            <Button onClick={(e: any) => backToHome(e)}>Volver</Button>
          </ContainerButtons>
        </Form>
      </ContainerRegister>
    </WrapperRegister>
  );
}
