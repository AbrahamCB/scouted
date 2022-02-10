import { createSlice } from "@reduxjs/toolkit"

export const stateSlice = createSlice({
    name: "states",
    initialState: {
        statesList: null,

    },
    reducers: {
        setStates: (state, action) => {
            return {
                ...state,
                statesList: action.payload
            }
        },

    }
})
