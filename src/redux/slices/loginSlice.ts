import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginAPI } from "../../pages/api/login";

export type ILoginAsync = {
  email: string;
  password: string;
};

export type LoginState = {
  error: any;
  loading: boolean;
  password: string;
  email: string;
  isLogged: boolean;
};

const initialState: LoginState = {
  error: "",
  loading: false,
  password: "",
  email: "",
  isLogged: false,
};

export const LoginAsync = createAsyncThunk(
  "auth/login",
  async (request: ILoginAsync, thunkAPI) => {
    const response = await LoginAPI(request);
    return response;
  }
);

export const LoginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoggedLogin: (state, action) => {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginAsync.pending, (state) => {
        state.loading = true;
        state.isLogged = false;
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.email = "";
        state.password = "";
        state.isLogged = true;
      })
      .addCase(LoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLogged = false;
      });
  },
});

export const { setEmail, setPassword, setError, setIsLoggedLogin } =
  LoginSlice.actions;

export default LoginSlice.reducer;
