import { createSlice } from "@reduxjs/toolkit"

export const getUserInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        userInfo: [],
       
    },
    reducers: {
        setUserInfo: (state, action) => {
            return {
                ...state,
                userInfo: action.payload
            }
        }
       
    }
})
