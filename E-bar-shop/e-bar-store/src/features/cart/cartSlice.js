
import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems, fetchCartPrices } from "@/api/apis";

 const cartSlice = createSlice({
    name:"cart", 
    initialState:{
      cart:[],
      loading: false,
      error: null,
      subtotal:"",
      total:""
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCartItems.pending,(state)=>{
          state.loading = true;
        }).addCase(fetchCartItems.fulfilled,(state, action)=>{
            state.loading= false;
            state.cart = action.payload;
            state.error = null
        }).addCase(fetchCartItems.rejected, (state) => {
             state.error ='Failed to fetch cart items';
             state.cart = [];
             state.loading= false;
        }).addCase(fetchCartPrices.fulfilled, (state,action)=>{
           state.subtotal = action.payload.gold_sub_total;
           state.total = action.payload.grand_total;
        })
    }
})

export {fetchCartItems, fetchCartPrices};
export default cartSlice.reducer;
