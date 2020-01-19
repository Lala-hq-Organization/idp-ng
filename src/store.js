import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

let store = createStore(rootReducer, enhancer);

export default store;
