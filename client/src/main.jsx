import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client'; // Apollo Client
// import client from './graphql/client'; // Import your Apollo Client setup
import { CartProvider } from './context/CartContext'; // Cart Context

import App from './App.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './index.css';

// Create a router using the new React Router 6 approach
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
    // <ApolloProvider client={client}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    // </ApolloProvider>
  // </StrictMode>
);

