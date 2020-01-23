import { setLoading, onError } from '../Login/login.action';

export const GET_DASHBOARD_DATA = 'GET_DASHBOARD_DATA';
export const GET_FAMILIES_DATA = 'GET_FAMILIES_DATA';
export const GET_INDIVIDUALS_DATA = 'GET_INDIVIDUALS_DATA';
export const GET_CAMPS_DATA = 'GET_CAMPS_DATA';

export const getDashboard = payload => ({
  type: GET_DASHBOARD_DATA,
  payload
});

export const getFamilies = payload => ({
  type: GET_FAMILIES_DATA,
  payload
});
export const getIndividuals = payload => ({
  type: GET_INDIVIDUALS_DATA,
  payload
});
export const getCamps = payload => ({
  type: GET_CAMPS_DATA,
  payload
});

export const clearErr = payload => ({
  type: 'CLEAR_ERROR',
  payload
});

export const getDashboardData = request => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get('/aggregate');
    dispatch(getDashboard(response.data.data));
    dispatch(setLoading(false));
    return;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};
export const getFamiliesData = (request, pageNum) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get(`/families?pageNum=${pageNum}`);
    dispatch(getFamilies(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export const getIndividualsData = (request, pageNum) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get(`/candidates?pageNum=${pageNum}`);
    dispatch(getIndividuals(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export const getCampsData = request => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.get('/camps');
    dispatch(getCamps(response.data));
    dispatch(setLoading(false));
    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

// export const getFilterData = request => async dispatch => {
//   try {
//     dispatch(setLoading(true));
//     const response = await request.get('/');
//   } catch (err) {
//     dispatch(setLoading(false));
//     dispatch(onError(err));
//   }
// };

export const clearErrorsAction = () => async dispatch => {
  dispatch(clearErr({}));
  return;
};
