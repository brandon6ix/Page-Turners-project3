import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Bookcard from "../components/Bookcard";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Book List</h1>
      <div className="book-list">
        {data.books.map((book) => (
          <Bookcard key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
