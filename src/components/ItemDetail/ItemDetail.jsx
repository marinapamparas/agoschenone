import "./ItemDetail.css"


const ItemDetail = ({galeria}) => {
    
    if (galeria !== undefined){       

        
        if (galeria.fotosCategoria !== undefined && galeria.fotosCategoria.length > 0){
            
            // for (let i = 0; i < galeria.fotosCategoria.length; i++) {
                return (    
                    <div className='returnItemDetail'>
                        <h2 className="titleSections">{galeria.category}</h2>
                        
                        <div className='containerImgs'>
                            {galeria.fotosCategoria.map((imagen, index) => (
                            <div key={index}>
                                <img variant="top" src={imagen} className="detailImg"/>
                            </div>
                            ))}
                        </div>    
                    </div>
                    )            
            // }  
        }
    }
}

export default ItemDetail