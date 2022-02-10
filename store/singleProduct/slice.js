import { createSlice } from "@reduxjs/toolkit"

export const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: {
        productItem: {},
      
    },
    reducers: {
        setSingleProduct: (state, action) => {
            return {
                ...state,
                productItem: action.payload
            }
        }, 
       
    }
})
