import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApolloProvider } from '@apollo/client'; // Apollo Client
import client from './graphql/client'; // Import your Apollo Client setup
import { BrowserRouter } from 'react-router-dom'; // React Router
import { CartProvider } from './context/CartContext'; // Cart Context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);

