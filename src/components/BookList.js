import React from 'react';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author_name ? book.author_name.join(', ') : 'Autor desconhecido'}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
