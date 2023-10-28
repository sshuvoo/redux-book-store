import { loadBook } from '../actions';

export default async function getAllBooksThunk(dispatch) {
   const response = await fetch('http://localhost:9000/books', {
      method: 'GET',
   });
   const allbooks = await response.json();
   dispatch(loadBook(allbooks));
}
