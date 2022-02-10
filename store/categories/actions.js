import { categorySlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = categorySlice;

export const setCategory = () => (dispatch) => {
  getData('/categories')
  .then(response=>dispatch(slice.setCategory(response)))
}

export const setSubCategory = () => (dispatch) => {
  getData('/subcategories')
  .then(response=>dispatch(slice.setSubCategory(response)))
}

export const setNextCategory = () => (dispatch) => {
  getData('/nextcategories')
  .then(response=>dispatch(slice.setNextCategory(response)))
}
export const setCurrency = () => (dispatch) => {
  getData('/currencies')
  .then(response=>dispatch(slice.setCurrency(response)))
}
