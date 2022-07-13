import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

const providersCollectionref = collection(firestore, 'providers');
const initialState = {
  data: [],
  isLoading: false,
};

export const ProviderSlice = createSlice({
  name: 'providers',
  initialState: initialState,
  reducers: {
    logOut: (state, actions) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.clear();
    },
    loadProviders: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadProviders } = ProviderSlice.actions;

export default ProviderSlice.reducer;
