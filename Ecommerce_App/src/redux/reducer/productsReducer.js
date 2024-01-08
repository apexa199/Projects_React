import { ActionTypes } from "../contants/actionFile"

const initialState = {

  products :[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ActionTypes.SET_PRODUCTS:
    return {...state, products : payload} 

  default:
    return state
  }
}

