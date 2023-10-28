import { useEffect } from 'react';
import BookCard from './BookCard';
import FilterFeatured from './FilterFeatured';
import { useDispatch, useSelector } from 'react-redux';
import getAllBooksThunk from '../redux/book/thunk/getAllBooksThunk';

export default function BookContainer() {
   const dispatch = useDispatch();
   const books = useSelector((state) => state.books);
   const filters = useSelector((state) => state.filterStatus);

   useEffect(() => {
      dispatch(getAllBooksThunk);
   }, [dispatch]);

   return (
      <div className="order-2 xl:-order-1">
         <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <FilterFeatured />
         </div>
         <div className="lws-bookContainer">
            {books
               ?.filter((book) => {
                  if (filters.filterStatus === 'Featured') {
                     return book.featured;
                  } else return true;
               })
               .filter((book) => {
                  if (filters.searchKeyword?.trim()) {
                     if (
                        book.name
                           .toLowerCase()
                           .includes(filters.searchKeyword.toLowerCase())
                     )
                        return true;
                     else return false;
                  } else return true;
               })
               .map((book) => (
                  <BookCard key={book.id} book={book} />
               ))}
         </div>
      </div>
   );
}
