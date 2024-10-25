import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// import Auth from '../graphql/Auth';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/login">
          Log In
        </Link>,
        <Link key={3} className="nav-link text-light" to="/signup">
        Signup
      </Link>,
      ]}
    />
  );
}
