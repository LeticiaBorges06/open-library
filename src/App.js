import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import About from './pages/About';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  const [books, setBooks] = useState([]);

  return (
  <Router>
    <div className="app">
      <Header />
      <Routes>
          <Route path="/about" element={<About />} />
          </Routes>
      <Search setBooks={setBooks} />
      <BookList books={books} />
    </div>
    </Router>
  );
};

export default App;
