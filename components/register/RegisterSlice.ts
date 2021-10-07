import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  auth: { username: string; email: string; password: string };
}

const initialState: AuthState = {
  auth: {
    username: '',
    email: '',
    password: '',
  },
};

const registerSlice = createSlice({
  name: 'auth',
  reducers: {},
});

export const {} = registerSlice.actions;
export default registerSlice.reducer;
