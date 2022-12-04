import { setUser } from "../redux/userSlice";
import { store } from "../redux/store";

export const setTheUser = (data) => {
  store.dispatch(setUser(data));
};
