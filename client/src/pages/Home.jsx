import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries';
import BookCard from '../components/Bookcard';
import Spinner from '../components/Spinner/Spinner'; 

const Home = ({ addToCart }) => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);

  if (loading) return <Spinner />;
  if (error) return (
    <div>
      <p>New Error: {error.message}</p>
      <button onClick={() => refetch()}>Retry</button>
    </div>
  );

  const bookdata = data?.books || [];

  return (
    <div className="book-list">
      {bookdata.map((book) => (
        <BookCard key={book.id} book={book} addToCart={addToCart} />
      ))}
    </div>
  );
};

Home.propTypes = {
  addToCart: PropTypes.func,
};

export default Home;
