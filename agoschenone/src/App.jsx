import NavBar from './components/NavBar/NavBar';
import { BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  

  return (
    
  <div className="app-container">
    <BrowserRouter>
      
      <NavBar />
           
    </BrowserRouter>
  </div>
    
  )
}

export default App
