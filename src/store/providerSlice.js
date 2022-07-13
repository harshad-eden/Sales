import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
const providersCollectionref = collection(firestore, 'providers');
const initialState = {
  data: [],
  isLoading: false,
};

export const loadProviders = createAsyncThunk('user/getUser', async () => {
  var providers = [];
  await getDocs(providersCollectionref).then((snap) => {
    snap.forEach((doc) => {
      providers = [...providers, { ...doc.data(), id: doc.id }];
    });
  });
  return providers;
});

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
  extraReducers(builder) {
    builder.addCase(loadProviders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadProviders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(loadProviders.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default ProviderSlice.reducer;
