
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice';


const store = configureStore({
    reducer:{
      productsData: productsReducer,
      cartData: cartReducer
    }
})

export default store; 