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
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
        <Container className='containernavbar'>
            <Navbar.Brand href="#home"><img src={logo} alt="logo agoschenone" className='logoimg' /></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='togglenavbar' />
          
            <Navbar.Collapse id="responsive-navbar-nav" className='navbarcollapse'>
                
                <Nav className="me-auto navbarcollapse">
                    
                    <Nav.Link href="#features">About me</Nav.Link>
                    
                    <NavDropdown title="Gallery" id="collapsible-nav-dropdown">
                        
                        <NavDropdown.Item href="#action/3.1">Weddings</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.2">Hotels</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.3">Portraits</NavDropdown.Item>
                    
                    </NavDropdown>
                
                    <Nav.Link href="#deets">Portfolio</Nav.Link>
                    
                    <Nav.Link href="#memes">Shop</Nav.Link>

                
                </Nav>
                
            </Navbar.Collapse>

            <div className="iconnavbar">
                <a href='https://www.instagram.com/agoschenone/' className='iconcontainer'><FaInstagram className='icon'/></a>
                
                <a href="https://www.behance.net/agoschenone/" className='iconcontainer'><FaBehance className='icon'/></a>
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