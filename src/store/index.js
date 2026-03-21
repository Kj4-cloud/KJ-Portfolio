import { configureStore ,createSlice } from "@reduxjs/toolkit";
import { stack } from "./stakes";

export const store = configureStore({
  reducer: {

   storeStack:stack.reducer ,


  },
});