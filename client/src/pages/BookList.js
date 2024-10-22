import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries";
import { CartContext } from "../context/CartContext";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - ${book.price}
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
