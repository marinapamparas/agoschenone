import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.css';

function App() {
  

  return (
    
  <div className="app-container">
    <BrowserRouter>
      
      <NavBar />

      <Routes>
        <Route path='*' element= {<Navigate to='/'/>} /> 
      </Routes>    

      <Footer/>

    </BrowserRouter>
  </div>
    
  )
}

export default App
