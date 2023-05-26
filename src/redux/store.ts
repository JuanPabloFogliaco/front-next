import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import registerSlice from "./slices/registerSlice";
import userSlice from "./slices/userSlice";
import budsSlice from "./slices/budsSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    user: userSlice,
    buds: budsSlice,
    order: orderSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
