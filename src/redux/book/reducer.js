import { ADD_NEW_BOOK } from './actionTypes';

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_NEW_BOOK:
         return [
            ...state,
            {
               ...payload,
               id: state.length >= 1 ? state[state.length - 1].id + 1 : 1,
            },
         ];
      default:
         return [...state];
   }
};

export default reducer;
