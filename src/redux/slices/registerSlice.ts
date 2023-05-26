import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterAPI } from "../../pages/api/register";

export type IRegisterAsync = {
  email: string;
  password: string;
  username: string;
};

export type RegisterState = {
  error: any;
  loading: boolean;
  password: string;
  email: string;
  username: string;
  isLogged: boolean;
};

const initialState: RegisterState = {
  error: "",
  loading: false,
  password: "",
  email: "",
  username: "",
  isLogged: false
};

export const RegisterAsync = createAsyncThunk(
  "auth/register",
  async (request: IRegisterAsync, thunkAPI) => {
    const response = await RegisterAPI(request);
    return response;
  }
);

export const RegisterSlice = createSlice({
  name: "register",
  initialState,

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoggedRegister: (state, action) => {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterAsync.pending, (state) => {
        state.loading = true;
        state.isLogged = false;
      })
      .addCase(RegisterAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.email = "";
        state.password = "";
        state.username = "";
        state.isLogged = true;
      })
      .addCase(RegisterAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLogged = false;
      });
  },
});

export const { setEmail, setPassword, setUserName, setError, setIsLoggedRegister } =
  RegisterSlice.actions;

export default RegisterSlice.reducer;
