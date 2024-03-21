import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore';
import { storage, getDownloadURL, ref, listAll } from "../../firebase/config";
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"



const ItemListContainer = () =>{
    const [galeria, setGaleria] = useState ()
    const {galCategory} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const nameCollection = 'galeria'
    

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
      
    const getUrlImagePortada = async (path) => {        
        try {
          const fotoPortada = await getImageFirebase(path);
          return fotoPortada[0];
        } catch (error) {
          console.error('Error getUrlImagePortada:', error);          
          return [];
        }
    };

    
    

    const fetchData = async () => {
        try {
          const db = getFirestore();
          const queryCollection = collection(db, nameCollection);
      
          let queryFilter = queryCollection;


      
          if (galCategory) {
            queryFilter = query(queryCollection, where('category', '==', galCategory));
          }

          setIsLoading(true);
      
          const resp = await getDocs(queryFilter);
      
          const dataPromises = resp.docs.map(async (doc) => ({
            id: doc.id,
            fotoPortada: await getUrlImagePortada(doc.data().portada),
            fotosCategoria:[],
            ...doc.data(),
          }));
      
          const data = await Promise.all(dataPromises);
      
          setGaleria(data);
          console.log(data, 'data');
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
    };
         
    useEffect(() => {
        fetchData();
    }, [galCategory]); 


    return (        
        <div className='contenedoritemlist'>
       
        
        <div>
            { isLoading ? <Loading /> : <ItemList galeria = {galeria}/>}
        </div>  
        
        </div>       
    )
}

export default ItemListContainer