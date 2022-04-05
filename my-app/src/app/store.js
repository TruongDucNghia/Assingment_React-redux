import { configureStore } from '@reduxjs/toolkit';
import CategorySlice from '../features/CategorySlice';
import ProductSlice from '../features/ProductSlice';
export const store = configureStore({
  reducer: {
    category: CategorySlice,
    product: ProductSlice
  },
});
