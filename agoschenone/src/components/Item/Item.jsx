import "./Item.css"
import { Link } from 'react-router-dom';






const Item = ({category, fotoPortada}) => {
    
    return (

      
        <div className="contenedorImagen">
            <Link to={'/category/'+ category}><img src={fotoPortada} alt="portadasection" className="imgsection"/></Link>
            <h2 className="sectiontitle">{category}</h2>
        </div>
        

    )
}

export default Item

//style={{ width: '20vw' }}