const initialState = {

  data :[],
  isLoading : false,
  error : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'REQT':
    return { ...state, isLoading :true }

  case 'SUCC':
    return { ...state, data : payload ,isLoading :false }

  case 'EROR':
    return { ...state, data:payload, isLoading :false }

  default:
    return state
  }
}