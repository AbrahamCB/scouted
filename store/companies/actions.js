import { getData } from "../../__lib__/helpers/HttpService";
import { companySlice } from "./slice";
const { actions: slice } = companySlice;

export const setCompanies = () => (dispatch) => {
  getData('/companies')
    .then(response => dispatch(slice.setCompanies(response)))
}
