import axios from "axios";

export const GetBudsAPI = async () => {
  try {
    const response = await axios.get("http://localhost:8080/buds", {
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
