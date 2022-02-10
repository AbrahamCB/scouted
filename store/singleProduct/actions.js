import { singleProductSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = singleProductSlice;

export const setSingleProduct = (id) => (dispatch) => {
  getData(`/product/${id}`)
  .then(response=>dispatch(slice.setSingleProduct(response)))
}
