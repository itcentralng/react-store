import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';
const reducer = {
    auth:authSlice,
    cart: cartSlice,
    product:productSlice,
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;