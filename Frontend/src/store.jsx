import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from './slices/User/signupSlice'

const store = configureStore({
    reducer:{
        signedDataShow:signupSliceReducer
    }
})

export default store