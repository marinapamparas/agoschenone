import './Footer.css'
import { FaInstagram, FaBehance } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
    
    
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.offsetHeight;
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

            if (documentHeight - windowHeight - scrollPosition < 50) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    
    
    let anio = new Date().getFullYear();
    
    function  obtenerAnio() {
        let  d = new  Date();
        let  n = d.getFullYear();
        return  n;
    }


    return (
        <>
            {showFooter && (
                <footer className='footer'>
                    <p className='footer_text'>Everything in life is perspective</p>
                    <div className='footer_socials'>
                    
                        <a href='https://www.instagram.com/agoschenone/' target="_blank" className='footer_instagram'><FaInstagram className='icon'/></a>
                
                        <a href="https://www.behance.net/agoschenone/" target="_blank" className='footer_behance'><FaBehance className='icon'/></a>
            
                        
                    </div>
                    <p className='footer_copyright'>Agostina Schenone © {obtenerAnio()} All rights reserved</p>
                    
                </footer>
            )}
        </>
    );

};


export default Footer;