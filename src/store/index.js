import { configureStore ,createSlice } from "@reduxjs/toolkit";
import { stack } from "./stakes";
import { HealthProjectSlice } from "./project"; 
import { CarbonXProjectSlice } from "./project";  

export const store = configureStore({
  reducer: {

   storeStack:stack.reducer ,
    HealthProjectSlice : HealthProjectSlice.reducer,
    CarbonXProjectSlice : CarbonXProjectSlice.reducer
  },
});