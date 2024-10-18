import './BookStyles.css';


// import { useState } from 'react';

// function Book() {
//     const [book, setbook] = useState([]);

// }


const newBook = ({ title, picture, author, inStock, }) => {
    return (
      <div className="book-card" >
        <img src={picture} alt={title}  />
        <h2>{title}</h2>
        <p><strong>Author:</strong> {author}</p>
        <p>
          <strong>Status:</strong> {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    );
  };
  
export default newBook;