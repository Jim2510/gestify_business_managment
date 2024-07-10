import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/storageProducts";

const productsSlice = createSlice({
    name: 'prods',
    initialState: {
        value: [],
    },
    reducers: {
       
    }

})
export default productsSlice.reducer