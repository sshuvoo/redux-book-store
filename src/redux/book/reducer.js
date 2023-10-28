import {
   ADD_NEW_BOOK,
   DELETE_BOOK,
   LOAD_BOOK,
   UPDATE_BOOK,
} from './actionTypes';

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case LOAD_BOOK:
         return [...payload];
      case ADD_NEW_BOOK:
         return [...state, { ...payload }];
      case DELETE_BOOK:
         return state.filter((book) => book.id !== payload);
      case UPDATE_BOOK:
         return state.map((book) => {
            if (book.id === payload.id) {
               return {
                  ...payload,
               };
            } else return { ...book };
         });
      default:
         return [...state];
   }
};

export default reducer;
