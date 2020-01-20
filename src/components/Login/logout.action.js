// import { setLoading, onError, setToken } from './login.action';

const logout = payload => ({
  type: 'USER_LOGOUT',
  payload
});

const logoutActionCreator = () => dispatch => {
  dispatch(logout());
};

export default logoutActionCreator;
