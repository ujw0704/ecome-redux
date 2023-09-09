import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from axios

export const getProduct = createAsyncThunk("fakeapi",async()=>{
    const response = await axios.get("https://fakeapi.it/api/vi/products")
    console.log(response)
})

export const ecomSlice = createSlice({
    
    name: "ecom",
    initialState :{
        products :[],
        isloading:false
    }
    

})