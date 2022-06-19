import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './store-slices/counter-slice';
import authReducer from './store-slices/auth-slice';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
