import "./Clients.css"


const Clients = ({portfolio}) => {
    console.log(portfolio, 'a ver qeu tiene portfolio')
    if (portfolio !== undefined){       

        console.log("entro a clients")
        if (portfolio.fotosPortfolioCliente !== undefined && portfolio.fotosPortfolioCliente.length > 0){
            console.log("entre")
            // for (let i = 0; i < galeria.fotosCategoria.length; i++) {
                return (    
                    <div className='returnItemDetail'>
                        <h2 className="titleSections">{portfolio.client}</h2>
                        
                        <div className='divClients'>
                            {portfolio.fotosPortfolioCliente.map((imagen, index) => (
                            <div key={index}>
                                <img variant="top" src={imagen} className="imgClients"/>
                            </div>
                            ))}
                        </div>    
                    </div>
                    )            
            // }  
        }
    }
}

export default Clients