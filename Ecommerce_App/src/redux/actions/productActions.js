
import fakeStoreAPI from '../../APIs/fakeStoreAPI';
import {  ActionTypes} from '../contants/action-types'

export const fetchProducts = () => async(dispatch) => {
  const response = await fakeStoreAPI.get("/products");

    dispatch({type :ActionTypes.FETCH_PRODUCTS, 
      payload : response.data})
  };

  
export const fetchProduct = (id) => async(dispatch) => {
  const response = await fakeStoreAPI.get(`/products/${id}`);

  dispatch({type :ActionTypes.SELECTED_PRODUCT, 
    payload : response.data})
};


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};