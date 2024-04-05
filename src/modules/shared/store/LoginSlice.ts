import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loggedIn: (localStorage.getItem('loggedIn') === 'false')? false : true, // Check local storage
  };
const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = LoginSlice.actions;
export const selectLoggedIn = (state:any) => state.login.loggedIn;
export default LoginSlice.reducer;
