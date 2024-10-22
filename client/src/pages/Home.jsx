import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXTERNAL_BOOKS } from '../graphql/queries';
import BookCard from '../components/Bookcard';

const Home = () => {
  const { loading, error, data } = useQuery(GET_EXTERNAL_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="book-list">
      {data.externalBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
