import { useAppSelector } from "../../redux/hooks";
import {
  IRegisterAsync,
  RegisterAsync,
  setEmail,
  setError,
  setPassword,
  setUserName,
} from "../../redux/slices/registerSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { validateDataRegister } from "../../utils/validations";
import { ContainerLogin, WrapperLogin } from "./style";
import FormComponent from "../../components/formComponent";
import { LoadingComponent } from "../../components/loadingComponent";

export default function RegisterFeature() {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const error = useAppSelector((state) => state.register.error);
  const email = useAppSelector((state) => state.register.email);
  const password = useAppSelector((state) => state.register.password);
  const username = useAppSelector((state) => state.register.username);
  const isLogged = useAppSelector((state) => state.register.isLogged);
  const loading = useAppSelector((state) => state.register.loading);

  const handleEmailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(setEmail(event.target.value));
  };

  const handleUserNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(setUserName(event.target.value));
  };

  const handlePasswordChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(setPassword(event.target.value));
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
      {!loading && (
        <ContainerLogin>
          <FormComponent
            handleEmailChange={(e) => handleEmailChange(e)}
            handleUserNameChange={(e) => handleUserNameChange(e)}
            handlePasswordChange={(e) => handlePasswordChange(e)}
            handleSubmitChange={(e) => handleSubmit(e)}
            backToPage={(e) => backToHome(e)}
            error={error}
            values={{ email: email, password: password, username: username }}
            isRegister={true}
          />
        </ContainerLogin>
      )}
      {loading && <LoadingComponent />}
    </WrapperLogin>
  );
}
