import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const UserAPI = async (email: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}/user?email="${email}`,

      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );
    if (response.data.error) {
      return response.data.error;
    }
    return response.data;
  } catch (error: any) {
    return error;
  }
};
