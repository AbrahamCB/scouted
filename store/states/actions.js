import { getData } from "../../__lib__/helpers/HttpService";
import { stateSlice } from "./slice";
const { actions: slice } = stateSlice;

export const setStates = (countryId) => (dispatch) => {
  getData(`/states/${countryId}`)
    .then(response => dispatch(slice.setStates(response)))
}
