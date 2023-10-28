import { useDispatch, useSelector } from 'react-redux';
import { filterStatus } from '../redux/book/filter/actions';

export default function FilterFeatured() {
   const status = useSelector((state) => state.filterStatus);
   const dispatch = useDispatch();

   return (
      <div className="flex items-center space-x-4">
         <button
            onClick={() => dispatch(filterStatus('All'))}
            className={`filter-btn ${
               status.filterStatus === 'All' && 'active-filter'
            }`}
            id="lws-filterAll"
         >
            All
         </button>
         <button
            onClick={() => dispatch(filterStatus('Featured'))}
            className={`filter-btn ${
               status.filterStatus === 'Featured' && 'active-filter'
            }`}
            id="lws-filterFeatured"
         >
            Featured
         </button>
      </div>
   );
}
