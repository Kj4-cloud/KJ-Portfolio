import { createSlice } from "@reduxjs/toolkit";

export const HealthProjectSlice = createSlice({

  name : "healthProject",
  initialState : {
    Year : 2023,
    Title : "Health Record Management System",
      Role : "Lead Developer",
    Scale : "34 commits in 3 months",
    Description : "A comprehensive health record management system that enables healthcare providers to securely store, manage, and access patient records. The system facilitates efficient patient care by providing features such as appointment scheduling, medical history tracking, prescription management, and secure data sharing among authorized personnel.",
    Technologies : ["React Native", "Redux", "Node.js", "Express", "MongoDB"],
    Github : "https://github.com/Kj4-cloud/Health-Record-Manager",
    Link:"https://github.com/Kj4-cloud/Health-Record-Manager",
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
    Description : "Carbon X is a blockchain-based carbon credit trading platform that verifies farmland using satellite NDVI analysis and issues secure digital credits. Farmers earn income by adopting sustainable practices, while companies purchase verified credits to offset emissions through a transparent, tamper-proof marketplace",
    Technologies : ["React", "Supabase", "PostgreSQL"],
    Github : "https://github.com/",
    Link:"https://carbon-x-pi.vercel.app/"
  },
  reducers : {  }
});

export const HealthProjectSliceReducer = HealthProjectSlice.reducer;
export const CarbonXProjectSliceReducer = CarbonXProjectSlice.reducer;