import './NavBar.css';
import Container from 'react-bootstrap/Container';
import { FaInstagram, FaBehance } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/ASC.png';
import { useState} from 'react';


const NavBar = () => {

    const [expanded, setExpanded] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
  


    const closeMenu = () => {
        setExpanded(false);
        setGalleryOpen(false);
    };

    const toggleGallery = () => {
        setGalleryOpen(!galleryOpen);
    };



    return (
    <Navbar collapseOnSelect expand="lg" expanded={expanded} >
        <Container className='containernavbar'>
            <Link to='/' className='navbar-brand'><img src={logo} alt="logo agoschenone" className='logoimg' /></Link>
            
            <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" className='togglenavbar' />
          
            <Navbar.Collapse id="responsive-navbar-nav" className='navbarcollapse'>
                
                <Nav className="me-auto navbarcollapse">
                    
                    <Link to='/aboutme' className='nav-links' onClick={closeMenu} >About me</Link>
                    
                    <NavDropdown title="Gallery" id="collapsible-nav-dropdown"  className='nav-dropdown'  show={galleryOpen} onClick={toggleGallery}>
                        
                        <Link to='/category/Events' className='dropdown-item'  onClick={closeMenu} >Events</Link>
                        
                        <Link to='/category/Couples and Families' className='dropdown-item'  onClick={closeMenu} >Couple & Family</Link>

                        <Link to='/category/Fashion' className='dropdown-item'  onClick={closeMenu} >Fashion</Link>

                        <Link to='/category/Hotel and Restaurants' className='dropdown-item'  onClick={closeMenu} >Hotel & Restaurants</Link>

                        <Link to='/category/Products' className='dropdown-item'  onClick={closeMenu} >Products</Link>

                        <Link to='/category/Portraits' className='dropdown-item'  onClick={closeMenu} >Portraits</Link>

                        <Link to='/category/Shot on Film' className='dropdown-item' onClick={closeMenu} >Shot on Film</Link>

                        <Link to='/category/Street' className='dropdown-item'  onClick={closeMenu} >Street</Link>

                        <Link to='/category/Travels' className='dropdown-item'  onClick={closeMenu} >Travels</Link>

                        <Link to='/category/Weddings' className='dropdown-item'  onClick={closeMenu} >Weddings</Link>
                    
                    </NavDropdown>
                
                    <Link to='/portfolio' className='nav-links' onClick={closeMenu}>Portfolio</Link>
                    
                    <Link to='/shop' className='nav-links' onClick={closeMenu}>Shop</Link>

                
                </Nav>
                
            </Navbar.Collapse>

            <div className="iconnavbar">
                <a href='https://www.instagram.com/agoschenone/' target="_blank" className='iconcontainer'><FaInstagram className='icon'/></a>
                
                <a href="https://www.behance.net/agoschenone/" target="_blank" className='iconcontainer'><FaBehance className='icon'/></a>
            </div>
        </Container>
    </Navbar>
    );










    // const [showMenu, setShowMenu] = useState(false);

    // const toggleMenu = () => {
    //   setShowMenu(!showMenu);
    // };

    // const closeMenu = () => {
    //     setShowMenu(false);
    //   };
  
    // return (
    //   <nav className="navbar">
    //     <div className="logo">Logo</div>
    //     <div className={`menu ${showMenu ? 'show' : ''}`}>
    //       <div className="menu-icon" onClick={toggleMenu}>
    //         <FiAlignJustify />
    //       </div>
    //       <div className="sections">
    //         <a href="#about" onClick={closeMenu}>About me</a>
    //         <a href="#gallery" onClick={closeMenu}>Gallery</a>
    //         <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
    //         <a href="#shop" onClick={closeMenu}>Shop</a>
    //       </div>
    //       <div className="icons">
    //         <FaInstagram />
    //         <FaBehance />
    //       </div>
    //     </div>
    //   </nav>
    // );
};


export default NavBar;