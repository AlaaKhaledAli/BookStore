import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthApiSlice } from "../AuthModule/AuthApiSlice/AuthApiSlice";
import authReducer from "../AuthModule/AuthApiSlice/AuthApiSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [AuthApiSlice.reducerPath]: AuthApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApiSlice.middleware),
});
setupListeners(store.dispatch)
