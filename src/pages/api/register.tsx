import axios from "axios";

export type IRegisterAsync = {
  email: string;
  password: string;
  username: string;
};

export const RegisterAPI = async (request: IRegisterAsync) => {
  try {
    const { email, password, username } = request;
    const response = await axios.post("http://31.220.60.102:8080/auth/register", {
      email,
      password,
      username,
    });
    if (response.data.accessToken) {
      localStorage.setItem("access_token", response.data.accessToken);
      return;
    }
    if (response.data.error) {
      return response.data.error;
    }
  } catch (error: any) {
    return error;
  }
};
