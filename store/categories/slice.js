import { createSlice } from "@reduxjs/toolkit"

export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categoryList: null,
        subcategoryList: null,
        nextcategoryList: null,
    },
    reducers: {
        setCategory: (state, action) => {
            return {
                ...state,
                categoryList: action.payload
            }
        }, 
        setSubCategory: (state, action) => {
            return {
                ...state,
                subcategoryList: action.payload
            }
        }, 
        setNextCategory: (state, action) => {
            return {
                ...state,
                nextcategoryList: action.payload
            }
        }, 
        setCurrency: (state, action) => {
            return {
                ...state,
                currencyList: action.payload
            }
        } 
    }
})
