import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import UpdateForm from './UpdateForm';

export default function FormSection() {
   const updater = useSelector((state) => state.update);
   return (
      <div>
         <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">
               {updater.status ? 'Update Book' : 'Add New Book'}
            </h4>
            {updater.status && updater.id ? <UpdateForm /> : <BookForm />}
         </div>
      </div>
   );
}
