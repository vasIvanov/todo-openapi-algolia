import {combineReducers} from 'redux';
import someReducer from './someSlice';
import todoReducer from './todoSlice';
import authReducer from './authSlice';

export const rootReducer = combineReducers({
  some: someReducer,
  todo: todoReducer,
  auth: authReducer,
});
