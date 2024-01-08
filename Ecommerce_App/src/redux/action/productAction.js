import {  ActionTypes} from '../contants/actionFile'

export const setProducts = (payload) => ({
  type : ActionTypes.SET_PRODUCTS,
  payload : payload
})

export const selectedProducts = (payload) => ({
  type : ActionTypes.SELECTED_PRODUCT,
  payload : payload
})

