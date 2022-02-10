import { shopSlice } from "./slice";
import { getData } from "../../__lib__/helpers/HttpService"
const { actions: slice } = shopSlice;

export const setShopItem = () => (dispatch) => {

  getData('/shops')
  .then(response=>dispatch(slice.setShopItem(response)))
}

