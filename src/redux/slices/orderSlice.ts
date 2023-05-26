import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InsertOrderBudsAPI } from "../../pages/api/order";

interface IPostOrderAsync {
  userEmail: string;
  order: Array<IOrderBuds>;
}

interface IOrderBuds {
  name: string;
  count: number;
}

interface IInitalStateOrder {
  error: any;
  loading: boolean;
}

const initialState: IInitalStateOrder = {
  error: "",
  loading: false,
};

export const PostOrderAsync = createAsyncThunk(
  "order",
  async (request: IPostOrderAsync) => {
    const response = await InsertOrderBudsAPI(request);
    return response;
  }
);

export const OrderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostOrderAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(PostOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(PostOrderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = OrderSlice.actions;

export default OrderSlice.reducer;
