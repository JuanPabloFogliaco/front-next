import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

export type IRegisterAsync = {
  email: string;
  password: string;
  username: string;
};

export const RegisterAPI = async (request: IRegisterAsync) => {
  try {
    const { email, password, username } = request;
    const response = await axios.post(`${apiUrl}/auth/register`, {
      email,
      password,
      username,
    });
    if (response.data.accessToken) {
      localStorage.setItem("access_token", response.data.accessToken);
      localStorage.setItem("email", email);
      return;
    }
    if (response.data.error) {
      return response.data.error;
    }
  } catch (error: any) {
    return error;
  }
};
