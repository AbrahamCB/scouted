import { createSlice } from "@reduxjs/toolkit"

export const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobList: null,

    },
    reducers: {
        setJobs: (state, action) => {
            return {
                ...state,
                jobList: action.payload
            }
        },

    }
})
