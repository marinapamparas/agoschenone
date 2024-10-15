import './NavBar.css';
import Container from 'react-bootstrap/Container';
import { FaInstagram, FaBehance } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/ASC.png';
import { useState } from 'react';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" expanded={expanded} >
      <Container className='containernavbar'>
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt="logo agoschenone" className='logoimg' />
        </Link>
        
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" className='togglenavbar' />
        
        <Navbar.Collapse id="responsive-navbar-nav" className='navbarcollapse'>
          <Nav className="me-auto">
            <Link to='/aboutme' className='nav-links espacioTop' onClick={closeMenu} >About me</Link>
            
            <NavDropdown title="Gallery" id="collapsible-nav-dropdown" className='nav-dropdown'>
              {['Events', 'Couple & Family', 'Fashion', 'Hotel & Restaurants', 'Products', 'Portraits', 'Shot on Film', 'Street', 'Travels', 'Weddings'].map(category => (
                <Link key={category} to={`/category/${category}`} className='dropdown-item' onClick={closeMenu}>
                  {category}
                </Link>
              ))}
            </NavDropdown>

            <Link to='/portfolio' className='nav-links' onClick={closeMenu}>Portfolio</Link>
            <Link to='/shop' className='nav-links' onClick={closeMenu}>Shop</Link>
          </Nav>
            <div className="iconnavbarMobile">
                <a href='https://www.instagram.com/agoschenone/' target="_blank" rel="noreferrer" className='iconMobile Insta'>
                    <FaInstagram className='icon' />
                </a>
                <a href="https://www.behance.net/agoschenone/" target="_blank" rel="noreferrer" className='iconMobile Behance'>
                    <FaBehance className='icon' />
                </a>
            </div>
          <p className="mobile-only-text">Everything in life is perspective</p>
          <p className="mobile-only-text-agos">Agostina Schenone ©</p>

        </Navbar.Collapse>

        <div className="iconnavbar desktop-only">
          <a href='https://www.instagram.com/agoschenone/' target="_blank" rel="noreferrer" className='iconcontainer'>
            <FaInstagram className='icon' />
          </a>
          <a href="https://www.behance.net/agoschenone/" target="_blank" rel="noreferrer" className='iconcontainer'>
            <FaBehance className='icon' />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;



// import './NavBar.css';
// import Container from 'react-bootstrap/Container';
// import { FaInstagram, FaBehance } from 'react-icons/fa';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../assets/ASC.png';
// import { useState} from 'react';


// const NavBar = () => {

//     const [expanded, setExpanded] = useState(false);
//     const [galleryOpen, setGalleryOpen] = useState(false);
  


//     const closeMenu = () => {
//         setExpanded(false);
//         setGalleryOpen(false);
//     };

//     const toggleGallery = () => {
//         setGalleryOpen(!galleryOpen);
//     };



//     return (
//     <Navbar collapseOnSelect expand="lg" expanded={expanded} >
//         <Container className='containernavbar'>
//             <Link to='/' className='navbar-brand'><img src={logo} alt="logo agoschenone" className='logoimg' /></Link>
            
//             <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" className='togglenavbar' />
          
//             <Navbar.Collapse id="responsive-navbar-nav"  className='navbarcollapse'>
                
//                 <Nav className="me-auto navbarcollapse">
                    
//                     <Link to='/aboutme' className='nav-links espacioTop' onClick={closeMenu} >About me</Link>
                    
//                     <NavDropdown title="Gallery" id="collapsible-nav-dropdown"  className='nav-dropdown'  show={galleryOpen} onClick={toggleGallery}>
                        
//                         <Link to='/category/Events' className='dropdown-item'  onClick={closeMenu} >Events</Link>
                        
//                         <Link to='/category/Couples and Families' className='dropdown-item'  onClick={closeMenu} >Couple & Family</Link>

//                         <Link to='/category/Fashion' className='dropdown-item'  onClick={closeMenu} >Fashion</Link>

//                         <Link to='/category/Hotel and Restaurants' className='dropdown-item'  onClick={closeMenu} >Hotel & Restaurants</Link>

//                         <Link to='/category/Products' className='dropdown-item'  onClick={closeMenu} >Products</Link>

//                         <Link to='/category/Portraits' className='dropdown-item'  onClick={closeMenu} >Portraits</Link>

//                         <Link to='/category/Shot on Film' className='dropdown-item' onClick={closeMenu} >Shot on Film</Link>

//                         <Link to='/category/Street' className='dropdown-item'  onClick={closeMenu} >Street</Link>

//                         <Link to='/category/Travels' className='dropdown-item'  onClick={closeMenu} >Travels</Link>

//                         <Link to='/category/Weddings' className='dropdown-item'  onClick={closeMenu} >Weddings</Link>
                    
//                     </NavDropdown>
                
//                     <Link to='/portfolio' className='nav-links' onClick={closeMenu}>Portfolio</Link>
                    
//                     <Link to='/shop' className='nav-links' onClick={closeMenu}>Shop</Link>

                
//                 </Nav>
                
//             </Navbar.Collapse>

//             <div className="iconnavbar">
//                 <a href='https://www.instagram.com/agoschenone/' target="_blank" rel="noreferrer" className='iconcontainer'><FaInstagram className='icon'/></a>
                
//                 <a href="https://www.behance.net/agoschenone/" target="_blank" rel="noreferrer" className='iconcontainer'><FaBehance className='icon'/></a>
//             </div>
//         </Container>
//     </Navbar>
//     );







