import { combineReducers } from 'redux';
import user from './components/Login/user.reducer';
import data from './components/data/data.reducer';
import error from './components/data/error.reducer';

export default combineReducers({
  user,
  data,
  error
});
