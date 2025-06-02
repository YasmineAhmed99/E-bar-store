
import api from "./axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const response = await api.get('e-bar-store');
    return response.data.ECommerceBars;
})

export const updateCart = createAsyncThunk("cart/updateCart", async({bar_id, action})=>{
   const response = await api.post('/cart/store', {bar_id, action});
     return response.data.status;

})

export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async()=>{
          const response = await api.get('/cart/index');
          return response.data.Cart.items;
})

export const fetchCartPrices = createAsyncThunk("cart/fetchCartPrices", async()=>{
        const response = await api.get('/cart/prices');
        return response.data.Cart.prices;
})

export const clearCart = createAsyncThunk("cart/clearCart", async()=>{
        const response = await api.get('/cart/clear-cart');
        return response.data;
})
