
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import photosReducer from './photoReducer';

// Tạo store với middleware thunk
const store = createStore(photosReducer, applyMiddleware(thunk));

export default store;
