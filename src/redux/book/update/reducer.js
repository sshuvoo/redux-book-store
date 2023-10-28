import { EDITABLE_MODE } from './actions';

const initialState = { status: false };

const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case EDITABLE_MODE:
         return {
            ...state,
            status: payload.status,
            ...payload.book,
         };
      default:
         return { ...state };
   }
};

export default reducer;
