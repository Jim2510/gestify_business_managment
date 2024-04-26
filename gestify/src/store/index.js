import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productsSlice from "./slices/productsSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    prods: productsSlice,
  },
});
