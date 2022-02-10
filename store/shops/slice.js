import { createSlice } from "@reduxjs/toolkit"

export const shopSlice = createSlice({
    name: "userInfo",
    initialState: {
        shopsItem: [],
        shopsItemLoading: true
    },
    reducers: {
        setShopItem: (state, action) => {
            return {
                ...state,
                
                shopsItem: action.payload,
                shopsItemLoading: false
            }
        }

    }
})
