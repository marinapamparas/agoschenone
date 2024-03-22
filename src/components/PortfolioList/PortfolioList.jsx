import PortfolioItem from "../PortfolioItem/PortfolioItem";
import "./PortfolioList.css"
import { storage, getDownloadURL, ref, listAll } from "../../firebase/config";
import { useEffect, useState} from "react"
import Loading from "../Loading/Loading"
import Clients from "../Clients/Clients";
   



const PortfolioList = ({portfolio}) => { 
    const [isLoading, setIsLoading] = useState(true)
    

    const getImageFirebase = async (path) => {
        const urls = [];
      
        try {
          const listResult = await listAll(ref (storage, path));
      
          if (listResult && listResult.items) {
            for (const item of listResult.items) {
              const imageUrl = await getDownloadURL(ref (storage,item));
              urls.push(imageUrl);
            }
          }
        } catch (error) {
          console.error('Error getImageFirebase:', error);
          throw error;
        }
      
        return urls;
    };


    const getUrlAllImage = async (path) => {        
        try {
        const allFotosCategoria = await getImageFirebase(path);
        return allFotosCategoria;
        } catch (error) {
        console.error('Error getUrlAllImage:', error);          
        return [];
        }
    };
    

    const fetchData = async (paramPortfolio) => {
        try { 
            paramPortfolio[0].fotosPortfolioCliente = await getUrlAllImage(paramPortfolio[0].imagesurl)
            
        } catch (error) {
        console.error(error);
        } finally {
            setIsLoading (false)
        }
    };
        
    useEffect(() => {
        
        fetchData(portfolio);
    }, []);
  


    if (portfolio !== undefined) {
        let urlActual = window.location.href

        

        if(urlActual.includes('client')){
            
            return (
                <div className='contenedorPC'>
                     { isLoading ? <Loading /> : <Clients portfolio = {portfolio[0]} />}
                </div>
            )
        }
        else{
            return (
                <div className='contenedorPI'>
                    {portfolio.map(prod =>  <PortfolioItem className='cardsItem' key={prod.id} {...prod}/>)}
                </div>
            )
        }
        
    }   
    
}

export default PortfolioList