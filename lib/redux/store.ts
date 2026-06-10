import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "@/lib/redux/features/auth/authSlice";
import { baseApi } from "@/lib/redux/services/baseApi";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // common in Next apps (dates, errors, etc.)
      }).concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

// Types
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
