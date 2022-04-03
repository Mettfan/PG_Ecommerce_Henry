import './App.css';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Register } from '../features/Register';
import { Login } from '../features/Login';
import { DetailProduct } from '../features/DetailProduct';
import Promotions from '../components/Promotions/Promotions';
import PromotionDetails from '../components/PromotionDetails/PromotionDetails';


function App() {
  return (

    <div className="App">
    
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home/>} />
        <Route path="/productos/:id" element={<DetailProduct/>} />

        <Route path="/promotions" element={<Promotions/>} />
        <Route path="/promotions/:id" element={<PromotionDetails/>} />
          
        <Route path="*" element={<NavBar/>} />


      </Routes>
      
    </div>

  );
}

export default App;
