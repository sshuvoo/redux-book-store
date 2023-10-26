import { ADD_NEW_BOOK } from './actionTypes';

export const addNewBook = (book) => {
   return {
      type: ADD_NEW_BOOK,
      payload: book,
   };
};
