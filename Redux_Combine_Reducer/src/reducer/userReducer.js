const initialState = {

    data : [],
    isLoadding : false,
    error : {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
  
    case 'REQUEST':
      return { ...state, isLoading : true }
  
    case 'SUC':
      return {...state, isLoading : false, data: payload}
  
    case 'ERO':
      return {...state,isLoading: false, data:payload}
  
    default:
      return state
    }
}
