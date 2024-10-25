// export default function Nav({ links = [] }) { // Default to an empty array if `links` is undefined
//     return (
//       <nav className="navbar navbar-expand-lg bg-secondary">
//         <div className="container-fluid">
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {links.length > 0 ? (
//                 links.map((link, index) => (
//                   <li key={index} className="nav-item">
//                     {link} {/* Assuming `link` is a JSX element like a <Link> */}
//                   </li>
//                 ))
//               ) : (
//                 <li className="nav-item">
//                   <span>No links available</span>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
// }


import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Navbar({ links = [] }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}




// export default function Nav({ links }) {
//     return (
//       <nav className="navbar navbar-expand-lg bg-secondary">
//         <div className="container-fluid">
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {links.map((link) => link)}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
  






// <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container fluid>
//           <Navbar.Brand as={Link} to='/'>
//             Google Books Search
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='navbar' />
//           <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
//             <Nav className='ml-auto d-flex'>
//               <Nav.Link as={Link} to='/'>
//                 Search For Books
//               </Nav.Link>
//               {/* if user is logged in show saved books and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to='/saved'>
//                     See Your Books
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>