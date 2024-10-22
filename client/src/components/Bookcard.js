import React from 'react';

const Bookcard = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>${book.price.toFixed(2)}</p>
      {/* Add to Cart Button */}
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default Bookcard;

