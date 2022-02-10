import { getData } from "../../__lib__/helpers/HttpService";
import { countrySlice } from "./slice";
const { actions: slice } = countrySlice;

export const setCountries = () => (dispatch) => {
  getData('/countries')
    .then(response => dispatch(slice.setCountries(response)))
}
