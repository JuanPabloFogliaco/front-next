import axios from "axios";

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
    const response = await axios.post("http://31.220.60.102:8080/order", request, {
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
