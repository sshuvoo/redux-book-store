import { addNewBook } from '../actions';

export default function postBookThunk(book) {
   return async (dispatch) => {
      const response = await fetch('http://localhost:9000/books', {
         method: 'POST',
         body: JSON.stringify(book),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const savedbook = await response.json();
      dispatch(addNewBook(savedbook));
   };
}
