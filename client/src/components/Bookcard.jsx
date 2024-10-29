import PropTypes from 'prop-types';

const Bookcard = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>${book.price.toFixed(2)}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

Bookcard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Bookcard;
