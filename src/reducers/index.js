import { combineReducers } from 'redux';
import reviewsReducer from './reviewsReducer';
import categoriesReducer from './categoriesReducer'


const rootReducer = combineReducers({ 
//   reviewsReducer,
  categoriesReducer,
//   shopsReducer
});

export default rootReducer
