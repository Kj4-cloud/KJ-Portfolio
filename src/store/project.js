import { createSlice } from "@reduxjs/toolkit";

export const HealthProjectSlice = createSlice({

  name : "healthProject",
  initialState : {
    Year : 2023,
    Title : "Health Tracker",
      Role : "Lead Developer",
    Scale : "34 commits in 3 months",
    Description : "A health tracking application that allows users to monitor their daily activities, set fitness goals, and track their progress over time. The app provides features such as step counting, calorie tracking, sleep monitoring, and personalized health insights.",
    Technologies : ["React Native", "Redux", "Node.js", "Express", "MongoDB"],
},

reducers : {  }
  
});

export const CarbonXProjectSlice = createSlice({
  name : "carbonXProject",
  initialState : {
    Year : 2022,
    Title : "Carbon X",
    Role : "Software Engineer",
    Scale : "15 commits in 2 months",
    Description : "A carbon footprint tracking application that helps users monitor and reduce their environmental impact through personalized recommendations and progress tracking.",
    Technologies : ["React", "Supabase", "PostgreSQL"],
  },
  reducers : {  }
});

export const HealthProjectSliceReducer = HealthProjectSlice.reducer;
export const CarbonXProjectSliceReducer = CarbonXProjectSlice.reducer;