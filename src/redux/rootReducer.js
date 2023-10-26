import { combineReducers } from 'redux';
import booksReducer from './book/reducer';

const rootReducer = combineReducers({ books: booksReducer });

export default rootReducer;
