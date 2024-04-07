import './PortfolioItem.css'
import { Link } from 'react-router-dom';


const PortfolioItem = (portfolio) => {
    
    return (

      
        <div className="contenedorImagen">
            <Link to= {'/portfolio/client/' + portfolio.client}><img src={portfolio.fotoPortada} alt="portada client" className="imgPortfolio"/></Link>
            <h2 className="sectiontitle">{portfolio.client}</h2>
        </div>
        

    )
}

export default PortfolioItem






