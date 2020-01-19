import SupportHeader from '../../SupportHeader';
export const USER_LOGIN = 'USER_LOGIN';
const login = payload => ({
  type: USER_LOGIN,
  payload
});

export const setLoading = payload => ({
  type: 'LOADING',
  payload
});
export const onError = payload => ({
  type: 'SET_ERROR',
  payload
});

export const onAuth = payload => ({
  type: 'SET_AUTH',
  payload
});

const loginBoundActionCreator = (
  data,
  request,
  navigateToDashboard
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post(
      '/auth/login',
      data,
      SupportHeader({ 'Content-type': `application/json` })
    );

    dispatch(login(response.data.data));
    dispatch(setLoading(false));
    navigateToDashboard();

    return response.data;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export const authAction = request => async dispatch => {
  try {
    const response = await request.post('/auth/me');

    dispatch(onAuth(response.data.data));
  } catch (err) {
    return dispatch(onError(err));
  }
};

export default loginBoundActionCreator;
