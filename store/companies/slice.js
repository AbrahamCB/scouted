import { createSlice } from "@reduxjs/toolkit"

export const companySlice = createSlice({
    name: "companies",
    initialState: {
        companyList: [],
        isLoading: true

    },
    reducers: {
        setCompanies: (state, action) => {
            return {
                ...state,
                companyList: action.payload,
                isLoading: false
            }
        },

    }
})
