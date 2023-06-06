import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InsertOrderProductsAPI } from "../../pages/api/order";

interface IPostOrderAsync {
  userEmail: string;
  order: Array<IOrderProducts>;
}

interface IOrderProducts {
  name: string;
  count: number;
}

interface IInitalStateOrder {
  error: any;
  succesOrder: any;
  loading: boolean;
}

const initialState: IInitalStateOrder = {
  error: "",
  succesOrder: "",
  loading: false,
};

export const PostOrderAsync = createAsyncThunk(
  "order",
  async (request: IPostOrderAsync) => {
    const response = await InsertOrderProductsAPI(request);
    return response;
  }
);

export const OrderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    setSuccesOrder: (state) => {
      state.succesOrder = "";
    },
    setErrorOrder: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PostOrderAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(PostOrderAsync.fulfilled, (state, action) => {
        state.loading = false;

        state.succesOrder = action.payload;
        state.error = "";

        if (action.payload?.response?.status === 404) {
          console.log("404 ----->", action.payload?.response?.data?.message);
          state.error = action.payload?.response?.data?.message;
        }
      })
      .addCase(PostOrderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSuccesOrder, setErrorOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
