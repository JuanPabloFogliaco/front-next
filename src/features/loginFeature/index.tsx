import { useAppSelector } from "../../redux/hooks";
import {
  LoginAsync,
  setEmail,
  setError,
  setPassword,
} from "../../redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ILoginAsync } from "../../interfaces";
import { validateDataLogin } from "../../utils/validations";
import { ContainerLogin, WrapperLogin } from "./style";
import FormComponent from "../../components/formComponent";
import { LoadingComponent } from "../../components/loadingComponent";

export default function LoginFeature() {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const error = useAppSelector((state) => state.login.error);
  const email = useAppSelector((state) => state.login.email);
  const password = useAppSelector((state) => state.login.password);
  const isLogged = useAppSelector((state) => state.login.isLogged);
  const loading = useAppSelector((state) => state.login.loading);

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
      {!loading && (
        <ContainerLogin>
          <FormComponent
            handleEmailChange={(e) => handleEmailChange(e)}
            handlePasswordChange={(e) => handlePasswordChange(e)}
            handleSubmitChange={(e) => handleSubmit(e)}
            backToPage={(e) => backToHome(e)}
            error={error}
            values={{ email: email, password: password }}
            isRegister={false}
          />
        </ContainerLogin>
      )}
      {loading && <LoadingComponent />}
    </WrapperLogin>
  );
}
