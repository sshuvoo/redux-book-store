import RatingStar from './RatingStar';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';

/* eslint-disable react/prop-types */
export default function BookCard({ book }) {
   return (
      <div className="book-card">
         <img
            className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
            src={book.thumbnail}
            alt="book"
         />
         <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
            <div className="flex items-center justify-between">
               <span className={book.featured && 'badge-success lws-Badge'}>
                  {book.featured && 'featured'}
               </span>

               <div className="text-gray-500 space-x-2">
                  <EditButton book={book} />
                  <DeleteButton id={book.id} />
               </div>
            </div>

            <div className="space-y-2 mt-4 h-full">
               <h4 className="lws-bookName">{book.name}</h4>
               <p className="lws-author">{book.author}</p>
               <div className="lws-stars">
                  {Array(book.rating).fill(<RatingStar />)}
               </div>
               <p className="lws-price">{book.price}</p>
            </div>
         </div>
      </div>
   );
}
