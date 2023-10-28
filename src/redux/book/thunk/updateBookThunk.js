import { updateBook } from '../actions';
import { editableMode } from '../update/actions';

export default function updateBookThunk(id, book) {
   return async (dispatch) => {
      const response = await fetch(`http://localhost:9000/books/${id}`, {
         method: 'PATCH',
         body: JSON.stringify(book),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const updatedBook = await response.json();
      dispatch(updateBook(updatedBook));
      dispatch(editableMode(false, updatedBook));
   };
}
