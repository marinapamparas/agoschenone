import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Shop from './components/Shop/Shop';

function App() {
  

  return (
    
  <div className="app-container">
    <BrowserRouter>
      
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/category/:galCategory' element={<ItemListContainer greeting='Titulo de cada categoria'/>} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio/client/:portCategory' element={<Portfolio/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='*' element= {<Navigate to='/'/>} />
      </Routes>    

      <Footer/>

    </BrowserRouter>
  </div>
    
  )
}

export default App
