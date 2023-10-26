import BookForm from './BookForm';

export default function FormSection() {
   return (
      <div>
         <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <BookForm />
         </div>
      </div>
   );
}
