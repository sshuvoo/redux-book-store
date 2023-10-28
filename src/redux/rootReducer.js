import { combineReducers } from 'redux';
import booksReducer from './book/reducer';
import filterReducer from './book/filter/reducer';
import updateReducer from './book/update/reducer';

const rootReducer = combineReducers({
   books: booksReducer,
   filterStatus: filterReducer,
   update: updateReducer,
});

export default rootReducer;
