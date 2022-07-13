import { configureStore } from '@reduxjs/toolkit';

import auth from './authSlice';
import providers from './providerSlice';

export const store = configureStore({
  reducer: {
    auth,
    providers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
