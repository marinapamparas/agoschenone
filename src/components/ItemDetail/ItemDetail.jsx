import "./ItemDetail.css"


const ItemDetail = ({galeria}) => {
    console.log("galeria como esta?", galeria)
    if (galeria !== undefined){       

        console.log("galeria.fotoscategoria URLS", galeria.fotosCategoria)
        if (galeria.fotosCategoria !== undefined && galeria.fotosCategoria.length > 0){
            console.log("entre AL IFFFF")
            // for (let i = 0; i < galeria.fotosCategoria.length; i++) {
                return (    
                    <div className='returnItemDetail'>
                        <h2 className="titleSections">{galeria.category}</h2>
                        
                        <div className='containerImgs'>
                            {galeria.fotosCategoria.map((imagen, index) => (
                            <div key={index}>
                                <img variant="top" src={imagen} />
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