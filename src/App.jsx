import BookContainer from './components/BookContainer';
import FormSection from './components/FormSection';
import Navbar from './components/Navbar';

export default function App() {
   return (
      <>
         <Navbar />
         <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
               <BookContainer />
               <FormSection />
            </div>
         </main>
      </>
   );
}
