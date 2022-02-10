import { getData } from "../../__lib__/helpers/HttpService";
import { jobsSlice } from "./slice";
const { actions: slice } = jobsSlice;

export const setJobs = () => (dispatch) => {
  getData('/jobs')
    .then(response => dispatch(slice.setJobs(response)))
}
