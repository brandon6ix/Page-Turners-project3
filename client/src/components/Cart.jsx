import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} - ${book.price}
              <button onClick={() => removeFromCart(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalPrice}</h2>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart;
