import './Footer.css'
import { FaInstagram, FaBehance } from 'react-icons/fa';


const Footer = () => {
    let anio = new Date().getFullYear();
    
    function  obtenerAnio() {
        let  d = new  Date();
        let  n = d.getFullYear();
        return  n;
    }


    return (
        <footer className='footer'>
            <p className='footer_text'>Everything in life is perspective</p>
            <div className='footer_socials'>
                
                <FaInstagram className='footer_instagram'/>
                <FaBehance className='footer_behance'/>
                
            </div>
            <p className='footer_copyright'>Agostina Schenone © {obtenerAnio()} All rights reserved</p>
            
        </footer>
    );

};


export default Footer;