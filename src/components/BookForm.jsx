import { useState } from 'react';
import { useDispatch } from 'react-redux';
import postBookThunk from '../redux/book/thunk/postBookThunk';

export default function BookForm() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [author, setAuthor] = useState('');
   const [thumbnail, setThumbnail] = useState('');
   const [price, setPrice] = useState('');
   const [rating, setRating] = useState('');
   const [featured, setFeatured] = useState(false);

   const submitHandler = (event) => {
      event.preventDefault();
      dispatch(
         postBookThunk({
            name,
            author,
            thumbnail,
            price: Number(price),
            rating: Number(rating),
            featured,
         })
      );
   };

   return (
      <form onSubmit={submitHandler} className="book-form">
         <div className="space-y-2">
            <label htmlFor="input-Bookname">Book Name</label>
            <input
               onChange={(e) => setName(e.target.value)}
               value={name}
               required
               className="text-input"
               type="text"
               id="input-Bookname"
               name="name"
            />
         </div>

         <div className="space-y-2">
            <label htmlFor="input-Bookauthor">Author</label>
            <input
               onChange={(e) => setAuthor(e.target.value)}
               value={author}
               required
               className="text-input"
               type="text"
               id="input-Bookauthor"
               name="author"
            />
         </div>

         <div className="space-y-2">
            <label htmlFor="input-Bookthumbnail">Image Url</label>
            <input
               onChange={(e) => setThumbnail(e.target.value)}
               value={thumbnail}
               required
               className="text-input"
               type="text"
               id="input-Bookthumbnail"
               name="thumbnail"
            />
         </div>

         <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
               <label htmlFor="input-Bookprice">Price</label>
               <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                  className="text-input"
                  type="number"
                  id="input-Bookprice"
                  name="price"
               />
            </div>

            <div className="space-y-2">
               <label htmlFor="input-Bookrating">Rating</label>
               <input
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  required
                  className="text-input"
                  type="number"
                  id="input-Bookrating"
                  name="rating"
                  min="1"
                  max="5"
               />
            </div>
         </div>

         <div className="flex items-center">
            <input
               onChange={(e) => setFeatured(e.target.checked)}
               checked={featured}
               id="input-Bookfeatured"
               type="checkbox"
               name="featured"
               className="w-4 h-4"
            />
            <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
               This is a featured book
            </label>
         </div>

         <button type="submit" className="submit" id="submit">
            Add Book
         </button>
      </form>
   );
}
