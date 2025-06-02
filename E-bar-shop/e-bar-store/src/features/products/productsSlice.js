
import { fetchProducts } from "@/api/apis";
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState:{
        products:[],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state)=>{
          state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.error=null;
          state.products = action.payload;
          })
        .addCase(fetchProducts.rejected, (state, action) => {
         state.error ='Failed to fetch products';
         state.products = [];
         state.loading= false;
          });
    },
});

export { fetchProducts };
export default productsSlice.reducer;