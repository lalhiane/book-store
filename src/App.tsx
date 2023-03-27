import { Routes, Route } from 'react-router-dom';

import AppHeader from "./components/Header/AppHeader";

import BookList from "./components/BooksList/BookList";

import AddBook from "./components/AddBook/AddBook";

import EditeBook from './components/EditeBook/EditeBook';

function App() {

  return (<>

    <AppHeader />

    <Routes>
        
      <Route path="/" element={ <BookList /> } />

      <Route path="/addbook" element={<AddBook />} />
      
      <Route path="/:id" element={ <EditeBook /> } />

    </Routes>

  </>)

}

export default App;
