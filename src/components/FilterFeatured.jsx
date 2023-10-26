export default function FilterFeatured() {
   return (
      <div className="flex items-center space-x-4">
         <button className="filter-btn active-filter" id="lws-filterAll">
            All
         </button>
         <button className="filter-btn" id="lws-filterFeatured">
            Featured
         </button>
      </div>
   );
}
