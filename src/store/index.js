import { configureStore ,createSlice } from "@reduxjs/toolkit";
import { stack } from "./stakes";
import { HealthProjectSlice } from "./project"; 
import { CarbonXProjectSlice } from "./project";  
import { Hackathon1Reducer } from "./Hackathon";
import { Hackathon2Reducer } from "./Hackathon";

export const store = configureStore({
  reducer: {

   storeStack:stack.reducer ,
    HealthProjectSlice : HealthProjectSlice.reducer,
    CarbonXProjectSlice : CarbonXProjectSlice.reducer,
    Hackathon1 : Hackathon1Reducer,
    Hackathon2 : Hackathon2Reducer
  },
});