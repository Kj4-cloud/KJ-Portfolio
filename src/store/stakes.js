import { configureStore, createSlice } from "@reduxjs/toolkit";

export const stack = createSlice({
  name: "stack",
  initialState: {
    Backend: [
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "PostgreSQL",
      "REST APIs",
    ],
    
    Frontend: [
      " React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      " Zustand ",
      "React Query",
    ],

    Devops: ["Docker", "Kubernetes", "Jenkins", "vercel", "AWS"],

    Tools: ["Git", "GitHub", "Visual Studio Code"],
  } ,

  reducers: {},
});

export const stackSliceReducer = stack.reducer;
