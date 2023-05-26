import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface IPostOrderAsync {
  userEmail: string;
  order: Array<IOrderBuds>;
}

interface IOrderBuds {
  name: string;
  count: number;
}

export const InsertOrderBudsAPI = async (request: IPostOrderAsync) => {
  try {
    const response = await axios.post(`${apiUrl}/order`, request, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    if (response.data.error) {
      return response.data.error;
    }
    return response.data;
  } catch (error: any) {
    return error;
  }
};
