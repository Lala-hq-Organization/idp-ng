import {
  GET_DASHBOARD_DATA,
  GET_FAMILIES_DATA,
  GET_INDIVIDUALS_DATA,
  GET_CAMPS_DATA
} from './data.action';

export const initialState = {
  dashboard: [],
  families: {},
  individuals: {},
  camps: []
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case GET_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: action.payload
      };
    case GET_FAMILIES_DATA:
      return {
        ...state,
        families: action.payload
      };
    case GET_INDIVIDUALS_DATA:
      return {
        ...state,
        individuals: action.payload
      };
    case GET_CAMPS_DATA:
      return {
        ...state,
        camps: action.payload
      };

    case 'USER_LOGOUT':
      return {
        ...initialState
      };
    default:
      return state;
  }
}
