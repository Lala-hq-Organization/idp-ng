import { setLoading, onError } from './login.action';

const logout = payload => ({
  type: 'USER_LOGOUT',
  payload
});

const logoutActionCreator = (
  request,
  navigateToLandingPage
) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await request.post('auth/logout');
    dispatch(logout(response.data));
    dispatch(setLoading(false));
    navigateToLandingPage();
    return;
  } catch (err) {
    dispatch(setLoading(false));
    return dispatch(onError(err));
  }
};

export default logoutActionCreator;
