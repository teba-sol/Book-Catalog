import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myBook/create" element={<CreateBook />} />
      <Route path="/myBook/details/:id" element={<ShowBook />} />
      <Route path="/myBook/edit/:id" element={<EditBook />} />
      <Route path="/myBook/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}

export default App;

