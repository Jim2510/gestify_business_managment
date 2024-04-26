import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/storageProducts";

const productsSlice = createSlice({
    name: 'prods',
    initialState: {
        value: products,
    },
    reducers: {

    }

})
export default productsSlice.reducer