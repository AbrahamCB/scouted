import { createSlice } from "@reduxjs/toolkit"

export const companySlice = createSlice({
    name: "companies",
    initialState: {
        companyList: null,

    },
    reducers: {
        setCompanies: (state, action) => {
            return {
                ...state,
                companyList: action.payload
            }
        },

    }
})
