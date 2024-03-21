import './NavBar.css';
import { FaInstagram, FaBehance } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/ASC.png';



const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg"  >
        <Container className='containernavbar'>
            <Link to='/' className='navbar-brand'><img src={logo} alt="logo agoschenone" className='logoimg' /></Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='togglenavbar' />
          
            <Navbar.Collapse id="responsive-navbar-nav" className='navbarcollapse'>
                
                <Nav className="me-auto navbarcollapse">
                    
                    <Link to='/' className='nav-links'>About me</Link>
                    
                    <NavDropdown title="Gallery" id="collapsible-nav-dropdown" className='nav-dropdown'>
                        
                        <Link to='/category/Events' className='dropdown-item'>Events</Link>
                        
                        <Link to='/category/Family' className='dropdown-item'>Family</Link>

                        <Link to='/category/Fashion' className='dropdown-item'>Fashion</Link>

                        <Link to='/category/Hotels' className='dropdown-item'>Hotels</Link>

                        <Link to='/category/Portraits' className='dropdown-item'>Portraits</Link>

                        <Link to='/category/Products' className='dropdown-item'>Products</Link>

                        <Link to='/category/Street' className='dropdown-item'>Street</Link>

                        <Link to='/category/Travels' className='dropdown-item'>Travels</Link>

                        <Link to='/category/Weddings' className='dropdown-item'>Weddings</Link>
                    
                    </NavDropdown>
                
                    <Link to='/portfolio' className='nav-links'>Portfolio</Link>
                    
                    <Link to='/' className='nav-links'>Shop</Link>

                
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