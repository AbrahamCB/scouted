import { getUserInfoSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = getUserInfoSlice;

export const setUserInfo = (id) => (dispatch) => {

  getData(`/user/info/${id}`)
  .then(response=>dispatch(slice.setUserInfo(response)))
}

