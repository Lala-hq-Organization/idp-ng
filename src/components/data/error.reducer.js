export const initialState = {
  error: {}
};

export default function error(state = initialState, action) {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'USER_LOGOUT':
      return {
        ...initialState
      };
    case 'CLEAR_ERROR':
      return {
        error: action.payload
      };
    default:
      return initialState;
  }
}
//no news
