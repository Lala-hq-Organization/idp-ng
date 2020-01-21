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

export const setToken = payload => ({
  type: 'SET_TOKEN',
  payload
});

const loginBoundActionCreator = (
  data,
  request,
  navigateToDashboard
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post('/auth/login', data);
    await dispatch(login(response.data.data));
    await dispatch(setToken(response.data.data.token));
    await dispatch(setLoading(false));
    navigateToDashboard();

    return;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err.response.data));
  }
};

export default loginBoundActionCreator;
