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
           
            <a href='https://agoschenone.darkroom.com/' target='_blank' rel='noopener noreferrer' className='nav-links' onClick={closeMenu}>Shop</a>
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
