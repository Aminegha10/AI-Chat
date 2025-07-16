import { configureStore } from "@reduxjs/toolkit";
import { prompt } from "./prompt";

export const store = configureStore({
  reducer: {
    [prompt.reducerPath]: prompt.reducer, // RTK Query API for Favorites
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prompt.middleware),
});
