import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../pages/api/user";

export type IUserAsync = {
  email: string;
  password: string;
};

export type UserState = {
  error: any;
  loading: boolean;
  data: [];
};

const initialState: UserState = {
  error: "",
  loading: false,
  data: [],
};

export const UserAsync = createAsyncThunk("user", async (email: string, thunkAPI) => {
  const response = await UserAPI(email);
  return response;
});

export const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(UserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = "";
      });
  },
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
