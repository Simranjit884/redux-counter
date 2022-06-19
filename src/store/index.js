import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from './store-slices/counter-slice';

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

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSlice.reducer },
});


export const authActions = authSlice.actions;

export default store;
