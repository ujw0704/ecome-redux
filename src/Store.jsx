import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from "./Slice"

const store = configureStore({
    reducers :{
        ecommerce : ecommerceReducer
    }
})

export default store