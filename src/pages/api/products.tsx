import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

export const GetProductsAPI = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    if (response.data.error) {
      return response.data.error;
    }
    console.log(response.data)
    return response.data;
  } catch (error: any) {
    return error;
  }
};
