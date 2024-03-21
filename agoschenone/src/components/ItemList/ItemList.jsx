import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemList.css"
import { storage, getDownloadURL, ref, listAll } from "../../firebase/config";
import { useEffect, useState} from "react"
import Loading from "../Loading/Loading"
   



const ItemList = ({galeria}) => { 
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
    

    const fetchData = async (paramGaleria) => {
        try { 
            paramGaleria[0].fotosCategoria = await getUrlAllImage(paramGaleria[0].imagesurl)
            console.log("galeria llena de urls", paramGaleria)
        } catch (error) {
        console.error(error);
        } finally {
            setIsLoading (false)
        }
    };
        
    useEffect(() => {
        fetchData(galeria);
    }, []);
  


    if (galeria !== undefined) {
        let urlActual = window.location.href

        if(urlActual.includes('category')){
            return (
                <div className='contenedorCardsDetail'>
                     { isLoading ? <Loading /> : <ItemDetail galeria = {galeria[0]} />}
                </div>
            )
        }
        else{
            return (
                <div className='contenedorCards'>
                    {galeria.map(prod =>  <Item className='cardsItem' key={prod.id} {...prod}/>)}
                </div>
            )
        }
        
    }   
    
}

export default ItemList