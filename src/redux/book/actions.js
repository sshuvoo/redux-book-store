import {
   ADD_NEW_BOOK,
   DELETE_BOOK,
   LOAD_BOOK,
   UPDATE_BOOK,
} from './actionTypes';

export const loadBook = (books) => {
   return {
      type: LOAD_BOOK,
      payload: books,
   };
};

export const addNewBook = (book) => {
   return {
      type: ADD_NEW_BOOK,
      payload: book,
   };
};

export const deleteBook = (id) => {
   return {
      type: DELETE_BOOK,
      payload: id,
   };
};

export const updateBook = (book) => {
   return {
      type: UPDATE_BOOK,
      payload: book,
   };
};
