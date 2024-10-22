import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} - ${book.price}
              <button onClick={() => removeFromCart(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalPrice}</h2>
      {cartItems.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart;
