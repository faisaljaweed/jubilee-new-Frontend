import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
  user: null | {
    id: string;
    name?: string;
    email?: string;
  };
};

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; user?: AuthState["user"] }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      if (action.payload.user !== undefined) state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
