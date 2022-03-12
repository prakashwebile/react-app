import { createStore, applyMiddleware } from 'redux';
import persistedReducer from './reducer/index'
import thunk from 'redux-thunk';
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;