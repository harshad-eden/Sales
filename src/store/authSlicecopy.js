import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

const initialState = {
  token: typeof window !== 'undefined' && localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  me: null,
  error: null,
  appLoaded: false,
};

export const attachTokenToHeaders = (getState) => {
  // const token = getState().auth.token;
  let token = 'token';
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

export const loadMe = createAsyncThunk('user/getUser', async (arg, state) => {
  try {
    const options = attachTokenToHeaders(state);
    const response = await axios.get(baseUrl, options);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logOut: (state, actions) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(loadMe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadMe.fulfilled, (state, action) => {
      state.loading = false;
      state.token = 'token';
      state.appLoaded = true;
      state.isAuthenticated = true;
      localStorage.setItem('token', 'token');
    });
    builder.addCase(loadMe.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default AuthSlice.reducer;
