import { createSlice } from "@reduxjs/toolkit";
import { memory } from "../../utility/memory";

const auth = memory.get("auth");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: auth?.token || null,
    user: auth?.user || null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      memory.set("auth", payload);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      memory.remove("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
