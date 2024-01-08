import { REQT,SUCC,EROR } from "../action/postAction";


export const getUserList2 = () => async dispatch => {
    
    dispatch(REQT());
    
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();

      dispatch(SUCC(data));

    } catch (err) {
      dispatch(EROR(err.message));
    }
  }