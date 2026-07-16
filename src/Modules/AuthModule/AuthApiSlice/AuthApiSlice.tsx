import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { createSlice } from "@reduxjs/toolkit";
import type { LoginFormData } from '../../../Constants/LoginFormData/LoginFormData';
import type {RegisterFormData} from '../../../Constants/RegisterFormData/RegisterFormData';
export const AuthApiSlice=createApi({
    reducerPath:"AuthApiSlice",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://reqres.in/api/",
        prepareHeaders: (headers) => {
      headers.set('x-api-key', 'pub_c73a8affb886b7fc07740bc3a22acbe3');
      return headers;
},
    }),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(credentials:LoginFormData)=>({
                url:"login",
                method:"POST",
                body:credentials
            })
        })
        ,
        register:builder.mutation({
            query:(credentials:RegisterFormData)=>({
                url:"register",
                method:"POST",
                body:credentials
            })
        })
    })
})
interface LoginResponse{
    token: string,
}
interface AuthState{
    accessToken: string | null,
    user: any | null,
}
interface RootState{
    auth: AuthState,
}
const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    user: null,
  } as AuthState, 
  reducers: {
    setCredentials: (state, { payload }: { payload: AuthState }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    clearCredentials: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { useLoginMutation, useRegisterMutation } = AuthApiSlice;
export const { setCredentials, clearCredentials } = authSlice.actions;
export const selectAccessToken = (state: RootState) => state.auth.accessToken; 
export const selectUser = (state: RootState) => state.auth.user;               
export default authSlice.reducer;