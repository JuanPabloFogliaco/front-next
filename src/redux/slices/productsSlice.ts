import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetProductsAPI } from "../../pages/api/products";
import { RootState } from "../store";

export type IProductsAsync = {
  email: string;
  password: string;
};

interface InShop {
  count: number;
  name: string;
}

export type ProductsState = {
  error: any;
  loading: boolean;
  data: [];
  inShop: Array<InShop>;
  notification: boolean;
};

const initialState: ProductsState = {
  error: "",
  loading: false,
  data: [],
  inShop: [],
  notification: false,
};

export const GetProductsAsync = createAsyncThunk("products", async () => {
  const response = await GetProductsAPI();
  return response;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    incrementProduct: (state, action) => {
      const { name, count } = action.payload;

      const itemIndex = state.inShop.findIndex((item) => item.name === name);

      if (itemIndex === -1) {
        state.inShop.push({ count, name });
        state.notification = true;
      } else {
        state.inShop[itemIndex].count += count;
        state.notification = true;
      }
    },
    decrementProduct: (state, action) => {
      const { count, name } = action.payload;
      const itemIndex = state.inShop.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        state.inShop[itemIndex].count -= count;

        if (state.inShop[itemIndex].count <= 0) {
          state.inShop.splice(itemIndex, 1);
        }
      }
    },
    setNotificationProduct: (state, action) => {
      state.notification = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setInShop: (state) => {
      state.inShop = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;

        if (action.payload?.response?.status === 401) {
          state.error = action.payload?.response?.data;
        }
      })
      .addCase(GetProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectTotalCount = (state: RootState) =>
  state.products.inShop.reduce((total, item) => total + item.count, 0);

export const {
  incrementProduct,
  decrementProduct,
  setNotificationProduct,
  setError,
  setInShop,
} = productsSlice.actions;

export default productsSlice.reducer;
