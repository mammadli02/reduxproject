

import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slice/colorSlice";
export const store = configureStore({
    reducer: {
      color:colorReducer
    },
  })