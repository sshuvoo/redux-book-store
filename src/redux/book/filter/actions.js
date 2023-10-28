export const FILTER_STATUS = 'book/filterStatus';
export const FILTER_SEARCH = 'book/filterSearch';

export const filterStatus = (status) => {
   return {
      type: FILTER_STATUS,
      payload: status,
   };
};

export const filterSearch = (keyword) => {
   return {
      type: FILTER_SEARCH,
      payload: keyword,
   };
};
