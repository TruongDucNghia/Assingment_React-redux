import { configureStore } from '@reduxjs/toolkit';
import CategorySlice from '../features/CategorySlice';
export const store = configureStore({
  reducer: {
    category: CategorySlice
  },
});
