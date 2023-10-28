import { FILTER_SEARCH, FILTER_STATUS } from './actions';

const initialState = { filterStatus: 'All' };

const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case FILTER_STATUS:
         return { ...state, filterStatus: payload };
      case FILTER_SEARCH:
         return { ...state, searchKeyword: payload };
      default:
         return { ...state };
   }
};

export default reducer;
