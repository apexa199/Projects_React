import { ERO, REQUEST, SUC } from "../action/userAction";

export const getUserList = (page = 1) => async dispatch => {
    
    dispatch(REQUEST());
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();

      dispatch(SUC(data));

    } catch (err) {
      dispatch(ERO(err.message));
    }
  }