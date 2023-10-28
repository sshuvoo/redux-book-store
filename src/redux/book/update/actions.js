export const EDITABLE_MODE = 'book/editableMode';

export const editableMode = (boolean, book) => {
   return {
      type: EDITABLE_MODE,
      payload: {
         status: boolean,
         book,
      },
   };
};
