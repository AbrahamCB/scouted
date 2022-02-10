import { getUserData } from "../../__lib__/helpers/HttpService";
import { messageSlice } from "./slice";
const { actions: slice } = messageSlice;

export const setMessages = (token) => (dispatch) => {
  getUserData('/contacts', token)
    .then(response => dispatch(slice.setMessages(response)))
}
