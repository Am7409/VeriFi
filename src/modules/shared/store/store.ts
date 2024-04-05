import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    user: UserSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
