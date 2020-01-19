import { USER_LOGIN } from './login.action';

export const initialState = {
  loading: false,
  data: {},
  isLoggedIn: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        isLoggedIn: true
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        data: {},
        isLoggedIn: false
      };
    case 'SET_AUTH':
      return {
        ...state,
        data: { ...state.data, ...action.payload }
      };
    default:
      return state;
  }
}
