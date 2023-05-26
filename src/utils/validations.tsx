import { ILoginAsync } from "../pages/api/login";
import { IRegisterAsync } from "../pages/api/register";

export const validateDataRegister = (a: IRegisterAsync) => {
  const { email, password, username } = a;

  if (email === "" && password !== "" && username !== "") {
    return "Debes ingresar un email.";
  }

  if (email !== "" && password === "" && username !== "") {
    return "Debes ingresar una contraseña.";
  }

  if (email !== "" && password !== "" && username === "") {
    return "Debes ingresar un nombre de usuario.";
  }

  if (email === "" && password === "" && username === "") {
    return "Los campos estan vacios";
  }

  if (email === "" || password === "" || username === "") {
    return "faltan campos";
  }

  if (email !== "" && password !== "" && username !== "") {
    return "";
  }
};

export const validateDataLogin = (a: ILoginAsync) => {
  const { email, password } = a;

  if (email === "" && password !== "") {
    return "Debes ingresar un email.";
  }

  if (email !== "" && password === "") {
    return "Debes ingresar una contraseña.";
  }

  if (email === "" && password === "") {
    return "Los campos estan vacios";
  }

  if (email !== "" && password !== "") {
    return "";
  }
};
