import { deleteBook } from '../actions';

export default function deleteBookThunk(id) {
   return async (dispatch) => {
      await fetch(`http://localhost:9000/books/${id}`, {
         method: 'DELETE',
      });
      dispatch(deleteBook(id));
   };
}
