import { createSlice } from "@reduxjs/toolkit";

export const Hackathon1 = createSlice({

  name : "Hackathon1",
  initialState : {
    Year : 2023,
    Title : "Health Record Management System",
    Image : "/HackathonsImages/Carbonx.png",
    Description : "",
    Link : "",
    Github : ""
},

reducers : {  }
  
});

export const Hackathon2 = createSlice({
  name : "Hackathon2",
  initialState : {
    Year : 2023,
    Title : "Health Record Management System",
    Image : "/HackathonsImages/Healthx.png",
    Description : "",
    Link : "",
    Github : ""
  },
  reducers : {  }
});

export const Hackathon1Reducer = Hackathon1.reducer;
export const Hackathon2Reducer = Hackathon2.reducer;