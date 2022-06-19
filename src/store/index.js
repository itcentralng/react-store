import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice';
import productSlice from './slices/productSlice';
const reducer = {
    cart: cartSlice,
    product:productSlice
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;