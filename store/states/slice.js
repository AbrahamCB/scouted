import { createSlice } from "@reduxjs/toolkit"

export const stateSlice = createSlice({
    name: "states",
    initialState: {
        statesList: [],
        isLoading: true

    },
    reducers: {
        setStates: (state, action) => {
            return {
                ...state,
                statesList: action.payload,
                isLoading: false
            }
        },

    }
})
