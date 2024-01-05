const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'REQ':
    return { ...state, ...payload }

  default:
    return state
  }
}