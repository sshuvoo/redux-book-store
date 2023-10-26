import BookCard from './BookCard';
import FilterFeatured from './FilterFeatured';

export default function BookContainer() {
   return (
      <div className="order-2 xl:-order-1">
         <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <FilterFeatured />
         </div>
         <div className="lws-bookContainer">
            <BookCard />
            <BookCard />
         </div>
      </div>
   );
}
