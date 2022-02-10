import { getData } from "../../__lib__/helpers/HttpService";
import { timezoneSlice } from "./slice";
const { actions: slice } = timezoneSlice;

export const setTimezones = (countryId) => (dispatch) => {
  getData(`/timezones/${countryId}`)
    .then(response => dispatch(slice.setTimezones(response)))
}
