import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

export type ILoginAsync = {
  email: string;
  password: string;
};

export const LoginAPI = async (request: ILoginAsync) => {
  try {
    const { email, password } = request;
    const response = await axios.post(`http://31.220.60.102:8080/auth/login`, {
      email,
      password,
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
