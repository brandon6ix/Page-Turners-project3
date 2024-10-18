import React from 'react';

const Bookcard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>${book.price.toFixed(2)}</p>
    </div>
  );
};

export default Bookcard;
