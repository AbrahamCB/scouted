import { createSlice } from "@reduxjs/toolkit"

export const timezoneSlice = createSlice({
    name: "timezones",
    initialState: {
        zonesList: [],
        isLoading: true
    },
    reducers: {
        setTimezones: (state, action) => {
            return {
                ...state,
                zonesList: action.payload,
                isLoading: false
            }
        },

    }
})
