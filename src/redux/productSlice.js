import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState={
    products:[],
    productStatus:STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
}
export const getProduct=createAsyncThunk('getproducts',async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    const data =response.json();
    return data;
})
export const getProductDetail=createAsyncThunk('getproduct',async(id)=>{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`)
    const data =response.json();
    return data;
})  
export const getProductCategory=createAsyncThunk('getproductcatwgory',async(category)=>{
    const response=await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data =response.json();
    return data;
}) 

const productSlice =createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state,action)=>{
            state.productStatus=STATUS.LOADİNG
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.productStatus=STATUS.SUCCESS
            state.products=action.payload
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.productStatus=STATUS.FAIL
        })
        .addCase(getProductCategory.pending,(state,action)=>{
            state.productStatus=STATUS.LOADİNG
        })
        .addCase(getProductCategory.fulfilled,(state,action)=>{
            state.productStatus=STATUS.SUCCESS
            state.products=action.payload
        })
        .addCase(getProductCategory.rejected,(state,action)=>{
            state.productStatus=STATUS.FAIL
        })
        .addCase(getProductDetail.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADİNG
        })
        .addCase(getProductDetail.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS
            state.productDetail=action.payload
        })
        .addCase(getProductDetail.rejected,(state,action)=>{
            state.productDetailStatus=STATUS.FAIL
        })
        
    }
});
export default productSlice.reducer;