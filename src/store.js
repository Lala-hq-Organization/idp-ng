import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);
const persistedState = loadState();

let store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(
  throttle(() => {
    saveState({
      authentication: store.getState().authentication
    });
  }, 1000)
);

export default store;
