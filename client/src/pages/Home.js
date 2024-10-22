import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXTERNAL_BOOKS } from '../graphql/queries';
import BookCard from '../components/Bookcard';
import Spinner from '../components/Spinner/Spinner'; 

const Home = ({ addToCart }) => {
  const { loading, error, data } = useQuery(GET_EXTERNAL_BOOKS);

  if (loading) return <Spinner />; // Use a spinner component for better UX
  if (error) return <p>Error: {error.message} <button onClick={() => refetch()}>Retry</button></p>; // Add retry logic

  return (
    <div className="book-list">
      {data && data.externalBooks.map((book) => (
        <BookCard key={book.id} book={book} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;


