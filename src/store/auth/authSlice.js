import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // *not-authenticated, authenticated, checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: ( state, { payload } ) => {
      state.status = 'authenticated'; // *not-authenticated, authenticated, checking
      state.uid= payload.uid;
      state.email= payload.email;
      state.displayName= payload.displayName;
      state.photoURL= payload.photoURL;
      state.errorMessage= payload.errorMessage;
    
    },
    logout: ( state, payload ) => {
      state.status = 'not-authenticated'; // *not-authenticated, authenticated, checking
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoURL= null;
      state.errorMessage= payload.errorMessage;
    
    },
    checkingCredentials: (state) => {
      state.status= 'checking'
    }
  },
})

// Action creators are generated for each case reducer function
export const { checkingCredentials, login, logout } = authSlice.actions

export default authSlice.reducer