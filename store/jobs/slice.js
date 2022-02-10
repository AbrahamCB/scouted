import { createSlice } from "@reduxjs/toolkit"

export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobList: [],
        isLoading: true

    },
    reducers: {
        setJobs: (state, action) => {
            return {
                ...state,
                jobList: action.payload,
                isLoading: false
            }
        },

    }
})
