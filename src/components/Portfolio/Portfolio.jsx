import './Portfolio.css'
import Loading from "../Loading/Loading"
import { getDocs, getFirestore, collection, query, where, orderBy } from 'firebase/firestore';
import { storage, getDownloadURL, ref, listAll } from "../../firebase/config";
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import PortfolioList from '../PortfolioList/PortfolioList';


const Portfolio = () =>{
    
    const [portfolio, setPortfolio] = useState ()
    const {portCategory} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const nameCollection = 'portfolio'

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
          console.error('Error getImageFirebase: category', error);
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
      
          // let queryFilter = queryCollection;

          //   console.log("hh", portCategory)
      
          // if (portCategory) {
          //   queryFilter = query(queryCollection, where('client', '==', portCategory));
          // }
          let queryFilter = portCategory
            ? query(queryCollection, where('client', '==', portCategory), orderBy('number')) // Filtro y orden por 'number'
            : query(queryCollection, orderBy('number')); // Solo orden por 'number' si no hay categoría


          setIsLoading(true);
      
          const resp = await getDocs(queryFilter);
      
          const dataPromises = resp.docs.map(async (doc) => ({
            id: doc.id,
            fotoPortada: await getUrlImagePortada(doc.data().portada),
            fotosPortfolioCliente:[],
            ...doc.data(),
          }));
      
          const data = await Promise.all(dataPromises);
      
          setPortfolio(data);
          console.log(data, 'data');
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
    };
         
    useEffect(() => {
        fetchData();
    }, [portCategory]); 


    return (        
        <div className='contenedoritemlist'>
       
        
        <div>
            { isLoading ? <Loading /> : <PortfolioList portfolio = {portfolio}/>}
        </div>  
        
        </div>       
    )


};

export default Portfolio




