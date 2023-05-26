import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetBudsAPI } from "../../pages/api/buds";
import { RootState } from "../store";

export type IBudsAsync = {
  email: string;
  password: string;
};

interface InShop {
  count: number;
  name: string;
}

export type BudsState = {
  error: any;
  loading: boolean;
  data: [];
  inShop: Array<InShop>;
  notification: boolean;
};

const initialState: BudsState = {
  error: "",
  loading: false,
  data: [],
  inShop: [],
  notification: false,
};

export const GetBudsAsync = createAsyncThunk("buds", async () => {
  const response = await GetBudsAPI();
  return response;
});

export const BudsSlice = createSlice({
  name: "buds",
  initialState,

  reducers: {
    incrementBud: (state, action) => {
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
    decrementBud: (state, action) => {
      const { count, name } = action.payload;
      const itemIndex = state.inShop.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        state.inShop[itemIndex].count -= count;

        if (state.inShop[itemIndex].count <= 0) {
          state.inShop.splice(itemIndex, 1);
        }
      }
    },
    setNotificationBud: (state, action) => {
      state.notification = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetBudsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetBudsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(GetBudsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = "";
      });
  },
});

export const selectTotalCount = (state: RootState) =>
  state.buds.inShop.reduce((total, item) => total + item.count, 0);

export const { incrementBud, decrementBud, setNotificationBud } =
  BudsSlice.actions;

export default BudsSlice.reducer;
