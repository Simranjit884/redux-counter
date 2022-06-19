import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
