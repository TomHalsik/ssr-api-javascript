import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: any;
}

const initialState: UserState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, user) => {
      state.value = user;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
